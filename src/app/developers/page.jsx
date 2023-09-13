import Image from "next/image";

const developers = [
  {
    id: 1,
    name: "Александр",
    position: "Веб разработчик",
    url: "/developers/Александр.png",
  },
  {
    id: 10,
    name: "Алла",
    position: "Тестировщик",
    url: "/developers/Алла.png",
  },
  {
    id: 11,
    name: "Андрей",
    position: "Веб дизайнер",
    url: "/developers/Андрей.jpg",
  },
  {
    id: 2,
    name: "Багдат",
    position: "Веб разработчик",
    url: "/developers/Багдат.png",
  },
  {
    id: 3,
    name: "Богдан",
    position: "Веб мастер",
    url: "/developers/Богдан.png",
  },
  {
    id: 13,
    name: "Владимир",
    position: "Специалист по контекстной рекламе",
    url: "/developers/Владимир.jpg",
  },
  {
    id: 4,
    name: "Данила",
    position: "Веб архитектор",
    url: "/developers/Данила.png",
  },
  {
    id: 5,
    name: "Дмитрий",
    position: "Веб разработчик",
    url: "/developers/Дмитрий.jpg",
  },
  {
    id: 9,
    name: "Марина",
    position: "Контент менеджер",
    url: "/developers/Марина.jpg",
  },
  {
    id: 6,
    name: "Николай",
    position: "Технический директор",
    url: "/developers/Николай.jpg",
  },
  {
    id: 7,
    name: "Нурбек",
    position: "Веб разработчик",
    url: "/developers/Нурбек.png",
  },
  {
    id: 8,
    name: "Радик",
    position: "Веб разработчик",
    url: "/developers/Радик.jpg",
  },
  {
    id: 12,
    name: "Руслан",
    position: "Веб дизайнер",
    url: "/developers/Руслан.jpg",
  },
];

const Developers = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1700px] mx-auto">
      <h1 className="text-[30px] font-bold">Отдел Web-Разработки</h1>
      <div className="hidden text-[20px] flex flex-wrap gap-[20px] justify-center md:flex">
        {developers.map((link) => (
          <div key={link.id} className="flex flex-col w-[18%] bg-zinc-500 rounded-lg p-[10px]">
            <Image width={200} height={200} alt="developers" src={link.url} className="w-full rounded-lg"/>
            <span className="font-bold text-[20px]">{link.name}</span>
            <span>{link.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;



