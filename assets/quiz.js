const genre=localStorage.getItem('selectedGenre');
const titleEl=document.getElementById('quizGenreTitle');
const qText=document.getElementById('questionText');
const answersEl=document.getElementById('answers');
const nextBtn=document.getElementById('nextBtn');
const qNumberEl=document.getElementById('qNumber');
const balanceValueEl=document.getElementById('balanceValue');

if(!genre||!QUESTION_BANK[genre]){window.location.replace('index.html');}
else{titleEl.textContent=`${genre} Quiz`;}
// Set genre image on quiz page
const quizImgEl=document.getElementById('quizGenreImage');
if(quizImgEl){
	const path=(typeof genreImagePath==='function')?genreImagePath(genre):localStorage.getItem('selectedGenreImage');
	if(path){quizImgEl.src=path; quizImgEl.alt=genre;}
}

// Balance system
let balance=parseInt(localStorage.getItem('balance')||'1000',10);
function updateBalanceDisplay(){balanceValueEl.textContent=balance.toLocaleString();}
updateBalanceDisplay();

// Build or load remaining question indices for this genre
const allQs=[...(QUESTION_BANK[genre]||[])];
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
const remainingKey=`remaining_${genre}`;
let remaining=JSON.parse(localStorage.getItem(remainingKey)||'null');
if(!Array.isArray(remaining)){
	remaining=shuffle(Array.from({length:allQs.length},(_,i)=>i));
}

let currentIndex=null;let answered=false;let questionCount=parseInt(localStorage.getItem('questionCount')||'0',10);

function nextQuestion(){
	if(balance>=5000){
		localStorage.setItem('won','true');
		localStorage.setItem('finalBalance',String(balance));
		window.location.href='results.html';
		return;
	}
	if(remaining.length===0){
		// Out of questions in this genre; send to wheel and exclude this genre
		localStorage.setItem('excludeGenre',genre);
		localStorage.setItem('lastGenre',genre);
		localStorage.setItem('balance',String(balance));
		localStorage.removeItem('selectedGenre');
		window.location.href='index.html';
		return;
	}
	answered=false;nextBtn.classList.add('hidden');
	currentIndex=remaining.shift();
	localStorage.setItem(remainingKey,JSON.stringify(remaining));
	const q=allQs[currentIndex];
	qText.textContent=q.question;
	qNumberEl.textContent=String(++questionCount);
	localStorage.setItem('questionCount',String(questionCount));
	answersEl.innerHTML='';
	q.choices.forEach((choice,i)=>{
		const btn=document.createElement('button');
		btn.textContent=choice;
		btn.addEventListener('click',()=>handleAnswer(i,q.answer));
		answersEl.appendChild(btn);
	});
}

function handleAnswer(index,correctIdx){
	if(answered)return;answered=true;
	const buttons=[...answersEl.querySelectorAll('button')];
	buttons.forEach((b,i)=>{if(i===correctIdx){b.classList.add('correct');}else if(i===index){b.classList.add('incorrect');}b.disabled=true;});
	if(index===correctIdx){balance+=500;}else{balance-=500;}
	localStorage.setItem('balance',String(balance));
	updateBalanceDisplay();
	// Lose condition: balance at or below $0 ends the game now
	if(balance<=0){
		localStorage.removeItem('won');
		localStorage.setItem('finalBalance',String(balance));
		window.location.href='results.html';
		return;
	}
	nextBtn.classList.remove('hidden');
	nextBtn.textContent='Next';
}

nextBtn.addEventListener('click',()=>{if(!answered)return;nextQuestion()});

nextQuestion();
