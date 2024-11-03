// import { FC, useState, useEffect } from 'react'
// import styled from 'styled-components'

// import { device } from '../../../styles/BreakPoints'

// import CodeSnippet from '../../ui/CodeSnippet'
// import Answer from '../Answer'
// import QuizImage from '../../ui/QuizImage'

// const QuestionContainer = styled.div`
//   margin-top: 30px;
//   margin-bottom: 40px;
//   max-width: 88%;
//   @media ${device.sm} {
//     max-width: 100%;
//   }
// `

// const AnswersContainer = styled.div`
//   max-width: 78%;
//   @media ${device.sm} {
//     max-width: 100%;
//   }
// `

// const QuestionStyle = styled.h2`
//   font-size: clamp(18px, 4vw, 28px);
//   font-weight: 500;
//   margin-bottom: 25px;
//   color: ${({ theme }) => theme.colors.primaryText};
//   line-height: 1.3;
// `

// interface QuestionTypes {
//   question: string
//   code?: string
//   image?: string
//   type: string
//   choices: string[]
//   selectedAnswer: string[]
//   handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
// }

// const Question: FC<QuestionTypes> = ({
//   question,
//   code,
//   image,
//   type,
//   choices,
//   selectedAnswer,
//   handleAnswerSelection,
// }) => {
//   return (
//     <QuestionContainer>
//       <QuestionStyle>{question}</QuestionStyle>
//       {/* if question contains code snippet then show code */}
//       {code && <CodeSnippet code={code} language="javascript" />}
//       {/* if question contains an image */}
//       {image && <QuizImage image={image} />}
//       <AnswersContainer>
//         {choices.map((choice, index) => (
//           <Answer
//             choice={choice}
//             index={index}
//             key={index}
//             onChange={(e) => handleAnswerSelection(e, index)}
//             type={type}
//             selectedAnswer={selectedAnswer}
//           />
//         ))}
//       </AnswersContainer>
//     </QuestionContainer>
//   )
// }

// export default Question


import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

import { device } from '../../../styles/BreakPoints'

import CodeSnippet from '../../ui/CodeSnippet'
import Answer from '../Answer'
import QuizImage from '../../ui/QuizImage'

const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

interface QuestionTypes {
  question: string
  code?: string
  image?: string
  type: string
  choices: string[]
  selectedAnswer: string[]
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

const Question: FC<QuestionTypes> = ({
  question,
  code,
  image,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  const [shuffledChoices, setShuffledChoices] = useState<string[]>([])

  useEffect(() => {
    setShuffledChoices(shuffleArray(choices))
  }, [choices])

  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>
      {/* if question contains code snippet then show code */}
      {code && <CodeSnippet code={code} language="javascript" />}
      {/* if question contains an image */}
      {image && <QuizImage image={image} />}
      <AnswersContainer>
        {shuffledChoices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default Question
