import { Questions } from "../QuizData"
import TypingApp from "./TypingApp"


type Props = {}

export default function TypingCSS({}: Props) {
  return (
    <div>
        <TypingApp QuizData={Questions.css} />
    </div>
  )
}