import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    console.log(isAuth, "isAuth");

    if (!isAuth) {
      
      navigate('/login');
    }
  }, [navigate]);

  return children;
};
