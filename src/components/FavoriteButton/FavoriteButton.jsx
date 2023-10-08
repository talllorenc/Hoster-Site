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
  const imgFavorite =
    mode === "light"
      ? "/solution_done/heart_black.png"
      : "/solution_done/heart_white.png";
  const { authenticated, userId } = useAuth();

  const [isAdded, setIsAdded] = useState(false);
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

        const response = await fetch(
          "https://server.hoster-dev.kz/api/add_favorite_post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId, userId }),
          }
        );

        if (response.ok) {
          setIsAdded(true);
          setTimeout(() => {
            setIsAdded(false);
          }, 2000);
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
      {errorMessage && <PopUp message={errorMessage} onClose={closePopUp} />}
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
      {isAdded && (
        <div className="fixed flex items-center justify-between top-0 left-0 right-0 bg-rose-500 h-[50px] p-3 ">
          <div className="flex">
            <Image
              src="/solution_done/heart_black.png"
              width={30}
              height={20}
              alt="copyed"
            />
            <span className="text-black text-2xl">В избранном</span>
          </div>

          <button className="text-black" onClick={closePopUp}>
            <Image
              src="/close_black.png"
              width={15}
              height={15}
              alt="close btn"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoriteButton;
