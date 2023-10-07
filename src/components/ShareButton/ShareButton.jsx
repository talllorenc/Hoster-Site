"use client";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ShareButton = () => {
  const { mode } = useContext(ThemeContext);
  const imgSend =
    mode === "light"
      ? "/solution_done/send_black.png"
      : "/solution_done/send_white.png";

      const copyToClipboard = () => {
        const currentURL = window.location.href;
    
        navigator.clipboard.writeText(currentURL).then(
          () => {
            alert("URL скопирован в буфер обмена");
          },
          (error) => {
            console.error("Не удалось скопировать URL: ", error);
          }
        );
      };
      
  return (
    <div className="flex items-center text-[16px] cursor-pointer border p-2 rounded-lg hover:bg-[#22c55e]">
      <button onClick={copyToClipboard}>Поделиться</button>
      <Image
        alt="share"
        width={16}
        height={16}
        src={imgSend}
        className="h-[16px] ml-[5px]"
      />
    </div>
  );
};

export default ShareButton;
