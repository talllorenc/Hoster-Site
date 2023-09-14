const SearchBar = () => {
  return (
    <div className="flex mb-[45px]">
      <input
        placeholder="Какой у вас вопрос?"
        type="text"
        className="w-full p-[10px] mr-[5px] text-black font-bold outline-none rounded-lg border-[2px] border-orange-500"
      />
      <button className="bg-green-500 font-bold rounded-lg hover:bg-green-600">
        Добавить решение
      </button>
    </div>
  );
};

export default SearchBar;