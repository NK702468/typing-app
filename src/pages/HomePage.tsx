import { Link } from "react-router-dom"
import { routeButtons } from "../ROUTES"
import styles from "../Module.css/HomePage.module.css"
type Props = {}


export default function HomePage({}: Props) {
  return (
    <div>
      <h1>Typing App</h1>
      <p>
        フロントエンドの言語でよく使われる文字列を対象にしたタイピングゲームです<br />
        下記の言語から練習したいものを選択してください
        頑張りましょう
      </p>
      <div className={styles.option}>
        {routeButtons.map((btn) => (
          <Link to={btn.route} key={btn.route}><button type="button">{btn.label}</button></Link>
        ))}
      </div>
      
    </div>   
  )
}