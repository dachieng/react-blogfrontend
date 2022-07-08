import React from 'react';
import Posts from '../pages/admin/Posts';
import { GET } from '../utils/axiosRequests';

let Admin = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    let getPosts = async () => {
      let response = await GET('posts/admin/');
      setPosts(response.data);
    };
    getPosts();
  }, [setPosts]);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default Admin;
