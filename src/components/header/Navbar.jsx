"use client"

import Link from "next/link"
import Image from "next/image"
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About",
        url: "/about"
    },
    {
        id: 3,
        title: "Contacts",
        url: "/contacts"
    },
    {
        id: 4,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        id: 5,
        title: "Portfolio",
        url: "/portfolio"
    },
]

const Navbar = () => {
  return (
        <nav className="h-100 flex justify-between items-center px-[20px] py-[10px] max-w-[1980px] mx-auto">
            <Link href={"/"} className="font-bold text-[22px]">
                <div className="flex items-center ">
                    <Image src="/main-logo.svg" width={40} height={40} alt="logo" className="mr-[8px] rotate-image transition-transform"/>
                    <span className="font-light">HOSTER</span>
                    <span className="text-red-500">dev</span>
                </div>
            </Link>
            <div className="hidden flex items-center gap-[20px] md:flex">
                {links.map((link)=>(
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
                <button className=" px-[5px] py-[2px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-800" onClick={(()=> console.log('logout'))}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar