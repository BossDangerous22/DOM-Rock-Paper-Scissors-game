let wins = 0;
let ties = 0;
let losses = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
    ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    wins++;
  } else {
    result = 'You lose!';
    losses++;
  }

  updateScoreboard();
  showResult(result);
}

function updateScoreboard() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('ties').textContent = ties;
  document.getElementById('losses').textContent = losses;
}

function showResult(result) {
  document.getElementById('result').textContent = result;
}
