import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import Dashboard from './pages/dashboard';
import ForumPage from './pages/forumPage';
import SchedulePage from './pages/schedulePage';
import ProfilePage from './pages/profilePage';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import RegisterForm from './components/registerForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="*" element={<div className="flex items-center justify-center min-h-screen"><h1 className="text-2xl font-bold">404 - Page Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
