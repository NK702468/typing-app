import { Questions } from "../QuizData"
import TypingApp from "./TypingApp"

type Props = {}

export default function TypingJS({}: Props) {
  return (
      <div>
        <TypingApp QuizData={Questions.js}/>
      </div>
  )
    
  
  
}