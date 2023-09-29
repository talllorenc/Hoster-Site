import React, { useState, useEffect } from "react";
import useAuth from "@/app/login/useAuthTokenHook";
import Link from "next/link";

const FavoritePosts = () => {
  const { userId } = useAuth();
  const [favoritePosts, setFavoritePosts] = useState([]);
  useEffect(() => {
    if (userId) {
      // Выполняем запрос к серверу для получения избранных постов
      fetch(`http://localhost:8080/api/get_favorite?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setFavoritePosts(data.favoritePosts);
        })
        .catch((error) => {
          console.error("Ошибка при получении избранных постов:", error);
        });
    }
  }, [userId]);


  return (
<div>
  <ul role="list" className="divide-y divide-gray-200">
    {favoritePosts && favoritePosts.length > 0 ? (
      favoritePosts.map((item) => {
        const createdAtDate = new Date(item.createdAt);
        const day = createdAtDate.getDate();
        const month = createdAtDate.getMonth() + 1;
        const year = createdAtDate.getFullYear();
        const formattedCreatedAt = `${day}/${month}/${year}`;
        return (
          <li key={item._id}>
            <Link href={`posts_page/${item._id}`}>
              <div className="flex flex-col block hover:bg-zinc-600 flex px-4 py-4 sm:px-6">
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

                    <div className="flex items-center flex-col text-sm text-gray-500 mt-[20px]">
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
        );
      })
    ) : (
      <p>Нет избранных постов</p>
    )}
  </ul>
</div>

  );
};

export default FavoritePosts;

