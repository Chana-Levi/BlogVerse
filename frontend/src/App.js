import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // עדכון ל- Routes
import PostHome from './components/PostHome';  // דף הבית שמציג את כל הפוסטים
import PostForm from './components/PostForm';  // דף יצירת הפוסט החדש
import PostPage from './components/PostPage';  // דף שמציג את כל הפוסטים

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PostHome />} /> 
        <Route path="/create-post" element={<PostForm />} /> 
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
