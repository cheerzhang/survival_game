const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname,PORT=Number(process.env.PORT||4173),MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png'};
function send(res,status,body,type='application/json'){res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store'});res.end(body)}
function validStrategy(s){return s&&/^\d+\.\d+\.\d+$/.test(s.version)&&[s.eatMealBelow,s.eatBerryBelow,s.fishBelow,s.trapThreatDistance,s.survivalTargetDay,s.testSpeed].every(Number.isFinite)&&Array.isArray(s.craftPriority)&&s.craftPriority.every(x=>typeof x==='string')}
function strategySource(s){return `/**\n * 正式 AI 策略配置。\n * 本地回归测试确认新参数更好后，只修改这个文件并发布。\n */\nwindow.AI_STRATEGY=${JSON.stringify(s,null,2)};\n`}
const server=http.createServer((req,res)=>{
  if(req.method==='POST'&&req.url==='/__ai_strategy'){let body='';req.on('data',c=>{body+=c;if(body.length>20000)req.destroy()});req.on('end',()=>{try{let strategy=JSON.parse(body);if(!validStrategy(strategy))return send(res,400,JSON.stringify({ok:false,error:'策略格式无效'}));fs.writeFileSync(path.join(ROOT,'ai-strategy.js'),strategySource(strategy));send(res,200,JSON.stringify({ok:true,version:strategy.version}))}catch(e){send(res,400,JSON.stringify({ok:false,error:e.message}))}});return}
  let url=new URL(req.url,'http://localhost'),file=path.join(ROOT,url.pathname==='/'?'index.html':url.pathname);if(!file.startsWith(ROOT))return send(res,403,'Forbidden','text/plain');fs.stat(file,(err,st)=>{if(err||!st.isFile())return send(res,404,'Not found','text/plain');res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res)})
});
server.listen(PORT,'0.0.0.0',()=>console.log(`Local AI lab: http://localhost:${PORT}`));
