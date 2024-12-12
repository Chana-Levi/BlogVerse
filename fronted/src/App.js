import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // עדכון ל- Routes
import PostHome from './components/PostHome';  // דף הבית שמציג את כל הפוסטים
import PostForm from './components/PostForm';  // דף יצירת הפוסט החדש
import PostList from './components/PostList';  // דף שמציג את כל הפוסטים

const App = () => {
  return (
    <Router>
      <Routes>  {/* שינוי מ-Switch ל-Routes */}
        {/* דף הבית שמציג את כל הפוסטים */}
        <Route path="/" exact element={<PostHome />} />  {/* שינוי מ-component ל-element */}

        {/* דף יצירת הפוסט החדש */}
        <Route path="/create-post" element={<PostForm />} />  {/* שינוי מ-component ל-element */}

        {/* דף שבו תוכל לראות את כל הפוסטים */}
        <Route path="/posts" element={<PostList />} />  {/* שינוי מ-component ל-element */}
      </Routes>
    </Router>
  );
};

export default App;
