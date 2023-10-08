import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import ShareButton from "@/components/ShareButton/ShareButton";
import Image from "next/image";
import CodeHighlighter from "@/components/CodeHighlight/CodeHighlight";

async function getData(id) {
  try {
    const res = await fetch(`https://server.hoster-dev.kz/api/home/${id}`, {
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
    <div className="flex max-w-[1350px] mx-auto p-[16px] ">
      <LeftMenu />
      <div className="flex-1 overflow-x-auto">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="border-b flex flex-col py-[15px]">
              <h1 className="text-[30px] font-bold ">{data.title}</h1>
              <span className="text-[18px]">{data.decs}</span>
              <span className="text-gray-400">
                Добавлена {formattedCreatedAt}
              </span>
            </div>
            <div className="">
              {data.content &&
                data.content.blocks &&
                data.content.blocks.map((block) => {
                  if (block.type === "paragraph") {
                    return (
                      <div className="py-[15px]">
                        <span>{block.data.text}</span>
                      </div>
                    );
                  } else if (block.type === "code") {
                    return <CodeHighlighter content={block.data.code} />;
                  } else if (block.type === "image") {
                    return (
                      <div className="flex flex-wrap justify-center gap-4">
                        <img
                          className="max-w-[350px] w-full h-auto object-contain rounded-xl"
                          src={block.data.file.url}
                          alt={block.data.caption}
                        />
                        <div className="w-full text-center text-[#9c9b9b]">
                          <span className="">{block.data.caption}</span>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>

            <div className="flex flex-col items-center py-[20px] ">
              <div className="flex gap-[10px]">
                <ShareButton />
                <FavoriteButton postId={data._id} />
              </div>

              <div className="flex items-center bg-[#d9eaf7] p-[7px] rounded-lg text-[#0074CC] xs:mt-[20px]">
                <Image
                  width={50}
                  height={50}
                  alt="profile"
                  src="/main-logo.svg"
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
