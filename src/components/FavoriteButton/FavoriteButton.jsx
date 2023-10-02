"use client";

import useAuth from "@/app/login/useAuthTokenHook";
import Image from "next/image";
import { useState } from "react";
import LoginPopUp from "../LoginPopUp/LoginPopUp";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import PopUp from "../PopUp/PopUp";

const FavoriteButton = (props) => {
  const { mode } = useContext(ThemeContext);
  const imgFavorite = mode === "light" ? "/solution_done/heart_black.png" : "/solution_done/heart_white.png";
  const { authenticated, userId } = useAuth();

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const closePopUp = () => {
    setShowLoginPopup(false);
  };

  const addToFavorite = async () => {
    if (authenticated) {
      try {
        const postId = props.postId; 
  
        const response = await fetch("http://138.197.112.193:3000/api/add_favorite_post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, userId }),
        });
  
        if (response.ok) {
          console.log("Пост добавлен в избранное");
        } else {
          console.error("Ошибка добавления в избранное");
          if (response.status === 400) {
            const responseData = await response.json();
            setErrorMessage(responseData.message);
          }
        }
      } catch (error) {
        console.error("Ошибка при запросе на сервер:", error);
      }
    } else {
      setShowLoginPopup(true);
    }
  };

  return (
    <div>
    {showLoginPopup && <LoginPopUp onClose={closeLoginPopup} />}
    {errorMessage && <PopUp message={errorMessage} onClose={closePopUp}/>}
    <div
      onClick={addToFavorite}
      className="flex items-center text-[16px] cursor-pointer border p-2 rounded-lg hover:bg-[#dc2626]"
    >
      Избранное
      <Image
        alt="share"
        width={20}
        height={20}
        src={imgFavorite}
        className="h-[20px] ml-[5px]"
      />
    </div>
  </div>
  );
};

export default FavoriteButton;
