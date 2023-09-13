import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Solutions = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col justify-center mx-auto border-t-0 border border-zinc-500">
      <div className="max-w-[1600px] bg-[#1f2937] px-[15px] py-[15px] border-b border border-zinc-500">
        <div className="flex items-center justify-between mb-[25px]">
          <span className="font-bold text-[30px]">Готовые решения</span>
          <button className="bg-blue-500 font-bold text-[18px] px-[20px] py-[10px] rounded">
            Добавить решение
          </button>
        </div>
        <div className="flex items-center justify-between mb-[25px]">
          <span className="font-bold text-[22px]">Решений - 185</span>
          <input
            type="text"
            placeholder="Какой у вас вопрос?"
            className="text-black font-bold px-[15px] py-[10px] rounded-lg w-[500px] outline-none focus:bg-zinc-100"
          />
        </div>
      </div>
      <div className="container bg-[#262626]">
        {data.map((item) => (
          <div className="border-b border-[#a3a3a3] py-[15px]" key={item.id}>
            <Link href={`solutions/${item.id}`}>
              <h1 className="text-[24px] font-bold text-[#0074CC] cursor-pointer inline-block hover:underline">
                {item.title}
              </h1>
            </Link>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
