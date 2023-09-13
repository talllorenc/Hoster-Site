"use client";

import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "../../public/hoster.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const { mode } = useContext(ThemeContext);

  const backgroundClass =
    mode === "light"
      ? "bg-[url(/main-page-light.png)] theme"
      : "bg-[url(/main-page.png)] theme";

  return (
    <div
      className={`flex ${backgroundClass} bg-no-repeat bg-center bg-cover h-screen`}
    >
      <main className=" flex items-center gap-[100px] max-w-[1600px] mx-auto py-[0] px-[15px] box-content xs:justify-center">
        <div className="flex items-center justify-between">
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center md:flex md:justify-start md:items-center">
            {/* Заголовки */}
            <div className="in:text-center xs:mb-[20px] in:mb-[20px] md:mb-[20px] lg:mb-[20px]">
              <span className="text-5xl xs:text-2xl in:text-[35px] md:text-[40px] lg:text-[50px]">
                HOSTER{" "}
              </span>
              <span className="text-5xl xs:text-2xl font-bold text-red-500 in:text-[35px] md:text-[40px] lg:text-[50px]">
                forDevelopers
              </span>
            </div>

            {/* Кнопка (оставляю ее здесь для примера) */}
            <Button url="/solutions" text="Готовые решения" />
          </div>
        </div>
      </main>
    </div>
  );
}
