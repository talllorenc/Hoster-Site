"use client"

import Link from "next/link"
import Image from "next/image"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const links = [
    {
        id: 1,
        title: "О нас",
        url: "/about"
    },
    {
        id: 2,
        title: "Решения",
        url: "/solutions"
    },
    {
        id: 3,
        title: "Разработчики",
        url: "/developers"
    },
]

const Navbar = () => {
    const { mode } = useContext(ThemeContext);


    const textClass = mode === "light" ? "text-zinc-100" : "text-zinc-950";
    const backgroundClass = mode === "light" ? "bg-zinc-950" : "bg-zinc-300";

  return (
        <nav className={`flex justify-between items-center px-[20px] py-[1px] bg-neutral-300 w-full ${backgroundClass}`}>
            <Link href={"/"} className="font-bold text-[22px]">
                <div className="flex items-center ">
                    <Image src="/main-logo.svg" width={30} height={30} alt="logo" className="mr-[8px] rotate-image transition-transform"/>
                    <span className={`font-light ${textClass}`}>HOSTER</span>
                    <span className="text-red-500">dev</span>
                </div>
            </Link>
            <div className="hidden text-zinc-950 text-[20px] flex items-center gap-[20px] md:flex">
                {links.map((link)=>(
                    <Link className={`px-[3px] py-[4px] rounded hover:bg-zinc-400 transition-all duration-300 ease-out ${textClass}`} key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
            <div className="flex">
                <DarkModeToggle/>
                <button className=" px-[5px] py-[2px] bg-[#0074CC] text-white rounded cursor-pointer hover:bg-[#0050CC] ml-[20px]">Войти</button>
            </div>


        </nav>
    )
}

export default Navbar