const scoreDisplay=document.getElementById('scoreDisplay');
const playAgainBtn=document.getElementById('playAgainBtn');
const won=localStorage.getItem('won')==='true';
const finalBalance=parseInt(localStorage.getItem('finalBalance')||localStorage.getItem('balance')||'0',10);
if(finalBalance<=0){
	scoreDisplay.textContent=`Game over — you lost. Final balance: $${finalBalance.toLocaleString()}`;
}else if(won){
	scoreDisplay.textContent=`You win! Final balance: $${finalBalance.toLocaleString()}`;
}else{
	scoreDisplay.textContent=`Final balance: $${finalBalance.toLocaleString()}`;
}
playAgainBtn.addEventListener('click',()=>{
	// Reset state
	Object.keys(localStorage).filter(k=>k.startsWith('remaining_')).forEach(k=>localStorage.removeItem(k));
	localStorage.removeItem('selectedGenre');
	localStorage.removeItem('excludeGenre');
	localStorage.removeItem('lastGenre');
	localStorage.removeItem('won');
	localStorage.removeItem('finalBalance');
	localStorage.setItem('balance','1000');
	localStorage.removeItem('questionCount');
	window.location.href='index.html';
});
