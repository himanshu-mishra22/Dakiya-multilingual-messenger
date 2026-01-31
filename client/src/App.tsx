import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './components/Dashboard/ChatDashboard'

function App() {
  return (
     <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
