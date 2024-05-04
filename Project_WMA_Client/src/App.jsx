import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './page/about/About.jsx';
import Home from './page/home/Home.jsx';
import Project from './page/project/project.jsx';
import Profile from './page/profile/Profile.jsx';
import NotificationPage from './page/notification/Notification.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/slice/auth';
import authService from './services/auth/index.js';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state => state.auth));

  // dispatch lại trang thái login trước khi toàn bộ APP components load

  useEffect(() => {
    const renewAccessToken = async () => {
      if (isLogin === false) {
        if (localStorage.getItem("refreshToken")) {
          try {
            const { accessToken, userInfo } = await authService.renewAccessToken(localStorage.getItem("refreshToken"));
            dispatch(login({ accessToken, userInfo }));
          } catch (error) {
            console.error("Error renewing access token:", error);
          }
        }
      }
    };

    renewAccessToken();
  }, [dispatch, isLogin]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
