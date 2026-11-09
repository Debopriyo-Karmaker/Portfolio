
var GH='https://github.com/Debopriyo-Karmaker/';
var layers=[
 ['Phishing Analyzer','Project // Email security','Phishing Email Analyzer & IOC Extractor','A Python 3 tool that parses .eml files, extracts and defangs indicators of compromise, and validates SPF, DKIM and DMARC results.',['Python 3','SPF / DKIM / DMARC','IOC defanging'],GH+'Phishing-Email-Detection-IOC-Extraction-Tool'],
 ['Recon & OSINT Suite','Project // Network security','Network Recon & OSINT Security Suite','A raw-socket port scanner with banner grabbing, paired with OSINT lookups for gathering public information about a target.',['Python 3','Sockets','OSINT'],GH+'Custom-Security-OSINT-Utilities'],
 ['CTF Archive','Archive // Competition','BRACU SHIKARI CTF & Forensics Archive','Write-ups covering PCAP forensics, cryptography and privilege escalation, collected while competing with BRACU SHIKARI.',['Wireshark','TryHackMe','Cryptography'],GH+'CTF-Room-Writeups']
];
var systems=[
 ['Cybersecurity','Phishing Email Analyzer & IOC Extractor','Parses .eml files, extracts and defangs IOCs, and validates SPF, DKIM and DMARC.',['Python 3'],GH+'Phishing-Email-Detection-IOC-Extraction-Tool'],
 ['Cybersecurity','Network Recon & OSINT Security Suite','Raw-socket port scanner with banner grabbing and OSINT lookups.',['Python 3','Sockets'],GH+'Custom-Security-OSINT-Utilities'],
 ['Cybersecurity','BRACU SHIKARI CTF & Forensics Archive','Write-ups on PCAP forensics, cryptography and privilege escalation.',['Wireshark','TryHackMe'],GH+'CTF-Room-Writeups'],
 ['Systems & Networks','POSIX Process Manager & CPU Scheduler','Process and thread management in C11 with pthreads and mutex locks on Linux.',['C11','pthreads','Linux'],GH+'mini-process-manager'],
 ['Systems & Networks','BoardNet Enterprise Network','Fault-tolerant network for six examination boards in Cisco Packet Tracer, with floating static routes, DHCP relay and DNS.',['VLSM','RIPv2'],GH+'BoardNet-Enterprise-Network'],
 ['Machine Learning','Credit Risk Assessment & Loan Status Prediction','MLP classifier over 45,000 records: 91.53% accuracy and 0.9660 ROC-AUC.',['Scikit-Learn','Pandas','NumPy'],GH+'Loan-status-classification-ml'],
 ['Web','DIGIX Web Development','Freelance corporate website for DIGIX, built with HTML5, CSS3 and vanilla JavaScript.',['HTML5','CSS3','JavaScript'],GH+'DIGIX','Web development · Currently in development'],
 ['Web','MediCore Clinical Management System','Full-stack healthcare platform with role-based access control.',['Node.js','REST APIs'],GH+'Medicore'],
 ['Web','Click-and-Build Hardware Compatibility Engine','PC builder that validates socket, power and clearance constraints between parts.',['HTML5','CSS3','JavaScript'],GH+'Click-and-build-'],
 ['Web','TODO-FOR-EVERYDAY','Lightweight local-first task manager built with vanilla JavaScript.',['JavaScript','Local Storage'],GH+'TODO-FOR-EVERYDAY']
];
var cats=['All'].concat(systems.map(function(s){return s[0]}).filter(function(v,i,a){return a.indexOf(v)===i}));
var $=function(id){return document.getElementById(id)};
function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;')}


/* ---- sanitising helpers: all text goes through textContent, links are validated ---- */
function safeUrl(u){try{var x=new URL(u);return(x.protocol==='https:'&&x.hostname==='github.com')?x.href:'#'}catch(e){return'#'}}
function mk(tag,cls,txt){var n=document.createElement(tag);if(cls)n.className=cls;if(txt!=null)n.textContent=String(txt);return n}
function chipsInto(box,list){box.textContent='';list.forEach(function(c){box.appendChild(mk('span','chip',c))})}
function ext(txt,url){var a=mk('a','go',txt);a.href=safeUrl(url);a.target='_blank';a.rel='noopener noreferrer';return a}
/* what the detail view shows (summaries come from the site text; nothing here is invented) */
var details=[
 {sum:'A Python tool for analysing suspicious emails. It reads .eml files and pulls out the indicators a security analyst needs, then writes a report per email.',pts:['Header analysis with SPF, DKIM and DMARC authentication checks','URL extraction with reputation heuristics based on TLD, keywords and URL length','SHA-256 hashing of attachments','Bulk analysis of every .eml file in the samples folder','Per-email IOC reports, plus a lightweight HTML dashboard that visualises the JSON reports']},
 {sum:'A reconnaissance toolkit that pairs a raw-socket port scanner with OSINT lookups, so one project covers both active and passive information gathering.',pts:['Port scanner written on raw sockets','Banner grabbing to identify the service behind an open port','OSINT lookups that gather public information about a target']},
 {sum:'Write-ups collected while competing with the BRACU SHIKARI CTF team, ranked #8 in Bangladesh and #244 worldwide on CTFtime.',pts:['PCAP forensics, worked through in Wireshark','Cryptography challenges','Privilege-escalation walkthroughs','Rooms and labs from TryHackMe']},
 {sum:'A process manager and CPU scheduler written in C11 for Linux, built to practise the core operating-systems ideas by hand.',pts:['Process and thread management with POSIX threads','Mutex locks to protect shared state','Runs on Linux and uses its system calls']},
 {sum:'A fault-tolerant network designed in Cisco Packet Tracer for six examination boards.',pts:['Floating static routes for failover','DHCP relay and DNS services','Addressing planned with VLSM and routing with RIPv2']},
 {sum:'A machine-learning pipeline that predicts loan status from 45,000 records, judged on measured results rather than guesses.',pts:['MLP (neural network) classifier','91.53% accuracy','0.9660 ROC-AUC','Built with Scikit-Learn, Pandas and NumPy']},
 {sum:'A corporate website built as a freelance project for DIGIX. It is currently in development.',pts:['Hand-written HTML5, CSS3 and vanilla JavaScript, with no framework','Self-reported audit: 0.4s first contentful paint and a 100/100 score','Status: web development, currently in development']},
 {sum:'A full-stack healthcare platform for managing clinical work.',pts:['Role-based access control, so each role sees only what it should','Node.js back end exposed through REST APIs']},
 {sum:'A PC builder that checks whether the parts you pick can actually work together.',pts:['Validates socket compatibility','Validates power requirements','Validates physical clearance between parts']},
 {sum:'A lightweight task manager that keeps your data on your own device.',pts:['Local-first: tasks are stored in the browser with Local Storage','Built with vanilla JavaScript and no framework']}
];
Object.freeze(details);

