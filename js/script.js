'use strict';
document.addEventListener('DOMContentLoaded',()=>{
const el=id=>document.getElementById(id);
let catalogo={};try{catalogo=JSON.parse(el('catalogo-de-fotos')?.textContent||'{}')}catch(err){console.warn('Catálogo de fotos inválido',err)}
document.querySelectorAll('[data-foto]').forEach(img=>{const src=catalogo[img.dataset.foto];if(src)img.src=src});
document.querySelectorAll('[data-foto-fundo]').forEach(node=>{const src=catalogo[node.dataset.fotoFundo];if(src)node.style.backgroundImage=`url("${src.replaceAll('"','%22')}")`});
const loader=el('preloader');if(loader){window.addEventListener('load',()=>loader.remove(),{once:true});setTimeout(()=>loader.remove(),2200)}
const lightbox=el('lightbox-overlay'),lightImg=el('lightbox-img');
const fecharLuz=()=>{if(lightbox){lightbox.classList.remove('aberto');lightbox.setAttribute('aria-hidden','true');lightImg.src='';document.body.style.overflow=''}};
document.querySelectorAll('[data-lightbox-foto]').forEach(node=>{const abrir=()=>{const src=catalogo[node.dataset.lightboxFoto];if(!src||!lightbox)return;lightImg.src=src;lightImg.alt=node.dataset.alt||'Foto ampliada';lightbox.classList.add('aberto');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};node.addEventListener('click',abrir);node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();abrir()}})});
el('lightbox-fechar')?.addEventListener('click',fecharLuz);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)fecharLuz()});document.addEventListener('keydown',e=>{if(e.key==='Escape')fecharLuz()});
// Comparison of original and restored historic altar.
const slider=el('slider');if(slider){let dragging=false;const move=e=>{if(!dragging)return;const r=slider.getBoundingClientRect();slider.style.setProperty('--comparacao',Math.min(100,Math.max(0,((e.clientX-r.left)/r.width)*100))+'%')};slider.addEventListener('pointerdown',e=>{dragging=true;slider.setPointerCapture(e.pointerId);move(e)});slider.addEventListener('pointermove',move);slider.addEventListener('pointerup',()=>dragging=false);slider.addEventListener('pointercancel',()=>dragging=false)}
// Donation tabs and Pix key.
document.querySelectorAll('.doacao-tab').forEach(btn=>btn.addEventListener('click',()=>{const key=btn.dataset.tab;document.querySelectorAll('.doacao-tab').forEach(x=>{const on=x===btn;x.classList.toggle('ativa',on);x.setAttribute('aria-selected',String(on))});document.querySelectorAll('.doacao-painel').forEach(x=>x.classList.toggle('ativo',x.dataset.painel===key))}));
el('btn-pix')?.addEventListener('click',async()=>{const code=el('chave-pix')?.textContent.trim();if(!code)return;try{await navigator.clipboard.writeText(code);const btn=el('btn-pix');const old=btn.title;btn.title='Copiado!';setTimeout(()=>btn.title=old,1500)}catch{window.prompt('Copie a chave Pix:',code)}});
if(el('ano-atual'))el('ano-atual').textContent=String(new Date().getFullYear());
// Clock in Recife time zone.
const tz='America/Recife',clock=el('relogio-paroquia');const hourFmt=new Intl.DateTimeFormat('pt-BR',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
const dateFmt=new Intl.DateTimeFormat('pt-BR',{timeZone:tz,day:'2-digit',month:'2-digit',year:'numeric'});const dayFmt=new Intl.DateTimeFormat('pt-BR',{timeZone:tz,weekday:'long'});
function tick(){const d=new Date(),str=hourFmt.format(d),[h,m,s]=str.split(':').map(Number);if(el('relogio-digital'))el('relogio-digital').textContent=str;if(el('relogio-data'))el('relogio-data').textContent=dateFmt.format(d);if(el('relogio-semana'))el('relogio-semana').textContent=dayFmt.format(d);[['ponteiro-horas',((h%12)+m/60)*30],['ponteiro-minutos',(m+s/60)*6],['ponteiro-segundos',s*6]].forEach(([id,deg])=>{if(el(id))el(id).style.transform=`translateX(-50%) rotate(${deg}deg)`})}tick();setInterval(tick,1000);
if(clock){const onScroll=()=>clock.classList.toggle('fixo',window.scrollY>Math.max(260,document.querySelector('.parallax')?.offsetHeight||350));window.addEventListener('scroll',onScroll,{passive:true});onScroll();el('relogio-ocultar')?.addEventListener('click',()=>{clock.classList.add('oculto');el('relogio-mostrar').hidden=false});el('relogio-mostrar')?.addEventListener('click',()=>{clock.classList.remove('oculto');el('relogio-mostrar').hidden=true})}
// Sound plays on explicit click, respecting browser autoplay policies.
const som=el('som-sino');el('btn-teste-sino')?.addEventListener('click',async()=>{if(!som)return;try{som.pause();som.currentTime=0;await som.play()}catch(err){console.warn('Som indisponível',err)}});
// Highlight upcoming mass based on local weekday (no assertions about special schedules).
const day=Number(new Intl.DateTimeFormat('en-US',{timeZone:tz,weekday:'short'}).format(new Date()).replace(/.*/,x=>({Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6})[x]));document.querySelectorAll('.agenda-item[data-dia]').forEach(node=>{if(Number(node.dataset.dia)===day)node.style.borderColor='#c79a42'});
});
