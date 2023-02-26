import { startGame, getRandomNumber } from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => ((y !== 0) ? getGcd(y, x % y) : x);

const checkGcd = () => {
  const firstNumb = getRandomNumber(1, 100);
  const secondNumb = getRandomNumber(1, 100);
  const question = `${firstNumb} ${secondNumb}`;
  const correctAnswer = String(getGcd(firstNumb, secondNumb));
  return [question, correctAnswer];
};

const gcdGame = () => {
  startGame(checkGcd, rulesGame);
};
export default gcdGame;
