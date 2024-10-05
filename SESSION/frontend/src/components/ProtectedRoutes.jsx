import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:8000/dashboard', { withCredentials: true })
      .then(response => {
        if (response.data.detail === 'Protected data') {
          setIsAuthenticated(true);
        }
      })
      .catch(error => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
