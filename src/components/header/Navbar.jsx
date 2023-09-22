"use client";

import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import useAuth from "@/app/login/useAuthTokenHook";

const developerName = typeof window !== "undefined" ? localStorage.getItem("developerName") : null;
const authToken = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

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
];

// if (authToken) {
//   console.log("Token allow:", authToken);
// } else {
//   console.log("Token undefined");
// }

const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  const { authenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Вызовите метод logout для выхода из системы
    logout();
  };

  const textClass = mode === "light" ? "text-zinc-100" : "text-zinc-950";
  const backgroundClass = mode === "light" ? "bg-zinc-950" : "bg-zinc-300";

  return (
    <nav
      className={`flex justify-between items-center px-[20px] py-[1px] bg-neutral-300 w-full ${backgroundClass}`}
    >
      <Link href={"/"} className="font-bold text-[22px]">
        <div className="flex items-center ">
          <Image
            src="/main-logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="mr-[8px] rotate-image transition-transform"
          />
          <span className={`font-light ${textClass} xs:hidden in:block`}>
            HOSTER
          </span>
          <span className="text-red-500 xs:hidden in:block">dev</span>
        </div>
      </Link>
      <div className="hidden text-zinc-950 text-[20px] flex items-center gap-[20px] md:flex">
        {links.map((link) => (
          <Link
            className={`px-[3px] py-[4px] rounded hover:bg-zinc-400 transition-all duration-300 ease-out ${textClass}`}
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
        {!authenticated && (
          <Link href="/login">
            <button className=" px-[5px] py-[2px] bg-[#0074CC] text-white rounded cursor-pointer hover:bg-[#0050CC] ml-[20px]">
              Войти
            </button>
          </Link>
        )}
        {authenticated && (
          <span className={`ml-[20px] text-[16px] text-black ${textClass}`}>
            {developerName}
          </span>
        )}
        {authenticated && (
          <button
            onClick={handleLogout}
            className=" px-[5px] py-[2px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600 ml-[20px]"
          >
            Выход
          </button>
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
          <div className="md:hidden absolute top-0 right-0 mt-[36px] w-48 bg-zinc-500 rounded shadow-lg z-10">
            <ul className="py-4">
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
