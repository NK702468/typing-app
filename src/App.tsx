import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './ROUTES'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import TypingJS from './pages/TypingJS'
import TypingHTML from './pages/TypingHTML'
import TypingCSS from './pages/TypingCSS'


function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}/>
          <Route path={ROUTES.HTML} element={<TypingHTML/>}/>
          <Route path={ROUTES.CSS} element={<TypingCSS/>}/>
          <Route path={ROUTES.JS} element={<TypingJS/>}/>
          <Route path={ROUTES.RESULT} element={<ResultPage />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
