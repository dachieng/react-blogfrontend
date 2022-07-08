import './App.css';
import PostList from './pages/PostList';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Single from './pages/Single';
import Admin from './components/Admin';
import Create from './pages/admin/Create';
import Delete from './pages/admin/Delete';
import Edit from './pages/admin/Edit';
import ProtectedRoute from './auth/ProtectedRoute';

const App = () => {
  let [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    let fetchData = async () => {
      try {
        await fetch('https://dorcas-blogger.herokuapp.com/posts/')
          .then((res) => res.json())
          .then((data) => setPosts(data));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [setPosts]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList posts={posts} />} />
        <Route path=':slug/' element={<Single />} />
        <Route path='register/' element={<Register />} />
        <Route path='login/' element={<Login />} />
        <Route
          path='logout/'
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
        <Route
          path='admin/posts/'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path='post/create/'
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path='post/edit/:id/'
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
        <Route
          path='post/delete/:id/'
          element={
            <ProtectedRoute>
              <Delete />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
