import LeftMenu from "@/components/LeftMenu/LeftMenu";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  console.log(res.status);
  console.log(res.statusText);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DoneSolutions = async () => {
  const data = await getData();
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="flex max-w-[1350px]">
        <LeftMenu />
        <div className="max-w-[650px] w-full">
          <div className="flex flex-col">
            <SearchBar />
            <div className="flex items-center justify-between">
              <span className="text-[30px] font-bold">Готовые решения</span>
            </div>
          </div>
          {data.map((item) => (
            <div className="border-b border-[#a3a3a3]" key={item.id}>
              <Link href={`done_solutions/${item.id}`}>
                <h1 className="text-[24px] font-bold text-[#0074CC] cursor-pointer inline-block hover:underline">
                  {item.title}
                </h1>
              </Link>
              <div className="flex justify-between">
                <p>
                  {item.body}
                </p>
                {/* <div className="text-orange-500 font-bold underline ">
                  <span className="cursor-pointer">Александр Боярчук</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoneSolutions;
