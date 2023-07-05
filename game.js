/*

	遊戲JavaScript文件
	
*/
document.querySelector('.winner1').style = 'display: none'
document.querySelector('.winner2').style = 'display: none'
document.querySelector('.dice').style = 'display: none'



let currentPlayer = 1
let player1TotalScore = 0;
let player2TotalScore = 0;
let isPlayingGame = true;
let counter = 1;


document.querySelector('.roll').addEventListener('click', function(){

	if (isPlayingGame){


	let dice = Math.floor(Math.random() * 6 ) + 1;
	document.querySelector('.dice').style = 'display: block';
	document.querySelector('.dice').src = 'dice' + dice + '.png';
	
	if (currentPlayer === 1){

		player1TotalScore += dice;
		document.getElementById('player' + currentPlayer + 'CurrentScore').textContent = dice;
		document.querySelector('.player1TotalScore').textContent = player1TotalScore;
		document.querySelector('.panel-1').classList.remove('active');
		document.querySelector('.panel-2').classList.add('active');
		currentPlayer = 2;
		console.log(currentPlayer);


	} else {

		player2TotalScore += dice;
		document.getElementById('player' + currentPlayer + 'CurrentScore').textContent = dice;
		document.querySelector('.player2TotalScore').textContent = player2TotalScore; 
		document.querySelector('.panel-2').classList.remove('active');
		document.querySelector('.panel-1').classList.add('active');
		currentPlayer = 1;
		console.log(currentPlayer);
	}


	counter += 1;

	if (counter === 7){
		if (player1TotalScore > player2TotalScore){
			document.querySelector('.winner1').style = 'display: block';
			isPlayingGame = false;
			document.getElementById('player1CurrentScore').style = 'margin-top: 0px';
			document.querySelector('.roll').textContent = 'RE-ROLL'
		} else if (player1TotalScore < player2TotalScore){
			document.querySelector('.winner2').style = 'display: block';
			isPlayingGame = false;
			document.getElementById('player2CurrentScore').style = 'margin-top: 0px';
			document.querySelector('.roll').textContent = 'RE-ROLL'
		} else {
			document.querySelector('.roll').textContent = 'TIES!'
			isPlayingGame = false;
		}
		}

	} else {
		init()
		isPlayingGame = true;
	}
})




function init(){
	document.querySelector('.winner1').style = 'display: none';
	document.querySelector('.winner2').style = 'display: none';
	document.querySelector('.dice').style = 'display: none';
	document.getElementById('player1CurrentScore').style = 'margin-top: 55px';
	document.getElementById('player2CurrentScore').style = 'margin-top: 55px';
	document.getElementById('player1CurrentScore').textContent = '0';
	document.getElementById('player2CurrentScore').textContent = '0';
	document.querySelector('.player1TotalScore').textContent = '0';
	document.querySelector('.player2TotalScore').textContent = '0';
	document.querySelector('.roll').textContent = 'ROLL!'
	currentPlayer = 1;
	player1TotalScore = 0;
	player2TotalScore = 0;

	isPlayingGame = true;
	counter = 1;
}

document.querySelector('.newGame').addEventListener('click', function(){
	init();	
})
