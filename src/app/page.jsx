import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "../../public/hoster.png";
export default function Home() {
  return (
    <div className="background h-screen flex items-center">
      <main className=" flex items-center flex-col gap-[100px] max-w-[1455] mx-auto py-[0] px-[15px] box-content xs:justify-center lg:justify-between">
        <div className="flex justify-between items-center">
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center md:flex md:justify-start md:items-start">
            {/* Заголовки */}
            <div className="in:text-center md:mb-[20px] lg:mb-[20px]">
              <span className="text-5xl xs:text-2xl in:text-[35px] md:text-[25px] lg:text-[50px]">
                HOSTER{" "}
              </span>
              <span className="text-5xl xs:text-2xl font-bold text-red-500 in:text-[35px] md:text-[25px] lg:text-[50px]">
                forDevelopers
              </span>
            </div>

            {/* Кнопка (оставляю ее здесь для примера) */}
            <Button url="/portfolio" text="Готовые решения" />
          </div>

          <div className="hidden md:block w-full max-w-lg in:block">
            <Image
              src={Hero}
              alt="main photo"
              className="w-full h-auto object-contain rounded-md shadow-white"
            />
          </div>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[18px]">
            Здесь вы найдете полный спектр решений, разработанных нашей
            компанией 
          </span>
          <span className="text-[18px]">
            Мы гордимся своими выдающимися специалистами и
            предоставляем вам доступ ко всему многообразию наших проектов и
            инновационных решений
          </span>
          <span className="text-[18px]">
            Наша команда стремится к постоянному
            совершенствованию и созданию продуктов, которые решают самые сложные
            задачи
          </span>

        </div>
      </main>
    </div>
  );
}
