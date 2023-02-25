import readlineSync from 'readline-sync';

const rulesCheckEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenNumer = (number) => (number % 2 === 0);

const checkEven = () => {
  const numb = getRandomNumber(0, 100);
  const correctAnswer = (evenNumer(numb)) ? 'yes' : 'no';
  return [numb, correctAnswer];
};

const startEvenGame = (getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesCheckEven);
  const maxRoundsCount = 3;
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

const evenGame = () => {
  startEvenGame(checkEven, rulesCheckEven);
};

export default evenGame;
