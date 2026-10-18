function L(s){
 if(lang==="en")return s;var t=NE[s.id];
 return {id:s.id,n:t.n,d:t.d,q:t.q,steps:t.steps,office:t.o,link:s.link,lt:t.lt,v:s.v.map(function(x,i){return {k:x.k,l:t.v[i].l,docs:t.v[i].docs}})};
}
var app=document.getElementById("app"),sel=null,vk=null,ticks={},curQ="";
document.documentElement.lang=lang;
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function tb(x){return '<div class="top">'+x+'<button class="lang" id="lg" aria-label="Language">'+(lang==="en"?"नेपाली":"English")+'</button></div>'}
function setL(){lang=lang==="en"?"ne":"en";try{localStorage.setItem("gg_lang",lang)}catch(e){}document.documentElement.lang=lang;if(sel)show();else home(curQ)}
function home(q){
 sel=null;curQ=q||"";
 app.innerHTML=tb('<div class="brand"><span class="flag"></span><h1>GovGuide Nepal</h1></div>')+'<p class="tag">'+U().tag+'</p>'+
 '<input type="search" id="q" placeholder="'+U().ph+'" aria-label="'+U().ph+'" value="'+esc(curQ)+'"><div class="list" id="res"></div><p class="note">'+U().n1+'</p>';
 var i=document.getElementById("q");
 i.addEventListener("input",function(){curQ=i.value;draw(i.value)});draw(i.value);
 document.getElementById("lg").onclick=setL;
}
function draw(t){
 t=t.trim().toLowerCase();
 var r=S.filter(function(s){return !t||(s.n+" "+s.d+" "+s.id+" "+NE[s.id].n+" "+NE[s.id].d).toLowerCase().indexOf(t)>-1});
 var el=document.getElementById("res");
 if(!r.length){el.innerHTML='<p class="empty">'+U().none+'</p>';return}
 el.innerHTML=r.map(function(s){var l=L(s);return '<button class="svc" data-id="'+s.id+'"><b>'+l.n+'</b><span>'+l.d+'</span></button>'}).join("");
 Array.prototype.forEach.call(el.querySelectorAll(".svc"),function(b){b.onclick=function(){open(b.dataset.id)}});
}
function open(id){sel=S.filter(function(s){return s.id===id})[0];vk=null;ticks={};show();window.scrollTo(0,0)}
function cnt(){return Object.keys(ticks).filter(function(k){return ticks[k]}).length}
function show(){
 var s=L(sel),v=s.v.filter(function(x){return x.k===vk})[0];
 var h=tb('<button class="back" id="bk">'+U().back+'</button>')+'<h2>'+s.n+'</h2><p class="q">'+s.q+'</p><div class="pills">'+
 s.v.map(function(x){return '<button class="pill" aria-pressed="'+(x.k===vk)+'" data-k="'+x.k+'">'+x.l+'</button>'}).join("")+'</div>';
 if(!v){app.innerHTML=h+'<p class="empty">'+U().pick+'</p>';wire();return}
 var n=v.docs.length,d=cnt();
 h+='<h3>'+U().docs+'</h3><div class="meta" id="pc">'+U().rd(d,n)+'</div><div class="bar"><i id="pb" style="width:'+(d/n*100)+'%"></i></div>';
 h+=v.docs.map(function(x,i){return '<label class="check'+(ticks[i]?' done':'')+'"><input type="checkbox" data-i="'+i+'"'+(ticks[i]?' checked':'')+'><span><span class="t">'+x[0]+'</span><small>'+x[1]+'</small></span></label>'}).join("");
 h+='<h3>'+U().steps+'</h3><ol class="steps">'+s.steps.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ol>';
 var o=s.office;
 h+='<h3>'+U().where+'</h3><div class="card"><p><b>'+o.n+'</b></p><p>'+o.w+'</p><p class="meta">'+o.h+'</p><p class="meta">'+o.c+'</p></div>';
 h+='<h3>'+U().apply+'</h3><a class="btn" href="'+s.link+'" target="_blank" rel="noopener">'+s.lt+'</a><p class="note">'+U().n2+'</p>';
 app.innerHTML=h;wire();
}
function wire(){
 document.getElementById("bk").onclick=function(){home(curQ)};
 document.getElementById("lg").onclick=setL;
 Array.prototype.forEach.call(app.querySelectorAll(".pill"),function(b){b.onclick=function(){vk=b.dataset.k;ticks={};show()}});
 Array.prototype.forEach.call(app.querySelectorAll(".check input"),function(c){c.onchange=function(){
  ticks[c.dataset.i]=c.checked;c.closest(".check").classList.toggle("done",c.checked);
  var n=L(sel).v.filter(function(x){return x.k===vk})[0].docs.length,d=cnt();
  document.getElementById("pc").textContent=U().rd(d,n);document.getElementById("pb").style.width=(d/n*100)+"%";}});
}
home();
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
