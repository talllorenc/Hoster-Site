"use client";

import Image from "next/image";
import { useState } from "react";

const Feedback = () => {
  const [feedbackInfo, setFeedbackInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackInfo({ ...feedbackInfo, [name]: value });
  };

  const handleOnSumbit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackInfo),
        });
  
        if (response.status === 200) {
          alert("Email успешно отправлен!");
          setFeedbackInfo({ name: "", email: "", message: "" });
        } else {
          alert("Произошла ошибка при отправке email.");
        }
      } catch (error) {
        console.error(error);
        alert("Произошла ошибка при отправке email.");
      }
  };

  return (
    <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md space-y-8">
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
            Задайте интересующий вас вопрос
          </h2>
        </div>
        <form onSubmit={handleOnSumbit} className="" method="POST">
          <div>
            <input
              className="block w-full rounded-lg appearance-none mb-[10px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              id="name"
              name="name"
              placeholder="Ваше имя"
              onChange={handleChange}
              value={feedbackInfo.name}
              required
            />
          </div>
          <div>
            <input
              className="block w-full rounded-lg appearance-none mb-[10px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={feedbackInfo.email}
              required
            />
          </div>
          <div>
            <textarea
              className="block w-full rounded-lg appearance-none mb-[10px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="message"
              name="message"
              placeholder="Ваш вопрос или предложение"
              onChange={handleChange}
              value={feedbackInfo.message}
              required
            ></textarea>
          </div>
          <button
            className="flex w-full justify-center rounded-md border border-transparent bg-[#0260C7] py-2 px-4 text-sm font-medium text-white hover:bg-[#0270C7] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
