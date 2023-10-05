"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LeftMenuInfo from "../LeftMenuInfo/LeftMenuInfo";
import Leaderboard from "../Leaderboard/Leaderboard";

const links = [
  {
    id: 1,
    title: "Готовые решения",
    url: "/posts_page",
  },
  {
    id: 2,
    title: "Полезные сервисы",
    url: "/services",
  },
  {
    id: 3,
    title: "Проектная документация",
    url: "/documentation",
  },
];

const LeftMenu = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);


  return (
    <div className="hidden md:flex flex-col w-[300px] p-2 ">
      <Link
        href={"/"}
        className="font-bold text-[22px] border-b border-[#A1A1A1]"
      >
        <div className="flex items-center pb-[15px]">
          <Image
            src="/main-logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="mr-[8px] rotate-image transition-transform"
          />
          <span className="font-light">HOSTER</span>
          <span className="text-red-500">dev</span>
        </div>
      </Link>
      <div className="pt-[15px]">
        <h1 className="font-bold pb-[15px]">Решения</h1>
        {links.map((link) => (
          <Link
            className="text-[#A1A1A1] whitespace-nowrap hover:text-black dark:hover:text-white"
            key={link.id}
            href={link.url}
            onMouseEnter={() => setHoveredLinkId(link.id)}
            onMouseLeave={() => setHoveredLinkId(null)}
          >
            <div className="flex justify-between items-center pb-[15px]">
              {link.title}
              <Image
                className="h-[10px]"
                src={
                  hoveredLinkId === link.id
                    ? "/LeftMenu/arrow.png"
                    : "/LeftMenu/arrow_grey.png"
                }
                width={10}
                height={10}
                alt="logo"
              />
            </div>
          </Link>
        ))}
      </div>
      <LeftMenuInfo/>
      <Leaderboard/>
    </div>
  );
};

export default LeftMenu;
