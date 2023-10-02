"use client";

import Image from "next/image";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import useAuth from "@/app/login/useAuthTokenHook";
import FavoritePosts from "@/components/FavoritePosts/FavoritePosts";
import UserProfileInfo from "@/components/UserProfile/UserProfile";

const UserProfile = () => {
  const { authenticated } = useAuth();

  return (
    <div className="flex justify-center max-w-[1350px] mx-auto p-[16px]">
      {authenticated ? (
        <>
          <LeftMenu />
          <div className="flex-1">
          <UserProfileInfo/>

            <div className="overflow-hidden rounded-lg bg-zinc-800 shadow mt-[20px]">
              <h2 className="font-bold text-[21px] p-[24px] border-b text-white xs:text-[18px]">
                Избранные решения
              </h2>
              <FavoritePosts />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-[10px] items-center justify-center h-screen">
          <div className="text-center">
            <Image
              className="mx-auto w-auto"
              src="/main-logo.svg"
              width={70}
              height={70}
              alt="logo"
            />
            <span className="text-[25px]">
              HOSTER<span className="font-bold text-red-500">dev</span>
            </span>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-white">
              Пожалуйста, авторизуйтесь, чтобы воспользоваться личным кабинетом
            </h2>
            <div className="mt-[20px]">
              <span className="text-[20px] cursor-pointer bg-[#0074CC] px-[20px] py-[5px] rounded-lg hover:bg-[#0050CC]">
                Войти
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
