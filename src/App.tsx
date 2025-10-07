import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Forgot from './pages/Forgot'
import Reset from './pages/Reset'
import Notice from './pages/Notice'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/notice" element={<Notice />} />
    </Routes>
  )
}
