import { Link } from "react-router-dom"
import { ROUTES } from "../ROUTES"


export default function ResultPage() {
  return (
    <div>
      <Link to={ROUTES.HOME}><button type="button">もう一度</button></Link> 
    </div> 
  )
}
