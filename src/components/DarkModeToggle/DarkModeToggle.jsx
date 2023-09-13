import { useContext } from "react"
import styles from "./darkModeToggle.module.css"
import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"


const DarkModeToggle = () => {
    // const mode = "light"
    const {toggle, mode} = useContext(ThemeContext)

    const ballColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-900";
    const ballBorder = mode === "light" ? "border-zinc-100" : "border-zinc-900";
    
  return (
    <div className={`w-[50px] h-[30px] border border-[1.5px] border-[#53c28b70] rounded-[20px] flex items-center justify-between relative cursor-pointer ${ballBorder}`} onClick={toggle}>
        <div className="text-[18px] text-black"><Image className="ml-[3px]" src="/месяц для переключателя.png" width={18} height={18} alt="месяц"/></div>
        <div className="text-[18px]"><Image className="mr-[3px]" src="/солнце для переключателя.png" width={18} height={18} alt="месяц"/></div>
        <div className={`w-[22px] h-[22px] bg-[#53c28b] rounded-full absolute ${ballColor}`} style={mode === "light" ? {left: "2px"} : {right: "2px"}}></div>
    </div>
  )
}

export default DarkModeToggle