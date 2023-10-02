"use client";

import LeftMenu from "@/components/LeftMenu/LeftMenu";
import Image from "next/image";

export const metadata = {
  title: "HOSTER | Решения",
};


const Solutions = () => {
  return (
    <div className="flex justify-center px-4 py-[16px]">
      <div className="flex max-w-[1350px]">
        <LeftMenu />
        <div className="flex flex-col">
          <div className={`max-w-[650px] text-white`}>
            <div className="bg-zinc-900 rounded-xl p-5">
              <div className="border-b py-[15px] flex items-center">
                Добро пожаловать в раздел "Готовые решения". Здесь собраны все
                решения, созданные нашими опытными разработчиками. Мы стремимся
                предоставить вам доступ к широкому спектру готовых решений,
                которые помогут вам решить самые разнообразные задачи и
                проблемы.
                <Image
                  src="/solutions/solution.png"
                  className="ml-[10px]"
                  width={120}
                  height={120}
                />
              </div>
              <div className="border-b py-[15px] flex items-center">
                Мы понимаем, что каждый проект уникален, поэтому предлагаем вам
                не только использовать готовые решения, но и добавлять свои
                собственные. Здесь вы найдете инструменты и ресурсы, чтобы
                делиться своим опытом и решениями с нашими коллегами.
                <Image
                  src="/solutions/services.png"
                  className="ml-[10px]"
                  width={120}
                  height={120}
                />
              </div>
              <div className="py-[15px] flex items-center">
                Независимо от того, в поиске ли вы решения для своего проекта
                или желаете поделиться своими идеями и решениями, раздел
                "Готовые решения" создан для вас.
                <Image
                  src="/solutions/documentation.png"
                  className="ml-[10px]"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>

          <div className="max-w-[650px] text-white">
            <h1 className="text-black font-bold dark:text-white xs:text-[25px] mt-[20px] in:text-[30px] ">Полезные ссылки</h1>
            <div className="bg-zinc-900 rounded-xl p-5">
              <div className="flex flex-col py-[15px]">
                <span className="mb-[10px]">
                  Иконки взяты с сайта{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://www.flaticon.com/ru/"
                    title=" иконки"
                    target="_blank"
                  >
                    "Иконки от Graphix Dxinerz - Flaticon"
                  </a>
                </span>
                <span className="mb-[10px]">
                  Сайт разработан при помощи{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://nextjs.org/"
                    title=" иконки"
                    target="_blank"
                  >
                    "Next.js (v.9.6.7)"
                  </a>
                </span>
                <span className="mb-[10px]">
                  Для стилизации сайта использовался CSS-фреймворк{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://tailwindcss.ru/"
                    title=" иконки"
                    target="_blank"
                  >
                    "tailwindcss"
                  </a>
                </span>
                <span className="mb-[10px]">
                  В качестве облачной платформы был использован{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://vercel.com/"
                    title=" иконки"
                    target="_blank"
                  >
                    "versel"
                  </a>
                </span>
                <span className="mb-[10px]">
                  Система контроля версий{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://github.com/"
                    title=" иконки"
                    target="_blank"
                  >
                    "github"
                  </a>
                </span>
                <span className="mb-[10px]">
                  Репозиторий с проектом{" "}
                  <a
                    className="bg-orange-700 px-[5px] rounded-lg"
                    href="https://github.com/talllorenc/Hoster-Site"
                    title=" иконки"
                    target="_blank"
                  >
                    "talllorenc/github"
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
