import Link from "next/link"
import Image from "next/image"

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
        title: "Документы",
        url: "/documents"
    },
    {
        id: 4,
        title: "Разработчики",
        url: "/developers"
    }
]

const Navbar = () => {
  return (
        <nav className="h-100 flex justify-between items-center px-[20px] py-[1px] bg-neutral-300 max-w-[1980px] mx-auto">
            <Link href={"/"} className="font-bold text-[22px]">
                <div className="flex items-center ">
                    <Image src="/main-logo.svg" width={30} height={30} alt="logo" className="mr-[8px] rotate-image transition-transform"/>
                    <span className="font-light text-zinc-950">HOSTER</span>
                    <span className="text-red-500">dev</span>
                </div>
            </Link>
            <div className="hidden text-zinc-950 text-[20px] flex items-center gap-[20px] md:flex">
                {links.map((link)=>(
                    <Link className="px-[3px] py-[4px] rounded hover:bg-zinc-400 transition-all duration-300 ease-out" key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
            <button className=" px-[5px] py-[2px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-800">Logout</button>

        </nav>
    )
}

export default Navbar