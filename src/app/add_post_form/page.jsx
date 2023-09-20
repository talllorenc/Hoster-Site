"use client";
import React, { useState } from "react";

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    decs: "",
    content: "",
    author: "",
  });

  const [postCreated, setPostCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/add_post", {
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
          author: "",
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
      <h1 className="text-[30px] font-bold py-[50px]">Добавить свое решение</h1>
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
          <div className="flex flex-col">
            <span className="text-[18px] font-bold pb-[10px]">
              Разработчик решения
            </span>
            <input
              type="text"
              name="author"
              className="w-full p-[6px] bg-[#2d2d2d] text-white rounded-lg border-2 border-[#4a4a4a] focus:border-[#ff9900] focus:outline-none"
              required
              value={formData.author}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
