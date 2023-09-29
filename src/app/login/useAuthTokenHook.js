import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
 
    if (token) {
      const decodeToken = jwt_decode(token)
      const {userId} = decodeToken
      setAuthenticated(true);
      setToken(token)
      setUserId(userId)
    } else {
      setAuthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);
    window.location.href = "/";
  };

  return { authenticated, logout, token, userId };
};

export default useAuth;
