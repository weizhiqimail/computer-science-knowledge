import fs from 'node:fs';
import path from 'node:path';
const dirs=fs.readdirSync('.').filter(x=>/^C[1-6]-/.test(x));
const files=dirs.flatMap(d=>fs.readdirSync(d).filter(f=>f.endsWith('.md')).map(f=>path.join(d,f)));
const originals=new Map(files.map(f=>[f,fs.readFileSync(f,'utf8')]));
const definitions=t=>new Map([...t.matchAll(/^\[([^\]]+)\]:\s*(https?:\/\/\S+)/gm)].map(m=>[m[1],m[2]]));
const c1defs=definitions(originals.get(path.join('C1-总述','C1-07-总结.md'))||'');
let before=0,after=0,links=0,converted=0;const unresolved=[];
const join=(a,b)=>a+(/[A-Za-z0-9]$/.test(a)&&/^[A-Za-z0-9]/.test(b)?' ':'')+b;
for(const [file,raw] of originals){
 before+=raw.split(/\r?\n/).length;
 const defs=definitions(raw);
 let text=raw.replace(/\[([^\]\n]+)\]\[([^\]\n]+)\]/g,(all,label,id)=>{
  const url=defs.get(id)||(file.startsWith('C1-')?c1defs.get(id):undefined);
  if(!url){unresolved.push({file,id,label});return all;}
  links++;return `[${label}](${url})`;
 });
 // 仅把短小、无图形结构的text代码块转成行内文字；架构图及真正代码原样保留。
 text=text.replace(/^```text\r?\n([\s\S]*?)^```\s*$/gm,(all,body)=>{
  const rows=body.trim().split(/\r?\n/);
  if(rows.length>10||rows.some(x=>!x.trim()||/^\s/.test(x)||/[│─┌┐└┘├┤┬┴┼↓↑→←▼▲=<>`{}\[\];]/.test(x)||x.length>65)||body.length>220)return all;
  converted++;return rows.map(x=>x.trim()).join('、');
 });
 const lines=text.split(/\r?\n/);const out=[];let fence=false,para='';
 const flush=()=>{if(para){out.push(para,'');para='';}};
 for(const line of lines){
  if(/^\s*(```|~~~)/.test(line)){flush();fence=!fence;out.push(line);continue;}
  if(fence){out.push(line);continue;}
  if(!line.trim())continue;
  const structural=/^(?:#{1,6}\s|\s*[-*+]\s|\s*\d+[.)]\s|\s*>|\s*\||\s*[-*_]{3,}\s*$|\[[^\]]+\]:|\s*<| {2,}\S)/.test(line);
  if(structural){flush();out.push(line,'');continue;}
  const s=line.trim();
  if(para&&para.length+s.length>240)flush();
  para=para?join(para,s):s;
 }
 flush();
 // 恢复表格和连续列表行之间的紧凑排列。
 let result=out.join('\n').replace(/\n{3,}/g,'\n\n');
 result=result.replace(/(\|[^\n]*\|)\n\n(?=\|)/g,'$1\n');
 result=result.trimEnd()+'\n';
 fs.writeFileSync(file,result);
 after+=result.split('\n').length;
}
console.log(JSON.stringify({files:files.length,before,after,links,converted,unresolved},null,2));
