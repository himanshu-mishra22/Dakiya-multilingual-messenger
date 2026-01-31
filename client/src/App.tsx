import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './components/Dashboard/ChatDashboard'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  return (
     <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
       <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
