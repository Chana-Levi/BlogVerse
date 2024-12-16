import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import PostHome from './components/PostHome';
import PostForm from './components/PostForm';
import PostPage from './components/PostPage';
import LoginForm from './components/Login';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<PostHome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/create-post" element={<PostForm />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
