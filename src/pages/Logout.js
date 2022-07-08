import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axios';
import { POST } from '../utils/axiosRequests';

let Logout = () => {
  let navigate = useNavigate();

  React.useEffect(() => {
    let logoutUser = async () => {
      try {
        await POST('users/logout/', {
          refresh_token: localStorage.getItem('refresh_token')
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/login');
      } catch (err) {
        console.log(err.message);
      }
    };
    logoutUser();
  }, []);
  return <div></div>;
};

export default Logout;
