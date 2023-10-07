"use client";

import { useState } from "react";
import useAuth from "../login/useAuthTokenHook";
import Image from "next/image";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

const AddPostForm = () => {
  const { authenticated, user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    decs: "",
    content: "",
    author: user?.developerName || "",
  });
  const [data, setData] = useState();
  const [postCreated, setPostCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(
        "https://server.hoster-dev.kz/api/add_post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            title: formData.title,
            decs: formData.decs,
            content: data,
            author: user.developerName,
          }),
        }
      );

      if (response.ok) {
        setFormData({
          title: "",
          decs: "",
          content: "",
        });

        setPostCreated(true);
        console.log("Пост успешно создан!");
      } else {
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
            <div className="flex flex-col bg-[#1c1b1b] p-[24px] rounded-lg mb-[50px]">
              <span className="text-[18px] font-bold pb-[10px] text-white">
                Заголовок
              </span>{" "}
              <input
                className="w-full p-[6px] bg-[#1d1d1d] text-white  rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
                type="text"
                name="title"
                required
                placeholder="Как подключить SMS сервис"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col bg-[#1c1b1b] p-[24px] rounded-lg mb-[30px]">
              <span className="text-[18px] font-bold pb-[10px] text-white">
                Краткое описание решения
              </span>{" "}
              <input
                className="w-full p-[6px] bg-[#1d1d1d] text-white rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
                type="text"
                name="decs"
                placeholder="Скрипт для подключения SMS центра"
                required
                value={formData.decs}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col bg-[#1c1b1b] p-[24px] rounded-lg mb-[30px]">
              <span className="text-[18px] font-bold pb-[10px] text-white">
                Детальное решение
              </span>{" "}
              <Editor
                data={data}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>

            <div className="flex justify-between  p-[24px] rounded-lg mb-[30px]">
              <button
                className="bg-green-500 font-bold text-white rounded-lg hover:bg-green-600 text-[20px] px-[15px]"
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
                </div>
              )}
              {user && (
                <div className="flex flex-col items-center">
                  <span className="text-[18px] font-bold pb-[10px]">
                    Разработчик решения
                  </span>
                  <span className={`ml-[20px] text-[16px]`}>
                    {user.developerName}
                  </span>
                </div>
              )}
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col gap-[10px] items-center justify-center h-screen">
          <div className="text-center">
            <Image
              className="mx-auto w-auto"
              src="/main-logo.svg"
              width={70}
              height={70}
              alt="logo"
            />
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
