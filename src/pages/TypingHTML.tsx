import { Questions } from "../QuizData"
import TypingApp from "./TypingApp"


type Props = {}

export default function TypingHTML({}: Props) {
  return (
    <div>
        <TypingApp QuizData={Questions.html} />
    </div>
  )
}