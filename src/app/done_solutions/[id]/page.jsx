import LeftMenu from "@/components/LeftMenu/LeftMenu";
import Image from "next/image";

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:8080/api/home/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
  };
}

const SolutionsId = async ({ params }) => {
  const data = await getData(params.id);

  const createdAtString = data.createdAt; // Получаем строку с датой и временем
  const createdAtDate = new Date(createdAtString);
  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth() + 1; 
  const year = createdAtDate.getFullYear();
  const formattedCreatedAt = `${day}/${month}/${year}`;

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="flex max-w-[1350px] w-full justify-center">
        <LeftMenu />
        <div className="max-w-[650px] w-full">
          <div className="flex flex-col">
            <h1 className="text-[30px] font-bold">{data.title}</h1>
            <span>Добавлена {formattedCreatedAt}</span>
            <span className="mt-[20px] ">{data.decs}</span>
            <div className="border-b py-[20px]">{data.content}</div>
            <div className="flex justify-between items-center py-[20px]">
              <div className="flex gap-[10px]">
                <div className="flex items-center text-[16px] cursor-pointer border p-2 rounded-lg hover:bg-[#22c55e]">
                  Поделиться
                  <Image
                    alt="share"
                    width={16}
                    height={16}
                    src="/solution_done/send_white.png"
                    className="h-[16px] ml-[5px]"
                  />
                </div>
                <div className="flex items-center text-[16px] cursor-pointer border p-2 rounded-lg hover:bg-[#dc2626]">
                  Избранное
                  <Image
                    alt="share"
                    width={20}
                    height={20}
                    src="/solution_done/heart_white.png"
                    className="h-[20px] ml-[5px]"
                  />
                </div>
              </div>

              <div className="flex items-center bg-[#d9eaf7] p-[7px] rounded-lg text-[#0074CC]">
                <Image
                  width={50}
                  height={50}
                  alt="profile"
                  src="/developers/Александр.png"
                  className="mr-[5px] rounded-lg "
                />
                {data.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsId;
