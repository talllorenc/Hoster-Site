"use client";

import { useState } from "react";
import useAuth from "../login/useAuthTokenHook";
import Image from "next/image";

const developerName =
  typeof window !== "undefined" ? localStorage.getItem("developerName") : null;

const AddPostForm = () => {
  const { authenticated } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    decs: "",
    content: "",
    author: developerName,
  });

  const [postCreated, setPostCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://138.197.112.193:3000/api/add_post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          title: "",
          decs: "",
          content: "",
        });

        setPostCreated(true);
        // Обработайте успешный ответ, например, показывая сообщение об успешном создании поста
        console.log("Пост успешно создан!");
      } else {
        // Обработайте ошибку, например, показывая сообщение об ошибке
        console.error("Ошибка при создании поста");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  return (
    <div className="flex justify-center flex-col max-w-[900px] mx-auto">
      {authenticated ? (
        <>
          <h1 className="text-[30px] font-bold py-[50px]">
            Добавить свое решение
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col bg-[#2d2d2d] p-[24px] rounded-lg mb-[50px]">
              <span className="text-[18px] font-bold pb-[10px]">Заголовок</span>{" "}
              <input
                className="w-full p-[6px] bg-[#2d2d2d] text-white  rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
                type="text"
                name="title"
                required
                placeholder="Как подключить SMS сервис"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col bg-[#2d2d2d] p-[24px] rounded-lg mb-[30px]">
              <span className="text-[18px] font-bold pb-[10px]">
                Краткое описание решения
              </span>{" "}
              <input
                className="w-full p-[6px] bg-[#2d2d2d] text-white rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
                type="text"
                name="decs"
                placeholder="Скрипт для подключения SMS центра"
                required
                value={formData.decs}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col bg-[#2d2d2d] p-[24px] rounded-lg mb-[30px]">
              <span className="text-[18px] font-bold pb-[10px]">
                Детальное решение
              </span>{" "}
              <textarea
                className="w-full min-h-[300px] p-[6px] bg-[#2d2d2d] text-white rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
                name="content"
                required
                placeholder="Ваш код или совет как решить указанную выше проблему. !!!На данный момент нет возможности редактирования текста, добавления блоков с кодом, данный функционал пока в разработке!"
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-between  p-[24px] rounded-lg mb-[30px]">
              <button
                className="bg-green-500 font-bold rounded-lg hover:bg-green-600 text-[20px] px-[15px]"
                type="submit"
              >
                Создать пост
              </button>
              {/* Отображаем блок после успешного создания поста */}
              {postCreated && (
                <div className="text-green-500 text-[20px] font-bold flex items-center justify-center rounded-md ">
                  <div className="text-center">
                    <p>Ваше решение добавлено,</p>
                    <p>спасибо за ваш труд!</p>
                  </div>
                  {/* Дополнительный контент после успешного создания поста */}
                </div>
              )}
              <div className="flex flex-col items-center">
                <span className="text-[18px] font-bold pb-[10px]">
                  Разработчик решения
                </span>
                <span className={`ml-[20px] text-[16px]`}>{developerName}</span>
              </div>
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col gap-[10px] items-center justify-center h-screen">
                  <div className="text-center">
        <Image className="mx-auto w-auto" src="/main-logo.svg" width={70} height={70} alt="logo" />
        <span className="text-[25px]">
            HOSTER<span className="font-bold text-red-500">dev</span>
          </span>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-white">
          Пожалуйста, авторизуйтесь, чтобы добавить решение
          </h2>

        </div>
        </div>
      )}
    </div>
  );
};

export default AddPostForm;
