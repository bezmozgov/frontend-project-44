import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const checkEven = () => {
  const getTheNumber = getRandomNumber(0, 100);
  const correctAnswer = (isEven(getTheNumber)) ? 'yes' : 'no';
  return [getTheNumber, correctAnswer];
};

const evenGame = () => {
  startGame(checkEven, rulesGame);
};

export default evenGame;
