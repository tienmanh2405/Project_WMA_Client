import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './page/About.jsx';
import Home from './page/home/Home.jsx';
import Project from './page/project/project.jsx';
import Task from './page/mytask/Task.jsx';
import Profile from './page/profile/Profile.jsx';
import NotificationPage from './page/notification/Notification.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/mytask" element={<Task />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
