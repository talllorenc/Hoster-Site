import React, { useState, useEffect } from "react";
import useAuth from "@/app/login/useAuthTokenHook";
import Link from "next/link";

const FavoritePosts = () => {
  const { userId } = useAuth();
  const [favoritePosts, setFavoritePosts] = useState([]);
  useEffect(() => {
    if (userId) {
      fetch(`http://138.197.112.193:3000/api/get_favorite?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setFavoritePosts(data.favoritePosts);
        })
        .catch((error) => {
          console.error("Ошибка при получении избранных постов:", error);
        });
    }
  }, [userId]);

  const handleRemoveFromFavorites = async (postId) => {
    try {
      const response = await fetch(`http://138.197.112.193:3000/api/remove_favorite?userId=${userId}&postId=${postId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка при удалении из избранного. Код: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        
        setFavoritePosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      } else {
        console.error("Ошибка при удалении из избранного");
      }
    } catch (error) {
      console.error("Ошибка при удалении из избранного:", error);
    }
  };
  

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200 bg-[#1c1b1b]">
        {favoritePosts && favoritePosts.length > 0 ? (
          favoritePosts.map((item) => {
            const createdAtDate = new Date(item.createdAt);
            const day = createdAtDate.getDate();
            const month = createdAtDate.getMonth() + 1;
            const year = createdAtDate.getFullYear();
            const formattedCreatedAt = `${day}/${month}/${year}`;
            return (
              <div key={item._id}>
                <li>
                  <Link href={`posts_page/${item._id}`}>
                    <div className="flex flex-col block hover:bg-[#3c3b3b] flex px-4 py-4 sm:px-6">
                      <div className="">
                        <div className="flex flex-col min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div className="flex flex-col ">
                            <p className="font-medium text-[#0284c7] text-lg">
                              {item.title}
                            </p>
                            <p className="font-normal text-sm text-gray-300">
                              {item.decs}
                            </p>
                          </div>

                          <div className="flex items-center flex-col text-sm text-gray-500 mt-[20px] text-center">
                            <p>Решение добавлено {formattedCreatedAt}</p>
                            <p>
                              Разработчик решения -{" "}
                              <span className="font-bold">{item.author}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <div className="flex items-center justify-center">
                  <span onClick={() => handleRemoveFromFavorites(item._id)} className="text-white py-2 px-6 rounded-lg bg-red-500 cursor-pointer mb-[10px] hover:bg-red-700">Удалить</span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white px-4 py-4">Нет избранных постов</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritePosts;
