import getRandomNumber from '../utils/random.js'
import runEngine from '../index.js'

// НОД по алгоритму Евклида
const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.'

  const generateRound = () => {
    const num1 = getRandomNumber(1, 100)
    const num2 = getRandomNumber(1, 100)
    const question = `${num1} ${num2}`
    const correctAnswer = String(getGCD(num1, num2))
    return [question, correctAnswer]
  }

  runEngine(description, generateRound)
}

export default gcdGame
