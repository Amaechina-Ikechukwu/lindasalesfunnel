import {GetUserId} from '@/utils/pages/GetUserId'
import PageWebhooks from '@/compoments/user/pages/PageWebhooks'
import Image from 'next/image'
async function getUserInformation(userid:string) {
  const res = await fetch(`${process.env.PAGS_DEV_LINK}/userinfo`,{headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${userid}`,
          }})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 



export default async function Pages({ params }: { params: { userid: string } }) {
 const userid = await GetUserId(params.userid)
  const userinfo = await getUserInformation(params.userid)
  return (
    <div className="container mx-auto p-6 h-screen ">
    <div className='space-y-12 '>

<div className='p-6 rounded-md bg-sky-50 flex flex-row space-x-6 items-center'>
<Image src={userinfo.picture.data.url} height={50} width={50} className='rounded-full' />
<p className='text-xl text-zinc-500 font-bold'>{userinfo.name}</p></div>
     
      <div ><PageWebhooks userid={userid} /></div></div>
     
      
    </div>
  );
}
