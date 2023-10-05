"use client";

import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import useAuth from "@/app/login/useAuthTokenHook";

const links = [
  {
    id: 1,
    title: "О нас",
    url: "/about",
  },
  {
    id: 2,
    title: "Решения",
    url: "/solutions",
  },
  {
    id: 3,
    title: "Разработчики",
    url: "/developers",
  },
  // {
  //   id: 4,
  //   title: "Образная связь",
  //   url: "/feedback",
  // },
];

const Navbar = () => {
  /***************************ПРОВЕРКА ТОКЕНА НА ВРЕМЯ*******************************/
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedToken = jwt_decode(token);
      const { exp } = decodedToken;

      const currentTime = Date.now() / 1000;
      const timeUntilExpiration = exp - currentTime;

      if (timeUntilExpiration <= 0) {
        localStorage.removeItem("authToken");
        router.push("/login");
      }
    }
  }, []);
  /***************************ПРОВЕРКА ТОКЕНА НА ВРЕМЯ*******************************/

  const { authenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center px-[20px] py-[1px] bg-zinc-950 w-full dark:bg-neutral-300">
        <Link href={"/"} className="font-bold text-[22px]">
          <div className="flex items-center ">
            <Image
              src="/main-logo.svg"
              width={30}
              height={30}
              alt="logo"
              className="mr-[8px] rotate-image transition-transform"
            />
            <span className="font-light text-white xs:hidden in:block dark:text-black">
              HOSTER
            </span>
            <span className="text-red-500 xs:hidden in:block">dev</span>
          </div>
        </Link>
        <div className="hidden text-zinc-950 text-[20px] flex items-center gap-[20px] md:flex ">
          {links.map((link) => (
            <Link
              className="px-[3px] py-[4px] text-white rounded hover:bg-zinc-400 transition-all duration-300 ease-out dark:text-black"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <DarkModeToggle />
          {authenticated && (
            <Link
              href="/user_profile"
              className="border border-rose-500 border-[2px] rounded-full ml-[15px] cursor-pointer"
            >
              {user && (
                <img
                  src={user.photoUrl}
                  alt=""
                  className="rounded-full w-[40px] h-[40px]"
                />
              )}
            </Link>
          )}
          {!authenticated && (
            <Link href="/login">
              <button className=" px-[5px] py-[2px] bg-[#0074CC] text-white rounded cursor-pointer hover:bg-[#0050CC] ml-[20px]">
                Войти
              </button>
            </Link>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 text-gray-700 rounded-md outline-none border focus:border-gray-400 focus:border ml-[20px]"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="md:hidden absolute top-0 right-0 mt-[46px] w-48 bg-zinc-500 rounded shadow-lg z-10">
              {/* <ul className="py-4">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
              <Link
                className="block px-4 py-2 text-white hover:bg-gray-200 font-bold"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-gray-200 font-bold"
                href="/solutions"
                onClick={() => setIsMenuOpen(false)}
              >
                Решения
              </Link>
              <div className="ml-[10px]">
                <Link
                  className="block px-4 py-2 text-white hover:bg-gray-200 text-zinc-300"
                  href="/posts_page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Готовые решения
                </Link>
                <Link
                  className="block px-4 py-2 text-white hover:bg-gray-200 text-zinc-300"
                  href="/solutions"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Полезные сервисы
                </Link>
                <Link
                  className="block px-4 py-2 text-white hover:bg-gray-200 text-zinc-300"
                  href="/solutions"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Проектная документация
                </Link>
              </div>
              <Link
                className="block px-4 py-2 text-white hover:bg-gray-200 font-bold"
                href="/developers"
                onClick={() => setIsMenuOpen(false)}
              >
                Разработчики
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-gray-200 font-bold"
                href="/feedback"
                onClick={() => setIsMenuOpen(false)}
              >
                Обратная связь
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
