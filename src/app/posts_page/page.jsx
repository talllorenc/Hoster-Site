import LeftMenu from "@/components/LeftMenu/LeftMenu";
import {getData} from "../api/getSolutions"
import SearchPage from "@/components/SearchPage/SearchPage";

const DoneSolutions2 = async () => {
  const data = await getData();
 
  return (
    <div className="flex max-w-[1350px] mx-auto p-[16px] h-screen">
    <LeftMenu className=""/>
    <div className="flex-1" >
      <SearchPage posts={data}/>
    </div>
  </div>
  );
};
export default DoneSolutions2;
