import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodeToken = jwt_decode(token);
      const { userId } = decodeToken;
      setAuthenticated(true);
      setToken(token);
      setUserId(userId);

      fetchUserData(userId);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        console.error("Ошибка при запросе информации о пользователе");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };
  
  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);
    window.location.href = "/";
  };

  return { authenticated, logout, token, userId, user };
};

export default useAuth;
