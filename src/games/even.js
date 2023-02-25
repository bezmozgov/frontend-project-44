import { startGame, getRandomNumber } from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumer = (number) => (number % 2 === 0);

const checkEven = () => {
  const numb = getRandomNumber(0, 100);
  const correctAnswer = (evenNumer(numb)) ? 'yes' : 'no';
  return [numb, correctAnswer];
};

const evenGame = () => {
  startGame(checkEven, rulesGame);
};

export default evenGame;
