$ErrorActionPreference = 'Stop'
$chapter = Join-Path (Split-Path -Parent $PSScriptRoot) 'C1-总述'
$titles = @{
 'C1-01-阅读说明与资料来源.md'='C1-01-AWS-CLF-C02系统学习文档：阅读说明与资料来源'; 'C1-02-从传统机房到AWS云.md'='C1-02-从传统机房到AWS云'; 'C1-03-GlobalShop全球电商业务模型.md'='C1-03-GlobalShop全球电商业务模型'; 'C1-04-AWS完整技术地图.md'='C1-04-AWS完整技术地图'; 'C1-05-AWS服务分类与命名规则.md'='C1-05-AWS服务分类与命名规则'; 'C1-06-CLF-C02考试与719题知识地图.md'='C1-06-CLF-C02考试与719题知识地图'; 'C1-07-总结.md'='C1-07-总结'
}
$summaryNums = @{ 'C1-01-阅读说明与资料来源.md'=11; 'C1-02-从传统机房到AWS云.md'=21; 'C1-03-GlobalShop全球电商业务模型.md'=28; 'C1-04-AWS完整技术地图.md'=18; 'C1-05-AWS服务分类与命名规则.md'=34; 'C1-06-CLF-C02考试与719题知识地图.md'=21 }
$childLists = @{
 'C1-01-阅读说明与资料来源.md'=@('★★★★★-HA','★★★★-DR','★★★-CDN','★★★★★-IAM');
 'C1-02-从传统机房到AWS云.md'=@('CAPEX','OPEX');
 'C1-04-AWS完整技术地图.md'=@('Region','Availability-Zone','AWS-CAF','AWS-Well-Architected-Framework');
 'C1-05-AWS服务分类与命名规则.md'=@('★★★★★-EC2','★★★★★-S3','★★★★★-RDS','★★★★-EBS','★★★-EFS','★★★★★-VPC','★★★★★-IAM','★★★★-KMS','★★★★-SQS','★★★-SNS','★★★-ECS','★★★-EKS','★★★-ECR','★★★-DMS','★★-SCT','★★★-ACM','★★★-RAM','Authentication','Authorization','Encryption-at-Rest','Encryption-in-Transit','Availability','Reliability','Durability');
 'C1-06-CLF-C02考试与719题知识地图.md'=@('第一：发现高频知识','第二：发现相似服务','第三：发现考试语言','第四：发现旧知识','A.-服务选择题','B.-云概念题')
}
function Clean([string]$s) { (($s.Trim() -replace '\.md$','' -replace '\s*/\s*','/' -replace '\s+','-' -replace '-{2,}','-' -replace '^(\d+(?:\.\d+)*)\.-','$1-').Trim('-')) }
function ChildNumber([string]$name,[string]$text) {
 $a=$childLists[$name]; if (-not $a) { return $null }; $i=[array]::IndexOf($a,$text); if($i -lt 0){return $null}
 if($name -like 'C1-01*'){return "7.$($i+1)"}; if($name -like 'C1-02*'){return "4.$($i+1)"}
 if($name -like 'C1-04*'){if($i-lt 2){return "3.$($i+1)"}else{return "16.$($i-1)"}}
 if($name -like 'C1-05*'){if($i-lt 17){return "2.$($i+1)"}; if($i-lt 19){return "24.$($i-16)"}; if($i-lt 21){return "25.$($i-18)"}; return "28.$($i-20)"}
 if($name -like 'C1-06*'){if($i-lt 4){return "12.$($i+1)"}else{return "15.$($i-3)"}}
}
# 去掉 C1-06 开头误混入的 C1-01 小结；原文随后追加回 C1-01。
$sixPath=Join-Path $chapter 'C1-06-CLF-C02考试与719题知识地图.md'; $six=[Collections.Generic.List[string]](Get-Content -LiteralPath $sixPath); $cut=-1
for($i=1;$i-lt $six.Count;$i++){if($six[$i]-match '^#{2,6}\s+C1-06-'){ $cut=$i; break }}
if($cut-gt 1){$m=$six.GetRange(1,$cut-1);$one=Join-Path $chapter 'C1-01-阅读说明与资料来源.md';$raw=Get-Content -LiteralPath $one -Raw;if($raw-notmatch '719题\s*\r?\n不是教材本身'){[IO.File]::AppendAllText($one,"`r`n`r`n## 11-本章小结`r`n"+(($m|?{$_-notmatch'^#{1,6}\s+'})-join"`r`n")+"`r`n",[Text.UTF8Encoding]::new($false))};$six.RemoveRange(1,$cut-1);[IO.File]::WriteAllLines($sixPath,$six,[Text.UTF8Encoding]::new($false))}
foreach($name in $titles.Keys){
 $path=Join-Path $chapter $name;$lines=Get-Content -LiteralPath $path;$out=[Collections.Generic.List[string]]::new();$out.Add('# '+$titles[$name]);$out.Add('')
 foreach($line in $lines){
  if($line-match'^#{1,6}\s+(.+)$'){$text=Clean $Matches[1];if($text-eq$titles[$name]-or(($text-match'^C1-\d{2}-')-and($text-notmatch'小结'))-or($name-like'C1-03*'-and$text-eq'GlobalShop')-or($name-like'C1-06*'-and$text-eq'CLF-C02-考试与-719-题知识地图')){continue};if($text-match'^C1-\d{2}-小结$'){$text="$($summaryNums[$name])-本章小结"};$num=ChildNumber $name $text;if($num){$text=$text-replace'^第[一二三四]：',''-replace'^[AB]\.-','';$text="$num-$text"};if($name-like'C1-07*'-and$text-match'^认识([一二三四五六])：(.+)$'){$n=@{'一'=1;'二'=2;'三'=3;'四'=4;'五'=5;'六'=6}[$Matches[1]];$text="$n-$($Matches[2])"};if($text-match'^(\d+(?:\.\d+)*)[.\-](.+)$'){$level=2+([regex]::Matches($Matches[1],'\.').Count);$out.Add(('#'*$level)+' '+$Matches[1]+'-'+$Matches[2])}else{$out.Add('## '+$text)}}else{if($out.Count-eq2-and[string]::IsNullOrWhiteSpace($line)){continue};$out.Add($line)}
 }
 # 旧文档中单独占一行的星级并入它所属的最近标题。
 for($i=0;$i-lt$out.Count;$i++){
  if($out[$i]-match'^★{1,5}$'){
   for($j=$i-1;$j-ge0;$j--){
    if($out[$j]-match'^(#{2,6})\s+(\d+(?:\.\d+)*)-(.+)$'){$out[$j]="$($Matches[1]) $($Matches[2])-$($out[$i])-$($Matches[3])";break}
   }
   $out.RemoveAt($i);$i--
  }
 }
 [IO.File]::WriteAllLines($path,$out,[Text.UTF8Encoding]::new($false))
}
