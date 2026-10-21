const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IM={
ex:"images/IMG-20261020-WA0005.jpg",dr:"images/hire_machine_one.jpg",sl:"images/IMG-20261020-WA0014.jpg",wk:"images/IMG-20261020-WA0006.jpg",tr:"images/IMG-20261020-WA0019.jpg",rd:"images/hire_machine_three.jpg",
hm:"images/IMG-20261020-WA0008.jpg",cm:"images/hire_machine_two.jpg",hm2:"images/hire_machine_two.jpg",hm3:"images/IMG-20261020-WA0017.jpg",
rig1:"images/rig_3.jpg",rig2:"images/rig_2.jpg",rig3:"images/rig_1.jpg",rig4:"images/rig_4.png",
fleet00:"images/IMG-20261020-WA0000.jpg",fleet02:"images/IMG-20261020-WA0002.jpg",fleet04:"images/IMG-20261020-WA0004.jpg",fleet07:"images/IMG-20261020-WA0007.jpg",fleet08:"images/IMG-20261020-WA0008.jpg",fleet09:"images/IMG-20261020-WA0009.jpg",fleet11:"images/hire_machine_three.jpg",fleet12:"images/IMG-20261020-WA0012.jpg",fleet13:"images/IMG-20261020-WA0013.jpg",fleet14:"images/IMG-20261020-WA0014.jpg",fleet15:"images/IMG-20261020-WA0015.jpg",fleet16:"images/IMG-20261020-WA0016.jpg",fleet17:"images/IMG-20261020-WA0017.jpg",fleet18:"images/IMG-20261020-WA0018.jpg",fleet19:"images/IMG-20261020-WA0019.jpg",fleet20:"images/IMG-20261020-WA0020.jpg"
};
const S=[["Construction & Civil Engineering","Offices, retail, warehouses, schools, hospitals, sports facilities and industrial structures.","cm",["Offices","Warehouses","Schools","Hospitals","Sports facilities"],"Plan a build"],
["Borehole Drilling","Reliable water supply for homes, farms, businesses and communities, from survey to pump.","dr",["Air and mud rotary","DTH","Cable tool","Auger","RC","Sonic","Geophysical survey","Pumps and tanks"],"Book a survey"],
["Plant Installation & Plant Hire","Excavators, loaders, graders, rollers, water bowsers and lowbed transport, ready for your site.","ex",["Excavator","Loader","Grader","Roller","Water bowser","Lowbed"],"Hire a machine"],
["Road & Earthworks","Roads, storm drains, pavers, street poles, road markings and renovation.","rd",["Roads","Storm drains","Pavers","Road signs","Renovation"],"Quote my road"]];
const P=[["Plant Hire","Wheel loader for hire","hm"],["Plant Hire","Wheel loader for hire","hm2"],["Plant Hire","Water tanker for hire","hm3"],["Plant Hire","Vehicle for hire","rig1"],["Plant Hire","Drilling machinery","rig2"],["Plant Hire","Machinery in transit","rig3"],["Plant Hire","Vehicle for hire","rig4"],["Plant Hire","Utility vehicle","fleet00"],["Plant Hire","Pickup with cargo rack","fleet02"],["Plant Hire","Off-road vehicle","fleet04"],["Plant Hire","Tipper truck","fleet07"],["Plant Hire","Wheel loader","fleet08"],["Plant Hire","Loader at worksite","fleet09"],["Plant Hire","Tipper truck","fleet11"],["Plant Hire","Wheel loader","fleet12"],["Plant Hire","Tipper truck","fleet13"],["Plant Hire","Utility vehicle","fleet15"],["Plant Hire","Heavy truck","fleet16"],["Plant Hire","Water tanker","fleet17"],["Plant Hire","Flatbed transport","fleet18"],["Plant Hire","Truck and earthmoving equipment","fleet19"],["Plant Hire","Heavy truck","fleet20"],["Earthworks","Excavator for earthworks","ex"],["Drilling","Borehole drilling equipment","dr"],["Construction","Wheel loader at worksite","sl"],["Construction","Earthmoving equipment at worksite","wk"],["Civil","Tipper truck and earthmoving equipment","tr"]];
const V=[["Integrity","We honour every commitment with honesty, trust and ethical behaviour."],["Quality","Clients come first, with an individualised approach."],["Teamwork","One cohesive team from the smallest unit to the Board."],["Growth and profitability","Continuous innovation drives superior results."],["Safety","We plan safety into every aspect of our work and keep to that plan."],["Transparency","Our actions match our words, and we earn our reputation daily."]];
const S2=[["Road & Earthworks","Roads, storm drains, pavers, street poles, road markings and renovation.","rd",["Roads","Storm drains","Pavers","Road signs","Renovation"],"Enquire now"],
["Borehole drilling","Reliable water for homes, farms, businesses and communities, from geophysical survey to pump installation.","dr",["Air and mud rotary","DTH","Cable tool","Auger","RC","Sonic","Survey","Pumps and tanks"],"Enquire now"],
["Building construction","Offices, retail complexes, warehouses, schools, hospitals and sports facilities built from a strong technical base.","fleet12",["Offices","Warehouses","Schools","Hospitals","Sports facilities"],"Enquire now"],
["Structures & Reinforcement","Industrial structures and terminal shelters, with steel fixing and concrete work done to specification.","wk",["Industrial structures","Terminal shelters","Steel fixing","Concrete"],"Enquire now"],
["Storm Drains & Civil Works","Drainage, site works and associated civil activities that keep projects dry and stable.","tr",["Storm drains","Site works","Trenching","Civil activities"],"Enquire now"],
["Plant Installation & Plant Hire","Excavators, loaders, graders, rollers, water bowsers and lowbed transport, ready for your site.","ex",["Excavator","Loader","Grader","Roller","Water bowser","Lowbed"],"Enquire now"]];
const card=s=>`<article class="card fd${s[2]==="ex"?" excavator-card":""}"><div class="ph"><img src="${IM[s[2]]}" alt="${s[0]}" loading="lazy"></div><div class="t"><h3>${s[0]}</h3><p>${s[1]}</p><ul>${s[3].slice(0,4).map(x=>`<li>${x}</li>`).join("")}</ul></div></article>`;
const fig=p=>`<figure class="fd${p[2]==="ex"?" excavator-card":""}" data-c="${p[0]}"><img src="${IM[p[2]]}" alt="${p[1]}" loading="lazy">${p[1]?`<figcaption><b>${p[1]}</b>${p[0]}</figcaption>`:""}</figure>`;
if($("#svcHome")) $("#svcHome").innerHTML=S.map(card).join("");
if($("#galHome")) $("#galHome").innerHTML=P.filter(p=>p[0]!=="Plant Hire").slice(0,4).map(p=>fig(p[0]==="Construction"&&p[1]==="Wheel loader at worksite"?[p[0],p[1],"cm"]:p)).join("");
if($("#vals")) $("#vals").innerHTML=V.map(v=>`<div class="fd"><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join("");
if($("#certCarousel")){
const certTrack=$("#certTrack"),certDots=$("#certDots"),certPrev=$("#certPrev"),certNext=$("#certNext"),certLogos=[...$("#certTrack").children];let certIndex=0,certPosition=2;
const certClone=el=>{const c=el.cloneNode(true);c.setAttribute("aria-hidden","true");c.querySelector("img").alt="";return c};
certLogos.slice(-2).map(certClone).forEach(c=>certTrack.insertBefore(c,certTrack.firstChild));certLogos.slice(0,2).map(certClone).forEach(c=>certTrack.appendChild(c));
certDots.innerHTML=certLogos.map((_,i)=>`<button type="button" class="cert-dot" aria-label="Show ${certLogos[i].querySelector("img").alt} logo" aria-current="${i===0}"></button>`).join("");
const certStride=()=>certTrack.children[0].getBoundingClientRect().width+parseFloat(getComputedStyle(certTrack).gap||0);
const certMove=(position,animate=true)=>{certPosition=position;certTrack.style.transition=animate?"transform .45s ease":"none";certTrack.style.transform=`translateX(${-position*certStride()}px)`};
const certMark=()=>$$("button",certDots).forEach((b,i)=>b.setAttribute("aria-current",String(i===certIndex)));
const certGo=(i,direction=0)=>{certIndex=i;certMark();if(direction>0&&i===0)certMove(certLogos.length+2);else if(direction<0&&i===certLogos.length-1)certMove(1);else certMove(i+2)};
certTrack.addEventListener("transitionend",()=>{if(certPosition===certLogos.length+2)certMove(2,false);else if(certPosition===1)certMove(certLogos.length+1,false)});
$$("button",certDots).forEach((b,i)=>b.onclick=()=>certGo(i));
certPrev.onclick=()=>certGo((certIndex-1+certLogos.length)%certLogos.length,-1);certNext.onclick=()=>certGo((certIndex+1)%certLogos.length,1);
const certCarousel=$("#certCarousel");let certTimer;const certStart=()=>{clearInterval(certTimer);certTimer=setInterval(()=>certGo((certIndex+1)%certLogos.length,1),4000)},certStop=()=>clearInterval(certTimer);
certMove(2,false);requestAnimationFrame(()=>certTrack.style.transition="transform .45s ease");window.addEventListener("resize",()=>certMove(certPosition,false));
certCarousel.addEventListener("mouseenter",certStop);certCarousel.addEventListener("mouseleave",certStart);certCarousel.addEventListener("focusin",certStop);certCarousel.addEventListener("focusout",e=>{if(!e.relatedTarget||!certCarousel.contains(e.relatedTarget))certStart()});certStart();
}
if($("#svcFull")){
$("#svcFull").innerHTML=`<div class="svc big">${S2.map(x=>`<article class="card big fd${x[2]==="ex"?" excavator-card":""}"><div class="ph"><img src="${IM[x[2]]}" alt="${x[0]}" loading="lazy"></div><div class="t"><h3>${x[0]}</h3><p>${x[1]}</p><ul>${x[3].map(t=>`<li>${t}</li>`).join("")}</ul><a class="btn sm" href="contact.html?service=${encodeURIComponent(x[0])}">${x[4]} <i></i></a></div></article>`).join("")}</div>`;
}
if($("#gal")){
const cats=["All",...new Set(P.map(p=>p[0]))];
$("#chips").innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}">${c}</button>`).join("");
$("#gal").innerHTML=P.map(fig).join("");
$("#chips").onclick=e=>{if(e.target.tagName!=="BUTTON")return; $$("#chips button").forEach(b=>b.classList.toggle("on",b===e.target));const c=e.target.textContent;$$("#gal figure").forEach(f=>f.style.display=c==="All"||f.dataset.c===c?"":"none")};
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");if(e.target.dataset.n!=null)count(e.target);io.unobserve(e.target)}}),{threshold:.15});
function count(el){const n=+el.dataset.n;let t=0;const id=setInterval(()=>{t++;el.textContent=Math.min(n,t);if(t>=n)clearInterval(id)},140);el.textContent=n}
$$(".rv,.fd,[data-n]").forEach(e=>io.observe(e));
const pageNames={"index.html":"Home","about.html":"About","services.html":"Services","portfolio.html":"Portfolio","contact.html":"Contact","careers.html":"Careers"};
const routeParams=new URLSearchParams(location.search),incomingTransition=routeParams.get("transition")==="1";
const incomingTitle=routeParams.get("transitionTitle")||pageNames[location.pathname.split("/").pop()]||"Home";
const currentFile=location.pathname.split("/").pop();
let showLaunch=!incomingTransition&&(!currentFile||currentFile==="index.html");
try{if(showLaunch){showLaunch=sessionStorage.getItem("hatrusLaunched")!=="1";if(showLaunch)sessionStorage.setItem("hatrusLaunched","1")}}catch(e){showLaunch=!incomingTransition&&(!currentFile||currentFile==="index.html")}
if(!showLaunch){$("#load")?.remove();document.body.classList.add("ready")}
const t0=performance.now();(function tk(){const p=Math.min(1,(performance.now()-t0)/2000),e=p*p*(3-2*p);if($("#pc"))$("#pc").textContent=Math.round(e*100)+"%";if($("#pi"))$("#pi").style.transform="scaleX("+e+")";if(p<1)requestAnimationFrame(tk)})();
if(showLaunch){const go=()=>setTimeout(()=>{$("#load")?.classList.add("out");document.body.classList.add("ready");setTimeout(()=>$("#load")?.remove(),1500)},2300);document.readyState==="complete"?go():addEventListener("load",go)}
if(incomingTransition){const curtain=$("#curtain");$("#nm").textContent=incomingTitle;curtain.classList.add("incoming","go");document.documentElement.classList.remove("transition-in");curtain.querySelector(".hole").addEventListener("animationend",()=>curtain.classList.remove("go","incoming"),{once:true});routeParams.delete("transition");routeParams.delete("transitionTitle");const remainingQuery=routeParams.toString();history.replaceState(null,"",location.pathname+(remainingQuery?"?"+remainingQuery:"")+location.hash)}
const ring=$("#ring"),top_=$("#top"),oi=$(".orb img");let st=false;
function tick2(){st=false;const m=document.documentElement.scrollHeight-innerHeight,p=m>0?scrollY/m:0;if($("#bar"))$("#bar").style.transform="scaleX("+p+")";if(ring)ring.style.strokeDashoffset=212*(1-p);if(top_)top_.classList.toggle("show",scrollY>600);if(oi&&scrollY<innerHeight*1.2)oi.style.translate="0 "+scrollY*.06+"px"}
addEventListener("scroll",()=>{if(!st){st=true;requestAnimationFrame(tick2)}},{passive:true});
if(top_)top_.onclick=()=>scrollTo({top:0,behavior:"smooth"});
if($("#burger"))$("#burger").onclick=()=>$("#menu").classList.toggle("open");
document.addEventListener("click",e=>{const link=e.target.closest("a[href]");if(!link||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||link.target==="_blank"||link.hasAttribute("download"))return;const url=new URL(link.href,location.href);if(url.protocol!==location.protocol||(url.protocol!=="file:"&&url.host!==location.host))return;const file=url.pathname.split("/").pop()||"index.html",title=pageNames[file];if(!title||url.pathname===location.pathname)return;e.preventDefault();url.searchParams.set("transition","1");url.searchParams.set("transitionTitle",title);try{sessionStorage.setItem("hatrusLaunched","1")}catch(err){}location.assign(url.href)});
const form=$("#f");
if(form){
const select=form.querySelector("select[name=s]");
select.innerHTML=`<option value="" selected disabled>Select a service</option>${S2.map(x=>`<option value="${x[0]}">${x[0]}</option>`).join("")}<option value="Other">Other</option>`;
const requested=new URLSearchParams(location.search).get("service");if(requested&&[...select.options].some(o=>o.value===requested))select.value=requested;
form.onsubmit=e=>{e.preventDefault();const d=new FormData(form);openLink("mailto:info@hatrus.com?subject="+encodeURIComponent("Enquiry: "+d.get("s"))+"&body="+encodeURIComponent(`Name: ${d.get("n")}\nEmail: ${d.get("e")}\nPhone: ${d.get("p")}\n\n${d.get("m")}`));$("#ok").textContent="Thanks. Your email app is opening with your enquiry. You can also call +260 762 388540."};
}
function openLink(h){let w=null;try{w=window.open(h,"_blank")}catch(e){}if(w){setTimeout(()=>{try{w.close()}catch(e){}},600);return}try{window.top.location.href=h}catch(e){location.href=h}}
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="tel:"],a[href^="mailto:"]');if(!a)return;e.preventDefault();openLink(a.getAttribute("href"))});
$$('a[href^="tel:"],a[href^="mailto:"]').forEach(a=>a.setAttribute("rel","noopener"));
