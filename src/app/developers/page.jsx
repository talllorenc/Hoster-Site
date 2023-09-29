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

const people = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];

const Developers = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12 flex text-center flex-col items-center">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Разработчики
            </h2>
            <p className="text-xl text-gray-500">
              Сотрудники отдела Веб-Разработки
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-6 gap-x-4 gap-y-8 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {developers.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40  rounded-full xs:h-20 xs:w-20 in:h-40 in:w-40 lg:h-40 lg:w-40"
                    src={person.url}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-[#0284C7]">{person.position}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Developers;
