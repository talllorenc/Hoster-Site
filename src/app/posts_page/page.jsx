import LeftMenu from "@/components/LeftMenu/LeftMenu";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:8080/api/home", {
    cache: "no-store",
  });

  console.log(res.status);
  console.log(res.statusText);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DoneSolutions2 = async () => {
  const data = await getData();

  const createdAtString = data.createdAt; // Получаем строку с датой и временем
  const createdAtDate = new Date(createdAtString);
  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth() + 1;
  const year = createdAtDate.getFullYear();
  const formattedCreatedAt = `${day}/${month}/${year}`;

  return (
    <div className="flex max-w-[1350px] mx-auto p-[16px]">
      <LeftMenu className=""/>
      <div className="flex-1 overflow-hidden rounded-lg bg-zinc-600 shadow">
        <ul role="list" className="divide-y divide-gray-200">
          {data.map((item) => (
            <li>
              <Link href={`done_solutions/${item._id}`}>
                <div className="block hover:bg-zinc-400 flex justify-between items-center  px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="flex flex-col ">
                        <p className="font-medium text-[#0284c7] text-lg">
                          {item.title}
                        </p>
                        <p className="font-normal text-sm text-gray-300">{item.decs}</p>
                      </div>

                        <div className="flex items-center flex-col text-sm text-gray-500 mt-[20px]">
                          <p>Решение добавлено {item.createdAt}</p>
                          <p>Разработчик решения {item.author}</p>
                        </div>

                    </div>
                  </div>
                </div>
                <div></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DoneSolutions2;
