const genres=["Tv shows","Movies","Holidays","Celebrities","Religion","History","Politics","Music","Technology","Adventure"];
const wheel=document.getElementById('wheel');
const spinBtn=document.getElementById('spinBtn');
const startQuizBtn=document.getElementById('startQuizBtn');
const selectedGenreEl=document.getElementById('selectedGenre');
const genreImgEl=document.getElementById('genreImage');
let spinning=false;let selectedIndex=null;

function buildWheel(){// Use conic-gradient for segments
 const colors=["#ffdd57","#ff8a5c","#ff5d8f","#e05297","#b44c9d","#8c53a3","#5e5faf","#3f68b5","#2b76b9","#0091c2"]; // 10 colors
 const step=360/genres.length; // Build labels
 wheel.style.background=`conic-gradient(${genres.map((_,i)=>colors[i%colors.length]+" "+(i*step)+"deg "+((i+1)*step)+"deg").join(",")})`;
 genres.forEach((g,i)=>{const label=document.createElement('div');label.className='segment-label';label.textContent=g;const angle=(i*step)+(step/2);label.style.transform=`rotate(${angle}deg) translateX(45px)`;wheel.appendChild(label);});
}

function spin(){if(spinning)return;spinning=true;selectedIndex=null;startQuizBtn.classList.add('hidden');selectedGenreEl.textContent='Spinning...'; if(genreImgEl){genreImgEl.classList.add('hidden'); genreImgEl.removeAttribute('src');}
 const step=360/genres.length;let targetIndex=Math.floor(Math.random()*genres.length);
 const exclude=localStorage.getItem('excludeGenre');
 let guard=0;while(exclude && genres[targetIndex]===exclude && guard<50){targetIndex=Math.floor(Math.random()*genres.length);guard++;}
selectedIndex=targetIndex;const targetAngle=(360-(targetIndex*step+step/2));const extraTurns=360*5;const finalAngle=extraTurns+targetAngle;wheel.style.transition='transform 6s cubic-bezier(.17,.67,.32,1.25)';wheel.style.transform=`rotate(${finalAngle}deg)`;setTimeout(()=>{const genre=genres[selectedIndex];selectedGenreEl.textContent=`Genre: ${genre}`;startQuizBtn.classList.remove('hidden');localStorage.setItem('selectedGenre',genre);localStorage.setItem('lastGenre',genre);if(typeof genreImagePath==='function'){const path=genreImagePath(genre); if(genreImgEl){genreImgEl.src=path; genreImgEl.alt=genre; genreImgEl.classList.remove('hidden');} localStorage.setItem('selectedGenreImage',path);} if(exclude&&genre!==exclude){localStorage.removeItem('excludeGenre');}spinning=false;},6000);} 

spinBtn.addEventListener('click',spin);
startQuizBtn.addEventListener('click',()=>{if(selectedIndex===null)return;window.location.href='quiz.html';});

buildWheel();
