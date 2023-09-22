import Link from "next/link";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center mb-[20px]">
      <input
        placeholder="Какой у вас вопрос?"
        type="text"
        className="w-full p-[10px] h-[40px] mr-[5px] text-black font-bold outline-none rounded-lg"
      />
      <Link href={"/add_post_form/"}>
        <button className="bg-green-500 text-[15px] font-bold rounded-lg hover:bg-green-600">
          Добавить решение
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
