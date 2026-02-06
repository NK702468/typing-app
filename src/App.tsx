import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import TypingJS from './pages/TypingJS'
import TypingHTML from './pages/TypingHTML'
import TypingCSS from './pages/TypingCSS'


function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/html-typing" element={<TypingHTML/>}/>
          <Route path="/css-typing" element={<TypingCSS/>}/>
          <Route path="/js-typing" element={<TypingJS/>}/>
          <Route path="/result" element={<ResultPage />}/>
        </Routes>
    </>
  )
}

export default App
