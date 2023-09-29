"use client";
import { useState } from "react";

const PopUp = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
      onClose(); 
    };

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            setIsVisible(false);
          onClose();
        }
      };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-zinc-200 rounded-lg shadow-md p-4">
            <div className="text-center text-black">
              <h2 className="font-bold mb-[10px]">{message}</h2>
              <div className="text-white flex items-center justify-center gap-[20px]">
                <button
                  className="bg-red-500 px-[15px] py-[8px] cursor-pointer rounded"
                  onClick={handleClose} 
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
