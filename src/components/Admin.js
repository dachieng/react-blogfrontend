import React from 'react'
import Posts from './admin/Posts'
import axiosInstance from './axios'

function Admin() {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        axiosInstance.get().then(res => res.json)
        .then(data => setPosts(data))
    }, [posts])

  return (
    <div>
      <Posts posts={posts} />
    </div>
  )
}

export default Admin
