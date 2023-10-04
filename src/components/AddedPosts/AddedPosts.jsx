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
            </div>
          );
        })
      ) : (
        <p className="text-white px-4 py-4">Вы не добавли ни одного поста</p>
      )}
    </ul>
  </div>
  )
}

export default AddedPosts