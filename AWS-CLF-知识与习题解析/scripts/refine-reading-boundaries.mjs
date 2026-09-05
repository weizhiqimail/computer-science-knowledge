import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=execFileSync('git',['rev-parse','--show-toplevel'],{encoding:'utf8'}).trim();
const dirs=fs.readdirSync('.').filter(x=>/^C[1-6]-/.test(x));
let fixes=0;
for(const dir of dirs)for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.md'))){
 const p=path.join(dir,file);let text=fs.readFileSync(p,'utf8');
 let old='';try{old=execFileSync('git',['show',`HEAD:${path.relative(root,path.resolve(p)).replaceAll('\\','/')}`],{encoding:'utf8',stdio:['ignore','pipe','ignore']});}catch{}
 old=old.replace(/^```text\r?\n([\s\S]*?)^```\s*$/gm,(all,body)=>{
  const rows=body.trim().split(/\r?\n/);
  if(rows.length>10||rows.some(x=>!x.trim()||/^\s/.test(x)||/[│─┌┐└┘├┤┬┴┼↓↑→←▼▲=<>`{}\[\];]/.test(x)||x.length>65)||body.length>220)return all;
  return rows.map(x=>x.trim()).join('、');
 });
 const rows=old.split(/\r?\n/).filter(x=>x.trim());
 for(let i=1;i<rows.length;i++){
  const a=rows[i-1].trim(),b=rows[i].trim();
  if(!a||!b||/^[#>|`~\-\d]/.test(a)||/^[#>|`~\-\d]/.test(b)||/[。！？：:，,；;]$/.test(a))continue;
  const combined=a+(/[A-Za-z0-9]$/.test(a)&&/^[A-Za-z0-9]/.test(b)?' ':'')+b;
  if(text.includes(combined)){text=text.split(combined).join(a+'；'+b);fixes++;}
 }
 // 题目、答案等字段保留独立段落，避免不同字段粘连。
 text=text.replace(/([^\n])(?=\*\*(?:选项|主分类|题库记录答案|需求\/考点标签|社区投票|题目)[：:])/g,'$1\n\n');
 text=text.replace(/\*\*中文[：:]\*\*/g,'中文：');
 text=text.replace(/([^\n])中文：/g,'$1；中文：');
 text=text.replace(/(\*\*[^*\n]+\*\*)(?=(?:它不是|它是|意思是|核心问题|也叫|英文全称))/g,'$1。');
 // 紧凑列表：不改变条目内容及缩进。
 text=text.replace(/(^\s*[-*+] [^\n]+)\n\n(?=\s*[-*+] )/gm,'$1\n');
 for(let attempt=0;attempt<10;attempt++){
  try{fs.writeFileSync(p,text);break;}catch(e){if(attempt===9)throw e;await new Promise(r=>setTimeout(r,200));}
 }
}
console.log({boundaryFixes:fixes});
