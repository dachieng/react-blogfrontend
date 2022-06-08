import React from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './axios';


function Logout() {
    let navigate = useNavigate()

    React.useEffect(() => {
        axiosInstance.post("users/logout/", {
            refresh_token:localStorage.getItem("refresh_token")
        });
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        axiosInstance.defaults.headers['Authorization'] = null
        navigate('/login')
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Logout
