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
            <div className="border-b border-[#a3a3a3] py-[16px]" key={item._id}>
              <Link href={`done_solutions/${item._id}`}>
                <h1 className="text-[20px] font-bold text-[#0074CC] cursor-pointer inline-block hover:underline">
                  {item.title}
                </h1>
              </Link>
              <div className="flex justify-between">
                <p>{item.decs}</p>
              </div>
              <div className="bg-[#d9eaf7] p-[7px] w-[150px] rounded-lg text-[#0074CC]">
                {item.author}
              </div>
            </div>
            
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default DoneSolutions;
