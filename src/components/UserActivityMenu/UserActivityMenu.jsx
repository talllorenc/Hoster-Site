import { useState } from "react";
import FavoritePosts from "@/components/FavoritePosts/FavoritePosts";
import AddedPosts from "@/components/AddedPosts/AddedPosts";
import Image from "next/image";

const UserActivityMenu = () => {
  const [activeComponent, setActiveComponent] = useState(""); // Стартовый активный компонент

  const handleClickFavorite = () => {
    setActiveComponent("favorite");
  };

  const handleClickAdded = () => {
    setActiveComponent("added");
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between ">
        <div
          className={`flex  items-center justify-center gap-[5px] w-[50%] border-r border-white pr-[24px] p-[24px] hover:bg-[#2c2b2b] cursor-pointer ${
            activeComponent === "favorite" ? "bg-[#2c2b2b]" : ""
          }`}
          onClick={handleClickFavorite}
        >   
            <Image src="/UserActivityMenu/heart.png" width={35} height={35} alt="favorite"/>
          <span className="text-[18px]">Избранные решения</span>
        </div>
        <div
          className={`flex  items-center justify-center gap-[5px] w-[50%] p-[24px] hover:bg-[#2c2b2b] cursor-pointer ${
            activeComponent === "added" ? "bg-[#2c2b2b]" : ""
          }`}
          onClick={handleClickAdded}
        >
            <Image src="/UserActivityMenu/added.png" width={35} height={35} alt="added"/>
          <span className="text-[18px]">Добавленные решения</span>
        </div>
      </div>
      {activeComponent === "favorite" && <FavoritePosts />}
      {activeComponent === "added" && <AddedPosts />}
    </div>
  );
};

export default UserActivityMenu;
