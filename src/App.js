import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthUser from './components/Authorisation/Authuser';
import AvatarHome from './components/Avatar/Avatar';
import Home from './components/Home/Home';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';

function App() {

  // Calling user from redux
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            userPic: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      }
      else {
        dispatch(logout());
      }
    });
  }, [dispatch])


  // Adding  a private route for preventing unauhtorized access
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/auth" />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path={user ? "/" : "/auth"} element={user ? <Home /> : <AuthUser />} />
        <Route path="/auth" element={<AuthUser />} />
        <Route path="/" element={<Navigate replace to='/home' />} />
        <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
        <Route path="/avatar" element={<PrivateRoute><AvatarHome /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