function showLayer(i){
  var L=layers[i],box=$('layer');
  box.textContent='';
  box.appendChild(mk('div','k',L[1]));box.appendChild(mk('h4',null,L[2]));box.appendChild(mk('p',null,L[3]));
  var ch=mk('div','chips');chipsInto(ch,L[4]);box.appendChild(ch);
  box.appendChild(ext('View repository ↗',L[5]));
  Array.prototype.forEach.call($('tabs').children,function(b,j){b.setAttribute('aria-selected',j===i)});
}
layers.forEach(function(L,i){
  var b=document.createElement('button');b.className='tab';b.type='button';b.setAttribute('role','tab');b.textContent=L[0];
  b.onclick=function(){showLayer(i)};$('tabs').appendChild(b);
});
showLayer(0);

function renderCards(){
  var g=$('grid');g.textContent='';
  systems.forEach(function(s,i){
    var c=mk('article','card');c.dataset.c=s[0];c.dataset.i=i;c.tabIndex=0;c.setAttribute('role','button');c.setAttribute('aria-haspopup','dialog');c.setAttribute('aria-label',s[1]+' — open project details');
    var top=mk('div','top');top.appendChild(mk('span','tag',s[0]));top.appendChild(mk('span',null,'#'+(i<9?'0':'')+(i+1)));c.appendChild(top);
    c.appendChild(mk('h3',null,s[1]));c.appendChild(mk('p',null,s[2]));
    if(s[5]){var st=mk('span','status');st.appendChild(document.createElement('i'));st.appendChild(document.createTextNode(s[5]));c.appendChild(st)}
    var ch=mk('div','chips');chipsInto(ch,s[3]);c.appendChild(ch);
    c.appendChild(ext('View repository ↗',s[4]));
    g.appendChild(c);
  });
}
renderCards();

/* ---- project detail dialog ---- */
(function(){
  var pm=mk('div','pm');pm.id='pm';pm.hidden=true;
  var bg=mk('div','pm-bg');var box=mk('div','pm-box');box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-labelledby','pm-t');box.tabIndex=-1;
  pm.appendChild(bg);pm.appendChild(box);document.body.appendChild(pm);
  var cur=-1,opener=null;
  function visible(){return Array.prototype.filter.call($('grid').children,function(c){return !c.hidden})}
  function fill(i){
    var s=systems[i],d=details[i];cur=i;box.textContent='';
    var head=mk('div','pm-head pm-i');head.appendChild(mk('span','tag',s[0]));
    var vis=visible(),pos=vis.indexOf($('grid').children[i]);
    head.appendChild(mk('span','pm-n',(pos+1<10?'0':'')+(pos+1)+' / '+(vis.length<10?'0':'')+vis.length));
    var x=mk('button','pm-x','✕');x.type='button';x.setAttribute('aria-label','Close project details');x.onclick=close;head.appendChild(x);
    box.appendChild(head);
    var h=mk('h3','pm-i',s[1]);h.id='pm-t';box.appendChild(h);
    if(s[5]){var st=mk('span','status pm-i');st.appendChild(document.createElement('i'));st.appendChild(document.createTextNode(s[5]));box.appendChild(st)}
    box.appendChild(mk('p','pm-sum pm-i',d.sum));
    box.appendChild(mk('div','pm-k pm-i','What it does'));
    var ul=mk('ul','pm-ul');d.pts.forEach(function(t){ul.appendChild(mk('li','pm-i',t))});box.appendChild(ul);
    box.appendChild(mk('div','pm-k pm-i','Built with'));
    var ch=mk('div','chips pm-i');chipsInto(ch,s[3]);box.appendChild(ch);
    var act=mk('div','pm-act pm-i');
    var go=ext('View repository ↗',s[4]);go.className='btn p';act.appendChild(go);
    var pv=mk('button','btn','← Prev');pv.type='button';pv.onclick=function(){step(-1)};
    var nx=mk('button','btn','Next →');nx.type='button';nx.onclick=function(){step(1)};
    act.appendChild(pv);act.appendChild(nx);box.appendChild(act);
    Array.prototype.forEach.call(box.querySelectorAll('.pm-i'),function(n,k){n.style.animationDelay=(80+k*70)+'ms'});
    box.scrollTop=0;
  }
  function step(dir){
    var vis=visible();if(vis.length<2)return;
    var pos=vis.indexOf($('grid').children[cur]);
    fill(+vis[(pos+dir+vis.length)%vis.length].dataset.i);
    box.focus({preventScroll:true});
  }
  function open(i,from){
    opener=from||null;fill(i);pm.hidden=false;
    void pm.offsetWidth;pm.classList.add('on');document.documentElement.classList.add('pm-open');
    box.focus({preventScroll:true});
  }
  function close(){
    if(pm.hidden)return;
    pm.classList.remove('on');document.documentElement.classList.remove('pm-open');
    setTimeout(function(){if(!pm.classList.contains('on'))pm.hidden=true},260);
    if(opener&&opener.focus)opener.focus({preventScroll:true});
  }
  bg.addEventListener('click',close);
  addEventListener('keydown',function(e){
    if(pm.hidden)return;
    if(e.key==='Escape'){e.preventDefault();close();return}
    if(e.key==='ArrowRight'){step(1);return}
    if(e.key==='ArrowLeft'){step(-1);return}
    if(e.key==='Tab'){                                   // keep focus inside the dialog
      var f=Array.prototype.filter.call(box.querySelectorAll('a[href],button'),function(n){return n.offsetParent!==null});
      if(!f.length)return;
      var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&(document.activeElement===a||document.activeElement===box)){e.preventDefault();z.focus()}
      else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
    }
  });
  $('grid').addEventListener('click',function(e){
    if(e.target.closest('a'))return;
    var c=e.target.closest('.card[data-i]');if(c)open(+c.dataset.i,c);
  });
  $('grid').addEventListener('keydown',function(e){
    if(e.target.closest('a'))return;
    if(e.key==='Enter'||e.key===' '){var c=e.target.closest('.card[data-i]');if(c&&e.target===c){e.preventDefault();open(+c.dataset.i,c)}}
  });
  /* cards react to the pointer: a red spotlight follows it */
  document.addEventListener('pointermove',function(e){
    var c=e.target.closest&&e.target.closest('.card');if(!c)return;
    var r=c.getBoundingClientRect();c.style.setProperty('--sx',(e.clientX-r.left)+'px');c.style.setProperty('--sy',(e.clientY-r.top)+'px');
  },{passive:true});
})();
function setFilter(c){
  Array.prototype.forEach.call($('filters').children,function(b){b.setAttribute('aria-selected',b.dataset.c===c)});
  Array.prototype.forEach.call($('grid').children,function(card){card.hidden=!(c==='All'||card.dataset.c===c)});
}
cats.forEach(function(c){
  var b=document.createElement('button');b.className='tab';b.type='button';b.dataset.c=c;
  b.textContent=c==='All'?'All projects ('+systems.length+')':c;
  b.onclick=function(){setFilter(c)};$('filters').appendChild(b);
});
setFilter('All');

