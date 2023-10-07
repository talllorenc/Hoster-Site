"use client";
import { useState } from "react";
import Image from "next/image";

const RegisterForm = () => {
  const [regIngo, setRegInfo] = useState({
    username: "",
    password: "",
    developerName: "",
    position: "",
    tel: "",
    photoUrl: "",
  });
  const [isUploaded, setIsUploaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegInfo({ ...regIngo, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://server.hoster-dev.kz/api/upload_profile_img",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const imageData = await response.json();
        const imagePath = imageData.file.url;

        setRegInfo({ ...regIngo, photoUrl: imagePath });
        setIsUploaded(true);
        console.log("Изображение успешно загружено:", imagePath);
      } else {
        console.error("Ошибка при загрузке изображения");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  const handleOnSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://server.hoster-dev.kz/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regIngo),
      });

      if (res.ok) {
  
        console.log("Register done!");
      } else {
        console.error("Error with registration");
      }
    } catch (error) {
      console.error("Error send data to db", error);
    }
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              Зарегестрируйте аккаунт разработчика
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleOnSumbit}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm ">
              <div>
                <input
                  type="text"
                  id="developerName"
                  name="developerName"
                  value={regIngo.developerName}
                  onChange={handleChange}
                  required
                  className=" relative block w-full appearance-none  rounded-t-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Ваше имя и фамилия"
                />
              </div>
              <div>
                <select
                  id="position"
                  placeholder="Ваша должность"
                  name="position"
                  value={regIngo.position}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-100 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="" disabled hidden>
                    Ваша должность
                  </option>
                  <option value="Веб-программист">Веб-программист</option>
                  <option value="Веб-дизайнер">Веб-дизайнер</option>
                  <option value="Веб-мастер">Веб-мастер</option>
                  <option value="Веб-архитектор">Веб-архитектор</option>
                  <option value="Контент менеджер">Контент менеджер</option>
                  <option value="Тестировщик">Тестировщик</option>
                  <option value="Технический директор">
                    Технический директор
                  </option>
                  <option value="Специалист по контекстной рекламе">
                    Специалист по контекстной рекламе
                  </option>
                  <option value="Руководитель отдела">
                    Руководитель отдела
                  </option>
                  <option value="Проект менеджер">Проект менеджер</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  id="tel"
                  name="tel"
                  value={regIngo.tel}
                  onChange={handleChange}
                  required
                  className=" relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Ваш внутренний телефон"
                />
              </div>
              {!isUploaded ? (
                <div>
                  <input
                    type="file"
                    id="photoUrl"
                    name="photoUrl"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="photoUrl"
                    className="mb-[20px] bg-white relative block w-full appearance-none border border-gray-300 rounded-b-md px-3 py-2 text-gray-500 placeholder-gray-100 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    Выберите изображение
                  </label>
                  <span>{regIngo.photoUrl}</span>
                </div>
              ) : (
                <div className="bg-white relative block w-full appearance-none border border-gray-300 rounded-b-md px-3 py-2 text-green-500 font-bold">
                  Изображение загружено
                </div>
              )}

              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={regIngo.username}
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
                  value={regIngo.password}
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
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
