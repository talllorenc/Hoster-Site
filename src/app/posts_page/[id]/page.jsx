import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import ShareButton from "@/components/ShareButton/ShareButton";
import Image from "next/image";

async function getData(id) {
  try {
    const res = await fetch(`http://138.197.112.193:3000/api/home/${id}`, {
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

const SolutionsId2 = async ({ params }) => {
  const data = await getData(params.id);

  const createdAtString = data.createdAt;
  const createdAtDate = new Date(createdAtString);
  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth() + 1;
  const year = createdAtDate.getFullYear();
  const formattedCreatedAt = `${day}/${month}/${year}`;

  return (
    <div className="flex max-w-[1350px] mx-auto p-[16px] in:h-screen">
      <LeftMenu />
      <div className="flex-1">
        <div className=" w-full">
          <div className="flex flex-col">
            <div className="border-b">
              <h1 className="text-[30px] font-bold ">{data.title}</h1>
              <span>Добавлена {formattedCreatedAt}</span>
            </div>

            <span className="mt-[20px]">{data.decs}</span>
            <div className="border-b py-[20px]">{data.content}</div>
            <div className="flex flex-col items-center py-[20px] ">
              <div className="flex gap-[10px]">
                <ShareButton />
                <FavoriteButton postId={data._id}/>

              </div>

              <div className="flex items-center bg-[#d9eaf7] p-[7px] rounded-lg text-[#0074CC] xs:mt-[20px]">
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

export default SolutionsId2;
