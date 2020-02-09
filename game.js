const Game = require('./game-class');
const Player = require('./player-class');
const Question = require('./question-class');

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(theQuestion) {
  return new Promise(resolve =>
    rl.question(theQuestion, answ => resolve(answ))
  );
}

async function askQuestions() {
  const player1Name = await question('Player 1 what is your name: ');
  const player1 = new Player(player1Name, 3);
  const player2Name = await question('Player 2 What is your name: ');
  const player2 = new Player(player2Name, 3);
  let activePlayer = player1;
  const game1 = new Game(player1, player2);

  let i = 0;
  while (player1.lives !== 0 && player2.lives !== 0) {
    let mathQuestion = new Question();
    const questionare = await question(
      mathQuestion.askQuestion(activePlayer.name)
    );
    if (mathQuestion.correctAnswer(questionare)) {
      console.log('Great Job');
      game1.score(player1, player2);
      console.log('____________');
    } else {
      console.log('Really!! 😩');
      activePlayer.decreaseLives();
      game1.score(player1, player2);
      console.log('____________');
    }
    activePlayer == player1
      ? (activePlayer = player2)
      : (activePlayer = player1);
    i++;
  }

  rl.close();
}
askQuestions();
