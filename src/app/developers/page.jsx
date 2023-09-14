import Image from "next/image";

const developers = [
  {
    id: 1,
    name: "Александр",
    position: "Веб разработчик",
    url: "/developers/Александр.png",
    hoster: "https://p.hoster.cloud/company/personal/user/64665/",
  },
  {
    id: 10,
    name: "Алла",
    position: "Тестировщик",
    url: "/developers/Алла.png",
    hoster: "https://p.hoster.cloud/company/personal/user/81/",
  },
  {
    id: 11,
    name: "Андрей",
    position: "Веб дизайнер",
    url: "/developers/Андрей.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/65/",
  },
  {
    id: 2,
    name: "Багдат",
    position: "Веб разработчик",
    url: "/developers/Багдат.png",
    hoster: "https://p.hoster.cloud/company/personal/user/57406/",
  },
  {
    id: 3,
    name: "Богдан",
    position: "Веб мастер",
    url: "/developers/Богдан.png",
    hoster: "https://p.hoster.cloud/company/personal/user/54914/",
  },
  {
    id: 13,
    name: "Владимир",
    position: "Специалист по контекстной рекламе",
    url: "/developers/Владимир.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/13832/",
  },
  {
    id: 4,
    name: "Данила",
    position: "Веб архитектор",
    url: "/developers/Данила.png",
    hoster: "https://p.hoster.cloud/company/personal/user/50943/",
  },
  {
    id: 5,
    name: "Дмитрий",
    position: "Веб разработчик",
    url: "/developers/Дмитрий.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/87/",
  },
  {
    id: 9,
    name: "Марина",
    position: "Контент менеджер",
    url: "/developers/Марина.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/255/",
  },
  {
    id: 6,
    name: "Николай",
    position: "Технический директор",
    url: "/developers/Николай.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/85/",
  },
  {
    id: 7,
    name: "Нурбек",
    position: "Веб разработчик",
    url: "/developers/Нурбек.png",
    hoster: "https://p.hoster.cloud/company/personal/user/59653/",
  },
  {
    id: 8,
    name: "Радик",
    position: "Веб разработчик",
    url: "/developers/Радик.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/83/",
  },
  {
    id: 12,
    name: "Руслан",
    position: "Веб дизайнер",
    url: "/developers/Руслан.jpg",
    hoster: "https://p.hoster.cloud/company/personal/user/20468/",
  },
];


const Developers = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1700px] mx-auto">
      <h1 className="text-[30px] font-bold ">Отдел Web-Разработки</h1>
      <div className="hidden text-[20px] flex flex-wrap gap-[20px] justify-center md:flex border-t py-[15px]">
        {developers.map((link) => (
          <div
            key={link.id}
            className="flex flex-col w-[13%] bg-zinc-500 bg-opacity-10 rounded-lg p-[10px]"
          >
            <Image
              width={200}
              height={200}
              alt="developers"
              src={link.url}
              className="w-full rounded-lg"
            />
            <span className="font-bold text-[20px]">{link.name}</span>
            <span className="text-[18px]">{link.position}</span>
            <button className="bg-blue-500 mt-auto rounded font-bold">
              <a href={link.hoster} target="_blank" rel="noopener noreferrer">
                Битрикс24
              </a>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Developers;
