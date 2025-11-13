const genre=localStorage.getItem('selectedGenre');
const titleEl=document.getElementById('quizGenreTitle');
const qText=document.getElementById('questionText');
const answersEl=document.getElementById('answers');
const nextBtn=document.getElementById('nextBtn');
const qNumberEl=document.getElementById('qNumber');

if(!genre||!QUESTION_BANK[genre]){window.location.replace('index.html');}
else{titleEl.textContent=`${genre} Quiz`;}

const questions=[...(QUESTION_BANK[genre]||[])];
// Shuffle questions and take 5
for(let i=questions.length-1;i>0;i--){const j=Math.floor(Math.random()* (i+1));[questions[i],questions[j]]=[questions[j],questions[i]];}
const selected=questions.slice(0,5);
let current=0;let score=0;let answered=false;

function renderQuestion(){answered=false;nextBtn.classList.add('hidden');const q=selected[current];qText.textContent=q.question;qNumberEl.textContent=current+1;answersEl.innerHTML='';q.choices.forEach((choice,i)=>{const btn=document.createElement('button');btn.textContent=choice;btn.addEventListener('click',()=>handleAnswer(i));answersEl.appendChild(btn);});}

function handleAnswer(index){if(answered)return;answered=true;const q=selected[current];const buttons=[...answersEl.querySelectorAll('button')];buttons.forEach((b,i)=>{if(i===q.answer){b.classList.add('correct');}else if(i===index){b.classList.add('incorrect');}b.disabled=true;});if(index===q.answer)score++;nextBtn.classList.remove('hidden');if(current===selected.length-1){nextBtn.textContent='Finish';}}

nextBtn.addEventListener('click',()=>{if(!answered)return;if(current<selected.length-1){current++;renderQuestion();}else{localStorage.setItem('lastScore',String(score));localStorage.setItem('lastTotal',String(selected.length));window.location.href='results.html';}});

renderQuestion();
