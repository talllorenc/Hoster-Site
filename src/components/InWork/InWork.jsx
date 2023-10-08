import Image from "next/image";
import Link from "next/link";

const InWork = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-[15px]">
      <Image src="/InWork.png" width={100} height={100} alt="in work img" />

        <span className="text-[50px] font-bold">В РАЗРАБОТКЕ</span>
        <Image src="/InWork.png" width={100} height={100} alt="in work img" />
      </div>
      <Link href="/" className="bg-red-600 p-[12px] rounded-lg text-[22px] hover:bg-red-500">
        На главную
      </Link>
    </div>
  );
};

export default InWork;