$('copy').onclick=function(){
  var t=$('email').textContent,btn=$('copy');
  function done(m){btn.textContent=m;setTimeout(function(){btn.textContent='Copy email address'},1800)}
  function sel(){var r=document.createRange();r.selectNodeContents($('email'));var s=getSelection();s.removeAllRanges();s.addRange(r);done('Press Ctrl+C')}
  try{navigator.clipboard.writeText(t).then(function(){done('Copied')},sel)}catch(e){sel()}
};

/* ---------- motion ---------- */
(function(){
  var root=document.documentElement;
  if(!root.classList.contains('js'))return;
  var failed=false;
  function fail(err){
    if(failed)return;failed=true;
    try{console.error(err)}catch(e){}
    root.classList.remove('js');
    ['swarm','boxes','prog','glow'].forEach(function(id){var n=document.getElementById(id);if(n)n.remove()});
    Array.prototype.forEach.call(document.querySelectorAll('.dg,.pre,[data-mv]'),function(e){e.style.translate='';e.style.rotate=''});
  }
  try{init()}catch(err){fail(err)}

  function init(){
    var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
    var mobile=innerWidth<700,N=mobile?11:20,TOUCH=mobile||matchMedia('(pointer:coarse)').matches;
    var mx=innerWidth/2,my=innerHeight*.45,hasMouse=false;
    addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;hasMouse=true;mx=e.clientX;my=e.clientY},{passive:true});
    var G={dtms:16,speed:1};      // grows with scroll velocity and shortens every build step

    var glow=document.createElement('div');glow.className='glow';glow.id='glow';document.body.appendChild(glow);
    setTimeout(function(){glow.classList.add('on')},500);

    // keyword band under the hero
    var words=['Cybersecurity','Capture the flag','Web development','Machine learning','Linux systems','Network engineering','OSINT','Python'];
    var mq=document.createElement('div');mq.className='marq';mq.setAttribute('aria-hidden','true');
    var inner=document.createElement('div');
    words.concat(words).concat(words).concat(words).forEach(function(w){var s=document.createElement('span');s.textContent=w;inner.appendChild(s)});
    mq.appendChild(inner);
    var heroEl=document.querySelector('.hero');heroEl.parentNode.insertBefore(mq,heroEl.nextSibling);
    var big=document.querySelector('.big');
    var stage=document.getElementById('stage');
    var mainImg=document.querySelector('.cut.main');
    var halo=document.querySelector('.halo');

    /* ---- portrait: depth layers built from the cut-out, light sweep, no tilt ---- */
    var layerEls=[];
    function showLayers(){layerEls.forEach(function(im,i){im.style.transitionDelay=(i*90)+'ms';im.style.opacity=im.dataset.o})}
    function buildLayers(){
      try{
        var cv=document.createElement('canvas');cv.width=mainImg.naturalWidth;cv.height=mainImg.naturalHeight;
        var cx=cv.getContext('2d');cx.drawImage(mainImg,0,0);
        cx.globalCompositeOperation='source-in';cx.fillStyle='#ff4a3a';cx.fillRect(0,0,cv.width,cv.height);
        var url=cv.toDataURL('image/png');
        for(var k=(mobile?2:4);k>=1;k--){
          var im=document.createElement('img');im.className='cut back';im.alt='';im.setAttribute('aria-hidden','true');im.src=url;
          im.dataset.o=String(Math.max(.15,.95-k*.13));
          im.style.opacity='0';im.style.transition='opacity .7s ease';
          im.style.filter='brightness('+(1-k*.11)+')';
          stage.insertBefore(im,mainImg);
          layerEls[k-1]=im;
        }
        if(stage.classList.contains('live'))showLayers();
      }catch(e){}
    }
    if(mainImg.complete&&mainImg.naturalWidth)buildLayers();else mainImg.addEventListener('load',buildLayers);
    var shine=document.createElement('div');shine.className='shine';
    shine.style.webkitMaskImage=shine.style.maskImage='url('+mainImg.getAttribute('src')+')';
    stage.appendChild(shine);

    /* ---- prepare elements ---- */
    var items=[];
    function ease(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2}
    function easeOut(p){return 1-Math.pow(1-p,3)}
    function splitChars(el){
      var chars=[];
      el.setAttribute('aria-label',el.textContent.replace(/\s+/g,' ').trim());
      (function walk(n){
        Array.prototype.slice.call(n.childNodes).forEach(function(c){
          if(c.nodeType===3){
            var f=document.createDocumentFragment();
            c.textContent.split(/(\s+)/).forEach(function(t){
              if(!t)return;
              if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}
              var w=document.createElement('span');w.className='wd';w.setAttribute('aria-hidden','true');
              t.split('').forEach(function(ch){var s=document.createElement('span');s.className='ch';s.textContent=ch;w.appendChild(s);chars.push(s)});
              f.appendChild(w);
            });
            c.parentNode.replaceChild(f,c);
          }else if(c.nodeType===1)walk(c);
        });
      })(el);
      el._chars=chars;
    }
    // kinds: type (written in place), tm (written in the wrong place, then dragged into position), drag (whole piece dragged in)
    function add(sel,kind,delay,dur,o){
      o=o||{};
      $$(sel).forEach(function(el,i){
        if(el._kind)return;
        el._kind=kind;
        if(delay!=null){el._delay=delay+i*(o.gap||300);el._dur=dur}
        if(o.shell)el.classList.add('sh');
        if(kind==='type'||kind==='tm'){splitChars(el);el._hl=Math.random()<.5}
        if(kind==='drag'||kind==='tm'){
          var wide=el.offsetWidth>480,a=Math.random()*Math.PI*2;
          var d=wide?(34+Math.random()*34):((mobile?55:100)+Math.random()*(mobile?45:120));
          el._dx=o.dx!=null?o.dx:Math.cos(a)*d;
          el._dy=o.dy!=null?o.dy:Math.sin(a)*d*.6;
          el._rot=o.rot!=null?o.rot:(wide?(Math.random()-.5)*3:(Math.random()-.5)*14);
          el.style.translate=el._dx+'px '+el._dy+'px';el.style.rotate=el._rot+'deg';
          el.setAttribute('data-mv','1');
          if(kind==='drag')el.classList.add('pre','dg');
        }
        items.push(el);
      });
    }
    /* opening sequence */
    add('nav','drag',1300,800,{dx:0,dy:-70,rot:0});
    add('.big','type',1700,1200);
    add('.photo .stage','drag',2700,1300,{dx:150,dy:70,rot:4});
    add('.hello','type',3100,450);
    add('.name','drag',3500,800);
    add('.role','drag',4100,800);
    add('.intro','type',4600,1400);
    add('.floatcard','drag',4800,800,{shell:true});
    add('.cta .btn','drag',5900,800);
    add('.stat b','drag',6400,600);
    add('.stat span','type',6600,500);
    /* pieces of the rest of the page */
    add('.marq','drag');
    add('.eyebrow','type');add('h2','tm');add('.lede','type');
    add('.about-grid p','type');add('blockquote','type');
    add('.pillar i','drag');add('.pillar h3','tm');add('.pillar p','type');
    add('.flag','drag',null,null,{shell:true});
    add('.flag .tag','drag');add('.flag .status','drag');add('.flag h3','tm');add('.flag > p','type');
    add('.metrics div','drag');add('.stackhead','type');add('.hint','type');add('.tabs .tab','drag');add('.layer','drag',null,null,{shell:true});add('.flag .chips','drag');
    add('#filters .tab','drag');
    add('.card','drag',null,null,{shell:true});
    add('.card .top','drag');add('.card h3','tm');add('.card p','type');add('.card .chips','drag');add('.card .go','type');
    add('.row .k','type');add('.row h3','tm');add('.row p','type');
    add('.mail code','type');add('.mail .btn','drag');add('.socials a','drag');
    add('footer','type');
    add('.floatcard > span:first-child','type');add('.floatcard h4','type');add('.floatcard p','type');
    items.forEach(function(el){var p=el.parentElement&&el.parentElement.closest('.sh');if(p&&p!==el)el._parent=p});

    // counters
    var counters=$$('.stat b,.metrics b').filter(function(e){return e.children.length===0&&/^\d+[%m+]?$/.test(e.textContent)});
    var cdata=new Map();
    counters.forEach(function(e){var m=e.textContent.match(/^(\d+)([%m+]?)$/);cdata.set(e,{n:+m[1],s:m[2]});e.textContent='0'+m[2]});
    function count(e){
      var d=cdata.get(e),t0=performance.now(),dur=1500;
      (function f(t){var p=Math.min(1,(t-t0)/dur),k=1-Math.pow(1-p,4);e.textContent=Math.round(d.n*k)+d.s;if(p<1)requestAnimationFrame(f)})(t0);
    }

    /* ---- overlays ---- */
    var boxes=document.createElement('div');boxes.id='boxes';document.body.appendChild(boxes);
    var sw=document.createElement('div');sw.id='swarm';sw.setAttribute('aria-hidden','true');document.body.appendChild(sw);
    var allBoxes=[];
    setInterval(function(){var n=performance.now();allBoxes=allBoxes.filter(function(b){if(!b.isConnected)return false;if(n-b._born>16000){killBox(b);return false}return true})},3000);
    function mkBox(cls){var b=document.createElement('div');b._born=performance.now();allBoxes.push(b);b.className='drag '+(cls||'');b.innerHTML='<i></i><i></i><i></i><i></i><em></em>';boxes.appendChild(b);return b}
    function setBox(b,l,t,w,h){b.style.left=l+'px';b.style.top=t+'px';b.style.width=Math.max(0,w)+'px';b.style.height=Math.max(0,h)+'px';b.lastChild.textContent=Math.round(w)+' × '+Math.round(h)}
    function killBox(b){if(!b)return;b.classList.add('fade');setTimeout(function(){b.remove()},650)}
    function ripple(x,y,color){var r=document.createElement('i');r.className='ripple';r.style.left=x+'px';r.style.top=y+'px';r.style.borderColor=color;boxes.appendChild(r);setTimeout(function(){r.remove()},850)}

    /* ---- cursors ---- */
    var colors=['#ff7a6b','#ffd24a','#6aa9ff','#7be0a4','#c79bff','#ff9ad5','#5fe0e0','#ffb35c','#ffffff','#a3e635'];
    var cs=[];
    function parkPos(i){var s=i%4,r=Math.random();return s===0?{x:r*innerWidth,y:-70}:s===1?{x:innerWidth+70,y:r*innerHeight}:s===2?{x:r*innerWidth,y:innerHeight+70}:{x:-70,y:r*innerHeight}}
    for(var i=0;i<N;i++){
      var el=document.createElement('div');el.className='cur';
      var col=colors[i%colors.length];
      el.innerHTML='<svg viewBox="0 0 20 20"><path d="M2 2l6 16 2.4-6.6L17 9z" fill="'+col+'" stroke="#0a0a0a" stroke-width="1.2" stroke-linejoin="round"/></svg>';
      sw.appendChild(el);
      cs.push({el:el,col:col,i:i,x:TOUCH?parkPos(i).x:innerWidth/2+(Math.random()-.5)*200,y:TOUCH?parkPos(i).y:innerHeight/2+(Math.random()-.5)*200,px0:0,tx:innerWidth/2,ty:innerHeight/2,next:1e12,rot:0,state:'idle',dragging:false,ret:false});
      el.style.transform='translate('+cs[i].x+'px,'+cs[i].y+'px)';
    }
    function slotPos(i){
      var col=i%5,row=Math.floor(i/5)%4;
      return{x:(col+.5+(Math.random()-.5)*.5)/5*innerWidth,y:(row+.5+(Math.random()-.5)*.5)/4*innerHeight};
    }
    function sendHome(now){
      var order=[];for(var k=0;k<20;k++)order.push(k);
      order.sort(function(){return Math.random()-.5});
      var m=0;
      cs.forEach(function(c){
        if(c.state!=='idle')return;
        var sl=slotPos(order[m++%order.length]);c.tx=sl.x;c.ty=sl.y;c.ret=true;c.next=now+4500+Math.random()*3000;
      });
    }

    /* ---- tasks ---- */
    var tasks=[],io=null;
    function enqueue(el,delay){
      if(el._q)return;
      el._q=1;
      var dur=el._dur,split=.5;
      if(el._kind==='type'){var n=el._chars.length;if(!dur)dur=Math.max(420,Math.min(1500,n*13))}
      else if(el._kind==='tm'){var tp=Math.max(380,Math.min(1200,el._chars.length*13));dur=tp+750;split=tp/dur}
      else if(!dur)dur=900;
      tasks.push({el:el,kind:el._kind,wait:delay||0,dur:dur,split:split,phase:'wait',cur:null,box:null,ti:0,fm:0,em:0,hl:[]});
    }
    function grab(x,y){
      var best=null,bd=1e9;
      cs.forEach(function(c){if(c.state!=='idle')return;var d=Math.hypot(c.x-x,c.y-y);if(d<bd){bd=d;best=c}});
      if(best){best.state='task';best.dragging=false;best.ret=false}
      return best;
    }
    function release(t){
      if(t.cur){t.cur.park=parkPos(t.cur.i);t.cur.state='idle';t.cur.dragging=false;t.cur.next=0;t.cur.tx=t.cur.x+(Math.random()-.5)*300;t.cur.ty=t.cur.y+(Math.random()-.5)*200;t.cur=null}
    }
    function finish(t){
      var el=t.el;el._done=true;el._q=1;
      if(el._kind==='type'||el._kind==='tm'){el._chars.forEach(function(c){c.classList.add('on');c.classList.remove('last','hl')})}
      if(el._kind==='drag'||el._kind==='tm'){el.style.translate='';el.style.rotate='';el.classList.remove('pre');el.removeAttribute('data-mv')}
      cdata.forEach(function(v,k){if(el.contains(k)&&!k._c){k._c=1;k.textContent=v.n+v.s}});
      if(el===stage){stage.classList.add('live');stage.parentNode.classList.add('live');showLayers()}
      if(el===big)big.classList.add('shown');
      killBox(t.box);release(t);t.phase='done';
    }
    function forceShow(el){
      if(el._done)return;
      var t=tasks.filter(function(x){return x.el===el})[0];
      finish(t||{el:el,kind:el._kind,box:null,cur:null,phase:'wait'});
    }
    function startPt(t,r){
      if((t.kind==='type'||t.kind==='tm')&&t.el._chars.length){var q=t.el._chars[0].getBoundingClientRect();return{x:q.left,y:q.top}}
      return{x:r.left,y:r.top};
    }
    function startRun(t){
      t.phase='run';
      if(t.kind==='drag'){cdata.forEach(function(v,k){if(t.el.contains(k)&&!k._c){k._c=1;count(k)}})}
      if(t.cur)ripple(t.cur.x,t.cur.y,t.cur.col);
    }
    function typeStep(t,el,p,c){
      var n=el._chars.length,idx=Math.min(n,Math.floor(p*n));
      while(t.ti<idx){
        var ch=el._chars[t.ti];ch.classList.add('on');
        if(el._hl){ch.classList.add('hl');t.hl.push([ch,t.em])}
        else{if(t.ti>0)el._chars[t.ti-1].classList.remove('last');ch.classList.add('last')}
        t.ti++;
      }
      while(t.hl.length&&t.em-t.hl[0][1]>420){t.hl.shift()[0].classList.remove('hl')}
      if(c&&t.ti>0){var lr=el._chars[t.ti-1].getBoundingClientRect();c.dragging=true;c.x=lr.right+3;c.y=lr.bottom-4}
    }
    function moveStep(t,el,q,c){
      var hold=.22,q2=q<hold?0:easeOut((q-hold)/(1-hold));
      el.style.translate=(el._dx*(1-q2))+'px '+(el._dy*(1-q2))+'px';el.style.rotate=(el._rot*(1-q2))+'deg';
      var rr=el.getBoundingClientRect();
      if(!t.box)t.box=mkBox('box');
      setBox(t.box,rr.left,rr.top,rr.width,rr.height);
      if(c){c.dragging=true;c.x=rr.left+6;c.y=rr.top+6}
    }
    function stepTask(t,now){
      var el=t.el,adv=G.dtms*G.speed;
      if(t.phase==='wait'){
        if(el._parent&&!el._parent._done)return;                 // pieces wait for the box they belong to
        var wr=el.getBoundingClientRect(),inV=wr.top<innerHeight*.92&&wr.bottom>0;
        if(inV&&t.wait>800)t.wait=800;
        t.wait-=adv*(inV?1.6:1);if(t.wait>0)return;
        if(wr.bottom<-50||wr.top>innerHeight+250){finish(t);return}      // scrolled past: show instantly
        t.phase='fly';
        var s0=startPt(t,wr);t.cur=grab(s0.x,s0.y);
        if(t.kind==='drag'){el.classList.remove('pre');t.box=mkBox('box')}
        if(el===stage)stage.classList.add('haloin');
      }
      var r=el.getBoundingClientRect();
      if(t.phase==='fly'){
        t.fm+=adv;var sp=startPt(t,r);
        if(t.box)setBox(t.box,r.left,r.top,r.width,r.height);
        if(t.cur){t.cur.tx=sp.x;t.cur.ty=sp.y;if(Math.hypot(t.cur.x-sp.x,t.cur.y-sp.y)<26||t.fm>450)startRun(t)}
        else if(t.fm>180)startRun(t);
        return;
      }
      t.em+=adv;
      var p=Math.min(1,t.em/t.dur),c=t.cur;
      if(t.kind==='type'){typeStep(t,el,p,c)}
      else if(t.kind==='tm'){
        if(p<t.split)typeStep(t,el,p/t.split,c);
        else{
          if(t.ti<el._chars.length)typeStep(t,el,1,null);
          el._chars.forEach(function(ch){ch.classList.remove('hl','last')});
          moveStep(t,el,(p-t.split)/(1-t.split),c);
        }
      }else{
        var hold=.2,q=p<hold?0:easeOut((p-hold)/(1-hold));
        el.style.translate=(el._dx*(1-q))+'px '+(el._dy*(1-q))+'px';el.style.rotate=(el._rot*(1-q))+'deg';
        var rr=el.getBoundingClientRect();
        setBox(t.box,rr.left,rr.top,rr.width,rr.height);
        if(c){c.dragging=true;c.x=rr.left+6;c.y=rr.top+6}
      }
      if(p>=1)finish(t);
    }

    /* ---- idle cursor behaviour ---- */
    var ssv=0,scrollOff=0,lastBusy=0,decoys=0,introEnd=0,introDone=false,visitedEnd=false,nextDecoy=Infinity,prevGather=false,allDone=false;
    function visibleEls(){
      return $$('.card,.flag,.pillar,h2,.lede,.about-grid p,.stat,.photo .stage,.tab').filter(function(e){var b=e.getBoundingClientRect();return b.bottom>40&&b.top<innerHeight-40&&b.width>30&&b.height>14});
    }
    function startDecoy(c,now){
      var pool=visibleEls();if(!pool.length)return false;
      var b=pool[Math.floor(Math.random()*pool.length)].getBoundingClientRect();
      var w=Math.min(b.width*(.3+Math.random()*.6),360),h=Math.min(b.height*(.4+Math.random()*.6),160);
      var x0=b.left+Math.random()*(b.width-w),y0=b.top+Math.random()*(b.height-h);
      c.state='decoy';decoys++;c.d={ph:'fly',fs:now,x0:x0,y0:y0,x1:x0+w,y1:y0+h,box:null};return true;
    }
    function pickIdleTarget(c,now){
      c.tx=Math.max(30,Math.min(innerWidth-30,c.x+(Math.random()-.5)*140));
      c.ty=Math.max(30,Math.min(innerHeight-30,c.y+(Math.random()-.5)*120));
      c.next=now+6000+Math.random()*7000;
    }
    function angDiff(a,b){return((b-a+540)%360)-180}
    function orbit(c,now,cx,cy,intro,k,dt){
      var a=now/((1900+(c.i%3)*260)*(intro?1.1:1))*(c.i%2?1:-1)+c.i*(Math.PI*2/N);
      var rad=(intro?40:64)+(c.i%4)*(intro?16:26)+Math.sin(now/700+c.i)*6;
      c.tx=cx+Math.cos(a)*rad;c.ty=cy+Math.sin(a)*rad;
      var kk=Math.min(1,k*dt);c.x+=(c.tx-c.x)*kk;c.y+=(c.ty-c.y)*kk;
      var deg=a*180/Math.PI-45;
      c.rot+=angDiff(c.rot,((deg+180)%360+360)%360-180)*.15;
    }

    /* ---- smooth scrolling (wheel + in-page links) ---- */
    var sTgt=scrollY,sCur=scrollY,sAct=false;
    function maxScroll(){return Math.max(0,document.documentElement.scrollHeight-innerHeight)}
    function nestedScroll(el){
      while(el&&el!==document.body&&el!==document.documentElement){
        var st=getComputedStyle(el);
        if(/(auto|scroll)/.test(st.overflowY)&&el.scrollHeight>el.clientHeight+1)return true;
        el=el.parentElement;
      }
      return false;
    }
    if(matchMedia('(pointer:fine)').matches){
      addEventListener('wheel',function(e){
        if(root.classList.contains('pm-open')||e.ctrlKey||e.defaultPrevented||Math.abs(e.deltaX)>Math.abs(e.deltaY)||nestedScroll(e.target))return;
        e.preventDefault();
        var d=e.deltaMode===1?e.deltaY*34:e.deltaMode===2?e.deltaY*innerHeight:e.deltaY;
        if(!sAct){sTgt=scrollY;sCur=scrollY}
        sTgt=Math.max(0,Math.min(maxScroll(),sTgt+d));sAct=true;
      },{passive:false});
    }
    addEventListener('keydown',function(e){
      if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||root.classList.contains('pm-open'))return;
      var t=e.target,tg=t&&t.tagName;if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT'||tg==='BUTTON'||tg==='A'||(t&&t.isContentEditable))return;
      var d=null,k=e.key;
      if(k==='ArrowDown')d=90;else if(k==='ArrowUp')d=-90;
      else if(k==='PageDown'||(k===' '&&!e.shiftKey))d=innerHeight*.88;else if(k==='PageUp'||(k===' '&&e.shiftKey))d=-innerHeight*.88;
      else if(k==='Home')d=-1e9;else if(k==='End')d=1e9;
      if(d===null)return;
      e.preventDefault();if(!sAct){sTgt=scrollY;sCur=scrollY}
      sTgt=Math.max(0,Math.min(maxScroll(),sTgt+d));sAct=true;
    });
    $$('a[href^="#"]').forEach(function(a){
      a.addEventListener('click',function(ev){
        var id=a.getAttribute('href').slice(1),t=id?document.getElementById(id):null;
        if(id&&!t)return;
        ev.preventDefault();
        var y=t?t.getBoundingClientRect().top+scrollY-(id==='top'?0:70):0;
        if(!sAct){sCur=scrollY}
        sTgt=Math.max(0,Math.min(maxScroll(),y));sAct=true;
      });
    });

    /* ---- main loop ---- */
    var contact=document.getElementById('contact');
    var lastY=scrollY,sv=0,last=performance.now(),lastCheck=0;
    var prog=document.createElement('div');prog.id='prog';document.body.appendChild(prog);

    function frame(now){
      try{
        var dms=Math.min(60,now-last);G.dtms=dms;
        var dt=Math.min(3,dms/16.7);last=now;
        if(sAct){
          sCur+=(sTgt-sCur)*(1-Math.pow(1-.11,dt));
          if(Math.abs(sTgt-sCur)<.4){sCur=sTgt;sAct=false}
          window.scrollTo({top:sCur,behavior:'instant'});
        }else{sCur=sTgt=scrollY}
        var sdy=scrollY-lastY,dy=Math.abs(sdy);lastY=scrollY;sv=sv*.85+dy*.15;ssv=ssv*.88+sdy*.12;scrollOff+=(Math.max(-170,Math.min(170,ssv*5))-scrollOff)*.1;
        G.speed=(mobile?1.45:1)*(1+Math.min(3,sv/12));                       // faster scrolling, faster building
        var cr=contact.getBoundingClientRect();
        var gather=cr.top<innerHeight*.5&&cr.bottom>0;
        var intro=now<introEnd;
        if(introEnd&&!intro&&!introDone){introDone=true}
        if(gather&&!prevGather&&introDone)visitedEnd=true;
        prevGather=gather;
        if(now-lastCheck>500){lastCheck=now;allDone=introDone&&items.every(function(e){return e._done})}
        // once everything is built (or the visitor has reached the bottom), cursors only circle the pointer
        if(tasks.length)lastBusy=now;
        var quiet=introDone&&now-lastBusy>1400;
        var settled=introDone&&tasks.length===0&&(allDone||visitedEnd||quiet);
        var orbiting=!TOUCH;
        var ccx=hasMouse?mx:innerWidth/2,ccy=hasMouse?my:innerHeight*.42;

        for(var k=0;k<tasks.length;k++){stepTask(tasks[k],now)}
        tasks=tasks.filter(function(t){return t.phase!=='done'});

        cs.forEach(function(c){
          var px=c.x,tgtRot=0;
          if(c.state==='task'){
            if(!c.dragging){var kk=Math.min(1,.26*dt*G.speed);c.x+=(c.tx-c.x)*kk;c.y+=(c.ty-c.y)*kk}
          }else if(orbiting){
            if(c.state==='decoy'){if(c.d.box)killBox(c.d.box);decoys=Math.max(0,decoys-1);c.state='idle'}
            c.ret=false;orbit(c,now,ccx,ccy+scrollOff*(.55+(c.i%5)*.2),intro,intro?.09:.065,dt);tgtRot=null;
          }else if(TOUCH){
            if(!c.park)c.park=parkPos(c.i);
            var kp=Math.min(1,.07*dt);c.x+=(c.park.x-c.x)*kp;c.y+=(c.park.y-c.y)*kp;
          }else if(c.state==='decoy'){
            var d=c.d;
            if(d.ph==='fly'){
              var kf=Math.min(1,.15*dt);c.x+=(d.x0-c.x)*kf;c.y+=(d.y0-c.y)*kf;
              if(Math.hypot(c.x-d.x0,c.y-d.y0)<20||now-d.fs>800){d.ph='drag';d.ds=now;d.box=mkBox('soft');ripple(c.x,c.y,c.col)}
            }else if(d.ph==='drag'){
              var p=Math.min(1,(now-d.ds)/1100),e=ease(p);
              var bx=d.x0+(d.x1-d.x0)*e,by=d.y0+(d.y1-d.y0)*e;
              setBox(d.box,d.x0,d.y0,bx-d.x0,by-d.y0);c.x=bx+2;c.y=by+2;
              if(p>=1){d.ph='hold';d.hs=now}
            }else if(d.ph==='hold'){
              if(now-d.hs>600){killBox(d.box);decoys=Math.max(0,decoys-1);c.state='idle';c.next=now+4000;c.tx=c.x+(Math.random()-.5)*200;c.ty=c.y+(Math.random()-.5)*160}
            }
          }else{
            if(!c.ret&&now>c.next)pickIdleTarget(c,now);
            var kw=Math.min(1,(c.ret?.06:.02)*dt);
            c.x+=(c.tx-c.x)*kw;c.y+=(c.ty-c.y)*kw;
            if(c.ret&&Math.hypot(c.tx-c.x,c.ty-c.y)<14)c.ret=false;
          }
          if(tgtRot!==null){var vx=c.x-px;tgtRot=Math.max(-18,Math.min(18,vx*1.6));c.rot+=(tgtRot-c.rot)*.12}
          c.el.style.transform='translate('+c.x+'px,'+c.y+'px) rotate('+c.rot+'deg)';
        });

        // portrait: floats, red depth layers slide against the pointer (no tilt)
        var pr=stage.parentNode.getBoundingClientRect();
        if(pr.bottom>0&&pr.top<innerHeight){
          var mxn=hasMouse?(mx/innerWidth-.5):0,myn=hasMouse?(my/innerHeight-.5):0;
          stage.style.setProperty('--fy',(Math.sin(now/1300)*7).toFixed(2)+'px');
          mainImg.style.transform='translate('+(mxn*5).toFixed(1)+'px,'+(myn*3).toFixed(1)+'px)';
          halo.style.transform='translate('+(-mxn*18).toFixed(1)+'px,'+(-myn*10).toFixed(1)+'px)';
          for(var li=0;li<layerEls.length;li++){
            var dd=li+1,im=layerEls[li];
            if(im)im.style.transform='translate('+(-mxn*dd*1.1).toFixed(1)+'px,'+(-myn*dd*.8+dd*.6).toFixed(1)+'px) scale('+(1+dd*.003)+')';
          }
        }
        // live cards drift against the pointer once in place
        var gx=hasMouse?(mx/innerWidth-.5)*2:0,gy=hasMouse?(my/innerHeight-.5)*2:0;
        

        // scroll progress + hero parallax
        var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
        prog.style.transform='scaleX('+(h>0?y/h:0)+')';
        if(y<innerHeight*1.5&&big.classList.contains('shown')){big.style.transform='translateY('+(y*.2)+'px) scale('+(1+y/5000)+')';big.style.opacity=Math.max(.2,1-y/1100)}
      }catch(err){fail(err);return}
      if(!failed)requestAnimationFrame(frame);
    }

    /* ---- scheduling ---- */
    io=new IntersectionObserver(function(es){
      var i=0,fi=0;
      es.sort(function(a,b){return(a.target.compareDocumentPosition(b.target)&4)?-1:1});
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        io.unobserve(e.target);
        var el=e.target;
        if(el.tagName==='SECTION'){el.classList.add('in');return}
        if(el._delay!=null||el._q)return;
        enqueue(el,el._parent?(fi++*110):(i++*140));
      });
    },{threshold:.02,rootMargin:'0px 0px 18% 0px'});
    items.forEach(function(el){if(el._delay==null)io.observe(el)});
    $$('section').forEach(function(s){io.observe(s)});

    function boot(){
      var bt=performance.now();introEnd=bt+1100;
      items.forEach(function(el){if(el._delay!=null)enqueue(el,el._delay)});
      requestAnimationFrame(function(t){last=t;frame(t)});
    }
    if(document.fonts&&document.fonts.ready){Promise.race([document.fonts.ready,new Promise(function(r){setTimeout(r,450)})]).then(function(){setTimeout(boot,40)})}
    else setTimeout(boot,60);

    // safety net: anything on screen that was never scheduled gets scheduled
    setInterval(function(){
      items.forEach(function(el){
        if(el._q||el._delay!=null||el._done)return;
        var r=el.getBoundingClientRect();
        if(r.bottom<-40){forceShow(el);return}          // scrolled past before it was noticed: show it now
        if(r.top<innerHeight*.95&&r.bottom>0)enqueue(el,0);
      });
    },1500);

    // layer swap + filter changes
    var _showLayer=showLayer;
    showLayer=function(i){_showLayer(i);var l=$('layer');l.classList.remove('swap');void l.offsetWidth;l.classList.add('swap')};
    var _setFilter=setFilter;
    setFilter=function(c){
      _setFilter(c);var n=0;
      $$('#grid .card').forEach(function(card){
        items.filter(function(e){return card.contains(e)}).forEach(forceShow);
        card.classList.remove('pop');
        if(!card.hidden){void card.offsetWidth;card.style.setProperty('--d',(n++*90)+'ms');card.classList.add('pop')}
      });
    };
    // card hover tilt
    $$('.card').forEach(function(c){
      c.addEventListener('pointermove',function(e){
        if(!c._done||c.classList.contains('pop'))return;
        var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
        c.style.transform='perspective(800px) rotateX('+(-py*8)+'deg) rotateY('+(px*10)+'deg) translateY(-3px)';
      });
      c.addEventListener('pointerleave',function(){c.style.transform=''});
    });
  }
})();
