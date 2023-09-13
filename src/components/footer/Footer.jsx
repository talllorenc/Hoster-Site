"use client"

import Image from "next/image"

const Footer = () => {
  return (
    <footer className="h-100 flex bg-neutral-600 justify-between items-center px-[20px] py-[10px]">
      <div>&copy; 2023 Created by Tall Lorenc </div>
      <div className=" flex items-center gap-[10px] ">
        <Image className="opacity-80 cursor-pointer" src='/vk.png' width={23} height={23} alt="vkontakte" />
        <Image className="opacity-80 cursor-pointer" src='/inst.png' width={23} height={23} alt="instagram" />
        <Image className="opacity-80 cursor-pointer" src='/twitter.png' width={23} height={23} alt="twitter" />
        <Image className="opacity-80 cursor-pointer" src='/yt.png' width={23} height={23} alt="youtube" />
      </div>
    </footer>
  )
}

export default Footer