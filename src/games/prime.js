import { startGame, getRandomNumber } from '../index.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkPrime = () => {
  const numb = getRandomNumber(1, 100);
  const question = numb;
  const correctAnswer = (getPrime(numb)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => {
  startGame(checkPrime, rulesGame);
};
export default primeGame;
