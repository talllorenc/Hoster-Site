"use client";

import { useState } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleOnSumbit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://138.197.112.193:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, developerName } = data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("username", loginInfo.username);
        localStorage.setItem("developerName", developerName);

        if (typeof window !== 'undefined') {
          window.location.href = "/";
        }

        console.log("Вход выполнен успешно!");
      } else {
        console.error("Ошибка входа");
      }
    } catch (error) {
      console.error("Ошибка отправки данных на сервер", error);
    }
  };

  return (
    <div>
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
              Войдите в аккаунт
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleOnSumbit}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginInfo.username}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Логин"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Пароль"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
