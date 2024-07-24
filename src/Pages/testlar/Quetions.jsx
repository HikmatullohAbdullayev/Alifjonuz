import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: 'Qaysi dasturlash tili frontendda ishlatiladi?',
    options: ['Python', 'JavaScript', 'Java', 'C++'],
    answer: 'JavaScript',
  },
  {
    id: 2,
    question: 'React nima?',
    options: [
      'JavaScript kutubxonasi',
      'Python moduli',
      'CSS preprocessor',
      'Node.js framework',
    ],
    answer: 'JavaScript kutubxonasi',
  },
]

const Quetions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1)
    }
    setSelectedOption(answer)
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="app">
      {currentQuestion ? (
        <div>
          <h1>{currentQuestion.question}</h1>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button onClick={handleNextQuestion}>Keyingi savol</button>
          )}
        </div>
      ) : (
        <div>
          <h1>Natija</h1>
          <p>Siz {score} ta savolni to'g'ri javob berdingiz!</p>
        </div>
      )}
    </div>
  )
}

export default Quetions
