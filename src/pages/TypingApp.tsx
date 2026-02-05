import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../ROUTES";

type Props = {
    QuizData: string[];
}

export default function TypingApp({QuizData}: Props) {
    
    const [textIndex, setTextIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputText, setInputText] = useState("");
    const [finishLogs, setFinishLogs] = useState<string[]>([]);
    const navigation = useNavigate();

    const shuffleArray = (array: string[]): any => {
      const shuffled = [...array];
      for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()*(i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
    
    const [shuffledQuiz, setShuffledQuiz] = useState<string[]>([])

    useEffect(() => {
      setShuffledQuiz(shuffleArray(QuizData));
    },[QuizData]);

    const text = shuffledQuiz[textIndex];

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = e.target.value;
      const char:string = value.slice(-1);

      setInputText(char)
      
      if(char === text[currentIndex]){
        setCurrentIndex((prev) => prev + 1);
      }
      else{
        setCurrentIndex(0);
      }

      if(currentIndex === shuffledQuiz[textIndex].length-1){
        setInputText("");
        setCurrentIndex(0);
        setTextIndex((prev) => prev + 1);
        setFinishLogs((prev) => [...prev, shuffledQuiz[textIndex]])
      }
    }

    useEffect(() => {
      if(shuffledQuiz.length > 0 && finishLogs.length === shuffledQuiz.length){
        navigation(ROUTES.RESULT);
      }
    },[finishLogs, shuffledQuiz,navigation])
    

    return (
      <div>
        <h1>
          {shuffledQuiz[textIndex] && text.split("").map((char, index) =>{
            if(index < currentIndex){
              return <span key={index} style={{backgroundColor:"blue"}}>{char}</span>
            }
            return <span key={index}>{char}</span>
        })}
        </h1>
  
        <input type="text" value={inputText} autoFocus onChange={(e) => handleChanged(e)}/>
      </div>
    )
}