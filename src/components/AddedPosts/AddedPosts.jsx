import React, { useState, useEffect } from "react";
import useAuth from "@/app/login/useAuthTokenHook";
import Link from "next/link";
import jwt_decode from "jwt-decode";

const AddedPosts = () => {
  const { userId } = useAuth();
  const [addedPosts, setAddedPosts] = useState([]);
  useEffect(() => {
    if (userId !== null) {
      fetch(`http://localhost:8080/api/get_users_posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setAddedPosts(data.addedPosts);
        })
        .catch((error) => {
          console.error("Ошибка при получении избранных постов:", error);
        });
    }
  }, [userId]);

  const handleRemoveFromAdded = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/remove_added_post?userId=${userId}&postId=${postId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка при удалении из избранного. Код: ${response.status}`
        );
      }

      const data = await response.json();
      if (data.success) {
        setAddedPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
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
        {addedPosts && addedPosts.length > 0 ? (
          addedPosts.map((item) => {
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
                        <div className="flex justify-between min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div className="flex flex-col ">
                            <p className="font-medium text-[#0284c7] text-lg">
                              {item.title}
                            </p>
                            <p className="font-normal text-sm text-gray-300">
                              {item.decs}
                            </p>
                            <p className="text-sm text-gray-500">
                              Решение добавлено {formattedCreatedAt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <div className="flex items-center justify-center gap-[8px]">
                  <button className="text-white py-2 px-2 rounded-lg bg-[#0260c7] cursor-pointer mb-[10px] hover:bg-[#0240c7]">
                    Изменить
                  </button>
                  <button
                    onClick={() => handleRemoveFromAdded(item._id)}
                    className="text-white py-2 px-2 rounded-lg bg-red-500 cursor-pointer mb-[10px] hover:bg-red-700"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white px-4 py-4">Вы не добавли ни одного поста</p>
        )}
      </ul>
    </div>
  );
};

export default AddedPosts;
