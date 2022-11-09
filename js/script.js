{
	const playerScoreDisplay = document.getElementById('player-score');
	const computerScoreDisplay = document.getElementById('computer-score');
	let playerScore = 0;
	let computerScore = 0;
	const playGame = function (playerInput) {
		clearMessages();

		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return 'kamień';
			} else if (argMoveId == 2) {
				return 'papier';
			} else if (argMoveId == 3) {
				return 'nożyce';
			} else {
				printMessage('Nie znam ruchu o id ' + argMoveId + '.');
				return 'nieznany ruch';
			}
		};

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('Wylosowana liczba to: ' + randomNumber);

		const argComputerMove = getMoveName(randomNumber);
		printMessage('Mój ruch to: ' + argComputerMove);
		console.log('Gracz wpisał: ' + playerInput);

		const argPlayerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + argPlayerMove);
		console.log('moves:', argComputerMove, argPlayerMove);

		const displayResult = function (argComputerMove, argPlayerMove) {
			if (argComputerMove == argPlayerMove) {
				printMessage('Mamy remis!');
			} else if (
				(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
				(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
				(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
			) {
				printMessage('Ty wygrywasz!');
				playerScore++;
				playerScoreDisplay.innerHTML = playerScore;
			} else {
				printMessage('Ja wygrywam!');
				computerScore++;
				computerScoreDisplay.innerHTML = computerScore;
			}
		};
		displayResult(argComputerMove, argPlayerMove);
	};

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame('1');
	});
	document
		.getElementById('play-paper')
		.addEventListener('click', function () {
			playGame('2');
		});
	document
		.getElementById('play-scissors')
		.addEventListener('click', function () {
			playGame('3');
		});
}
