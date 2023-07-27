
import { GetListOfPages } from "@/utils/pages/GetListOfPages";
import PageSelection from "@/compoments/user/pages/PageSelection"

export default async function Pages({
  params,
}: {
  params: { userid: string };
}) {
 const pages = await GetListOfPages(params.userid);


  return (
    <div className="container mx-auto px-6  h-screen bg-gray-100">
    <div className='flex h-full items-center justify-center'>
    <div className='drop-shadow-xl rounded-md p-4 bg-white'><PageSelection pages={pages?.data} userid={params.userid}/></div>
      
    </div>

      
    </div>
  );
}
