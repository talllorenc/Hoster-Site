"use client";
import React from "react";
import Image from "next/image";

const ShareButton = () => {
    
    const copyToClipboard = () => {
        navigator.clipboard
          .writeText(window.location.toString())
          .then(() => {
            alert("Ссылка скопирована в буфер обмена");
          })
          .catch((error) => {
            console.error("Ошибка при копировании ссылки:", error);
          });
      };
  return (
    <div className="flex items-center text-[16px] cursor-pointer border p-2 rounded-lg hover:bg-[#22c55e]">
      <button onClick={copyToClipboard}>Поделиться</button>
      <Image
        alt="share"
        width={16}
        height={16}
        src="/solution_done/send_white.png"
        className="h-[16px] ml-[5px]"
      />
    </div>
  );
};

export default ShareButton;
