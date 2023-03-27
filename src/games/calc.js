import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rulesGame = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};
const checkCalc = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = calculate(first, second, operator).toString();
  return [question, correctAnswer];
};
const calcGame = () => {
  startGame(checkCalc, rulesGame);
};

export default calcGame;
