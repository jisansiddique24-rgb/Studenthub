const KEY='studenthub_v3';
const configured=true;
const auth={get currentUser(){return currentUser()}}; const app={mode:'local-demo'}; const db={mode:'local-demo'};
function state(){let s;try{s=JSON.parse(localStorage.getItem(KEY)||'null')}catch{};if(!s)s={users:[],session:null,gigs:[],projects:[],payments:[]};return s}
function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
function uid(){return 'u_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function currentUser(){const s=state();return s.users.find(u=>u.id===s.session)||null}
function loginRequired(next=location.pathname.split('/').pop()||'index.html'){location.href='login.html?next='+encodeURIComponent(next)}
function requireLogin(cb){const u=currentUser();if(!u)return loginRequired();cb&&cb(u)}
function protectAction(next,fn){const u=currentUser();if(!u)return loginRequired(next);fn&&fn(u)}
function watchHeader(){const u=currentUser(),profile=document.querySelector('[data-profile]'),login=document.querySelector('[data-login]'),logout=document.querySelector('[data-logout]');if(profile)profile.title=u?'My Profile':'Login required';if(login){login.textContent=u?'Dashboard':'Login';login.href=u?'portfolio.html':'login.html'}if(logout){logout.style.display=u?'inline-flex':'none';logout.onclick=()=>{const s=state();s.session=null;save(s);location.href='index.html'}}if(profile)profile.onclick=e=>{if(!currentUser()){e.preventDefault();loginRequired('portfolio.html')}}}
function escapeHTML(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toast(message){let t=document.getElementById('appToast');if(!t){t=document.createElement('div');t.id='appToast';t.className='toast';document.body.appendChild(t)}t.textContent=message;t.classList.add('show');clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
function initMobileNav(){const header=document.querySelector('header'),nav=header?.querySelector('nav');if(!header||!nav||header.querySelector('.mobile-menu'))return;nav.classList.add('mobile-nav');const b=document.createElement('button');b.className='icon-btn mobile-menu';b.type='button';b.textContent='☰';const actions=header.querySelector('.header-actions');header.insertBefore(b,actions);b.onclick=()=>nav.classList.toggle('show');document.addEventListener('click',e=>{if(!header.contains(e.target))nav.classList.remove('show')})}
document.addEventListener('DOMContentLoaded',initMobileNav);

window.StudentHub={configured,auth,app,db,state,save,uid,currentUser,loginRequired,requireLogin,protectAction,watchHeader,escapeHTML,toast,initMobileNav};
