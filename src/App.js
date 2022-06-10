import './App.css';
import PostList from './components/PostList';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Single from './components/Single';
import Admin from './components/Admin'
import Create from './components/admin/Create'
import Delete from './components/admin/Delete';
import Edit from './components/admin/Edit';

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
        <Route path="register/" element={<Register />} />
        <Route path='login/' element={<Login />} />
        <Route path='logout/' element={<Logout />} />
        <Route path=':slug/' element={<Single />} />
        <Route path="admin/posts/" element = {<Admin />} />
        <Route path="post/create/" element={<Create />} />
        <Route path="post/edit/:id/" element={<Edit />} />
        <Route path="post/delete/:id/" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
