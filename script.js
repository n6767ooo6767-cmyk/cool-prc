const ideas=[
 ['A website that changes its UI based on the weather.','WEB'],
 ['Build a bot that invents a new command every hour.','BOT'],
 ['A dashboard where every button does something slightly unexpected.','CHAOS'],
 ['Turn your GitHub commits into a constellation.','GITHUB'],
 ['A local homepage that feels like a spaceship control room.','UI'],
 ['Make a game where the rules rewrite themselves.','GAME'],
 ['A tiny service that gives every project a personality.','API'],
 ['Create a digital pet that reacts to your coding activity.','FUN']
];
const quotes=['The best interface is the one that makes you want to build something.','Ship weird things. Learn fast.','There is no boring project, only boring defaults.','Make it work. Then make it yours.'];
let remaining=25*60, running=false, interval;
const timerEl=document.querySelector('#timer'), dateEl=document.querySelector('#date');
function renderTimer(){let m=String(Math.floor(remaining/60)).padStart(2,'0'),s=String(remaining%60).padStart(2,'0');timerEl.textContent=`${m}:${s}`;document.querySelector('#focusTime').textContent=`${m}:${s}`}
document.querySelector('#start').onclick=()=>{if(running)return;running=true;document.querySelector('#start').textContent='PAUSE';interval=setInterval(()=>{if(remaining<=0){clearInterval(interval);running=false;document.querySelector('#start').textContent='START';return}remaining--;renderTimer()},1000)};
document.querySelector('#start').addEventListener('click',()=>{if(running&&remaining>0){clearInterval(interval);running=false;document.querySelector('#start').textContent='START'}});
document.querySelector('#reset').onclick=()=>{clearInterval(interval);running=false;remaining=25*60;document.querySelector('#start').textContent='START';renderTimer()};
function newIdea(){let [text,tag]=ideas[Math.floor(Math.random()*ideas.length)];document.querySelector('#idea').textContent=text;document.querySelector('#ideaTag').textContent=tag}
document.querySelector('#newIdea').onclick=newIdea;
document.querySelector('#surprise').onclick=()=>{newIdea();document.querySelector('#quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];document.querySelector('#chaos').textContent=Math.floor(50+Math.random()*50)+'%';document.querySelector('#meter').style.width=document.querySelector('#chaos').textContent;document.querySelector('#projects').textContent=17+Math.floor(Math.random()*8);document.querySelector('#lines').textContent=(3500+Math.floor(Math.random()*3000)).toLocaleString('en-US');document.querySelector('#terminalText').textContent='nexus --chaos-mode --enabled';toast('CHAOS MODE ENABLED ⚡')};
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText(b.dataset.copy);toast('Copied!')});
function toast(t){let x=document.querySelector('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1400)}
document.querySelector('#themeBtn').onclick=()=>{document.body.classList.toggle('light');toast(document.body.classList.contains('light')?'LIGHT MODE':'DARK MODE')};
setInterval(()=>{document.querySelector('#clock').textContent=new Date().toLocaleTimeString('ru-RU');},1000);document.querySelector('#clock').textContent=new Date().toLocaleTimeString('ru-RU');dateEl.textContent=new Date().toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'});renderTimer();
