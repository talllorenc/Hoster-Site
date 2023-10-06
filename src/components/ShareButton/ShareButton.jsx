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
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(window.location.toString())
        .then(() => {
          alert("Ссылка скопирована в буфер обмена");
        })
        .catch((error) => {
          console.error("Ошибка при копировании ссылки:", error);
        });
    }
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
