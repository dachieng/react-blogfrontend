import './App.css';
import PostList from './components/PostList';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {

  //setting up spinner
  let [posts, setPosts] = React.useState([])
  
  React.useEffect(() => {
   // setAppState({loading:true})
    fetch("http://localhost:8000/")
      .then(res=> res.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="register" element={<Register />} />
        <Route path='login/' element={<Login />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
