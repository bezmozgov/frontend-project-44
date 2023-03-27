import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rulesGame = 'What number is missing in the progression?';

const getProgression = (start, changeLength, difference) => {
  const readyProgression = [];
  for (let i = 0; i <= (changeLength - 1); i += 1) {
    readyProgression.push(start + difference * i);
  }
  return readyProgression;
};

const checkProgression = () => {
  const changeLength = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 20);
  const difference = getRandomNumber(0, 5);
  const hiddenIndex = getRandomNumber(1, changeLength);
  const progression = getProgression(start, changeLength, difference);
  const correctAnswer = String(progression[hiddenIndex - 1]);
  progression[hiddenIndex - 1] = '..';
  const question = String(progression.join(' '));
  return [question, correctAnswer];
};

const progressionGame = () => {
  startGame(checkProgression, rulesGame);
};

export default progressionGame;
