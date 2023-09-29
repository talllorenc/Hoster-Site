import React from "react";
import Link from "next/link";

const LoginPopUp = ({ onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleClickOutside}
      className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center z-50"
    >
      <div className="bg-zinc-200 rounded-lg shadow-md p-4">
        <div className="text-center text-black">
          <h2 className="font-bold mb-[10px]">
            Войдите в аккаунт чтобы добавить решение в избранное
          </h2>
          <div className="text-white flex items-center justify-center gap-[20px]">
            <Link href="/login">
              <button className=" px-[15px] py-[8px] bg-[#0074CC] rounded cursor-pointer hover:bg-[#0050CC] ml-[20px]">
                Войти
              </button>
            </Link>
            <button
              className="bg-red-500 px-[15px] py-[8px] cursor-pointer rounded "
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
