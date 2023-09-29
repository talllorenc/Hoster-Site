"use client"

import Image from "next/image";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import useAuth from "../login/useAuthTokenHook";
import Link from "next/link";
import FavoritePosts from "@/components/FavoritePosts/FavoritePosts";

const UserProfile = () => {
  const { authenticated, logout } = useAuth();

  return (
    <div className="flex justify-center max-w-[1350px] mx-auto p-[16px]">
      {authenticated ? (
        <>
          <LeftMenu />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-[20px]">
              <div className="flex items-center">
                <Image
                  src="/developers/Александр.png"
                  width={90}
                  height={90}
                  className="rounded-full"
                />
                <div className="flex flex-col ml-[20px]">
                  <span className="font-bold text-[32px]">
                    11111
                  </span>
                  <span className="text-[20px]">1111</span>
                </div>
              </div>
              <div className="cursor-pointer flex gap-[15px]" >
                <Link href="/feedback" className="px-[16px] py-[8px] bg-[#0260C7] rounded-lg text-white font-bold">
                  Задать вопрос
                </Link>
                <span onClick={logout} className="px-[16px] py-[8px] bg-red-500 rounded-lg text-white font-bold">
                  Выйти
                </span>
              </div>
            </div>

            <div className=" bg-[#27272a] rounded-xl">
              <div className="border-b p-[24px]">
                <h1 className="font-bold text-[21px] text-white">Профиль разработчика</h1>
              </div>
              <div className="flex justify-between p-[24px] max-w-[800px]">
                <div className="flex flex-col gap-[50px]">
                  {" "}
                  <div className="flex flex-col">
                    <span className="text-[#0284C7] font-bold text-[17px] text-white">
                      Должность
                    </span>
                    <span className="text-[15px] text-white">11111</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0284C7] font-bold text-[17px] text-white">
                      Внутренний телефон
                    </span>
                    <span className="text-[15px] text-white">11111</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[50px]">
                  {" "}
                  <div className="flex flex-col">
                    <span className="text-[#0284C7] font-bold text-[17px] text-white">
                      Решений опубликовано
                    </span>
                    <span className="text-[15px] text-white">11111</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0284C7] font-bold text-[17px] text-white">
                      Избранных решений
                    </span>
                    <span className="text-[15px] text-white ">
                        11111
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-zinc-800 shadow mt-[20px]">
              <h2 className="font-bold text-[21px] p-[24px] border-b">
                Избранные решения
              </h2>
              <FavoritePosts/>
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
              <span className="text-[20px] cursor-pointer bg-[#0074CC] px-[20px] py-[5px] rounded-lg hover:bg-[#0050CC]">Войти</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
