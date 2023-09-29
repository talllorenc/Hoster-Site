import { getData } from "@/app/api/getSolutions";
import { useState, useEffect } from "react";

export const metadata = {
  title: "HOSTER | Личный кабинет",
};

const LeftMenuInfo =  () => {
  const [postCount, setPostCount] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        const count = data.length; 


        setPostCount(count);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); 
  }, []);


  return (
    <div className="border-t py-[15px] leading-7 ">
      <div className="flex justify-between">
        <div className="text-[15px] font-bold">Решений опубликовано</div>
        <div className="text-[15px] font-bold">{postCount}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-[15px] font-bold">Статус систем</div>
        <div className="text-[15px] font-bold text-green-500">online</div>
      </div>
    </div>
  );
};

export default LeftMenuInfo;
