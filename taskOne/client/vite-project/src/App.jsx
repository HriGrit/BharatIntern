import SignIn from './SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './LogIn'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App