const scoreDisplay=document.getElementById('scoreDisplay');
const playAgainBtn=document.getElementById('playAgainBtn');
const score=parseInt(localStorage.getItem('lastScore')||'0',10);
const total=parseInt(localStorage.getItem('lastTotal')||'5',10);
scoreDisplay.textContent=`You scored ${score} / ${total}`;
playAgainBtn.addEventListener('click',()=>{localStorage.removeItem('lastScore');localStorage.removeItem('lastTotal');localStorage.removeItem('selectedGenre');window.location.href='index.html';});
