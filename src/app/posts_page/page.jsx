import LeftMenu from "@/components/LeftMenu/LeftMenu";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://138.197.112.193:3000/api/home", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DoneSolutions2 = async () => {
  const data = await getData();

  return (
    <div className="flex max-w-[1350px] mx-auto p-[16px]">
    <LeftMenu />
    <div className="flex-1">
      <SearchBar />
      <div className="overflow-hidden rounded-lg bg-zinc-800 shadow">
        <ul role="list" className="divide-y divide-gray-200">
          {data.map((item) => {
            const createdAtDate = new Date(item.createdAt);
            const day = createdAtDate.getDate();
            const month = createdAtDate.getMonth() + 1; 
            const year = createdAtDate.getFullYear();
            const formattedCreatedAt = `${day}/${month}/${year}`;
            return (
              <li>
                <Link href={`posts_page/${item._id}`}>
                  <div className="flex flex-col block hover:bg-zinc-600 flex px-4 py-4 sm:px-6">
                    <div className="">
                      <div className="flex flex-col min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="flex flex-col ">
                          <p className="font-medium text-[#0284c7] text-lg">
                            {item.title}
                          </p>
                          <p className="font-normal text-sm text-gray-300">
                            {item.decs}
                          </p>
                        </div>

                        <div className="flex items-center flex-col text-sm text-gray-500 mt-[20px]">
                          {/* Вывод отформатированной даты */}
                          <p>Решение добавлено {formattedCreatedAt}</p>
                          <p>
                            Разработчик решения -{" "}
                            <span className="font-bold">{item.author}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
  );
};
export default DoneSolutions2;
