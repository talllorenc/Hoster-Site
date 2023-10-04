import Link from "next/link";
import Image from "next/image";
import useAuth from "@/app/login/useAuthTokenHook";
import { useState, useEffect } from "react";
const UserProfile = () => {
  const { logout, userId, user } = useAuth();

  return (
    <div>
      <div className="flex justify-between items-center mb-[20px]">
        <div className="flex items-center xs:mb-[10px]">
          {user && (
            <>
              <img src={user.photoUrl} alt="profile photo" className="w-[90px] h-[90px] rounded-full"/>
            </>
          )}
          <div className="flex flex-col ml-[20px]">
            <span className="font-bold  xs:text-[16px] in:text-[17px] md:text-[20px] lg:text-[28px]">
              {user && <>{user.developerName}</>}
            </span>
            <span className="xs:text-[16px] in:text-[17px] md:text-[18px] lg:text-[24px]">
              {user && <>{user.position}</>}
            </span>
          </div>
        </div>
        <div className="hidden cursor-pointer in:flex gap-[15px]">
          <Link
            href="/feedback"
            className="px-[16px] py-[8px] bg-[#0260C7] rounded-lg text-white font-bold"
          >
            Задать вопрос
          </Link>
          <span
            onClick={logout}
            className="px-[16px] py-[8px] bg-red-500 rounded-lg text-white font-bold"
          >
            Выйти
          </span>
        </div>
      </div>
      <div className="cursor-pointer  flex justify-center gap-[15px] mb-[20px] in:hidden">
        <Link
          href="/feedback"
          className="px-[16px] py-[8px] bg-[#0260C7] rounded-lg text-white font-bold"
        >
          Задать вопрос
        </Link>
        <span
          onClick={logout}
          className="px-[16px] py-[8px] bg-red-500 rounded-lg text-white font-bold"
        >
          Выйти
        </span>
      </div>
      <div className=" bg-[#1c1b1b] rounded-xl">
        <div className="border-b p-[24px] ">
          <h1 className="font-bold text-[21px] text-white xs:text-[18px]">
            Профиль разработчика
          </h1>
        </div>
        <div className="flex justify-between  max-w-[800px] xs:p-[10px] md:p-[24px]">
          <div className="flex flex-col gap-[50px]">
            {" "}
            <div className="flex flex-col">
              <span className="text-[#0280C7] font-bold text-[17px] text-white">
                Должность
              </span>
              <span className="text-[15px] text-white">
                {user && <>{user.position}</>}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0280C7] font-bold text-[17px] text-white">
                Внутренний телефон
              </span>
              <span className="text-[15px] text-white">
                {user && <>{user.tel}</>}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[50px]">
            {" "}
            <div className="flex flex-col">
              <span className="text-[#0280C7] font-bold text-[17px] text-white">
                Решений опубликовано
              </span>
              <span className="text-[15px] text-white">
                {user && <>{user.postCount}</>}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0280C7] font-bold text-[17px] text-white ">
                Избранных решений
              </span>
              <span className="text-[15px] text-white ">
                {user && (
                  <>{user.favoritePosts ? user.favoritePosts.length : "0"}</>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
