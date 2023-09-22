import { useEffect, useState } from "react";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);

    window.location.reload();
  };

  return { authenticated, logout }; 
};

export default useAuth;
