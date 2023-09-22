"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Готовые решения",
    url: "/done_solutions",
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
  const { mode } = useContext(ThemeContext);

  const textClass = mode === "light" ? "text-[#a1a1a1]" : "text-[#a1a1a1]";

  return (
    <div className="flex flex-col w-[300px]">
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
            className={`text-[#A1A1A1] whitespace-nowrap hover:text-white ${
              mode === "light" ? "hover:text-black" : ""
            }`}
            key={link.id}
            href={link.url}
            onMouseEnter={() => setHoveredLinkId(link.id)}
            onMouseLeave={() => setHoveredLinkId(null)}
          >
            <div className="flex justify-between items-center pb-[15px]">
              {link.title}
              <Image
                className={`h-[10px] ${
                  mode === "light" ? "filter grayscale" : ""
                }`}
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
    </div>
  );
};

export default LeftMenu;
