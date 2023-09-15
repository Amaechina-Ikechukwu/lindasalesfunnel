import {GetUserId} from '@/utils/pages/GetUserId'
import PageWebhooks from '@/compoments/user/pages/PageWebhooks'

export default async function Pages({ params }: { params: { userid: string } }) {
 const userid = await GetUserId(params.userid)
console.log({userid})
  return (
    <div className="container mx-auto px-6 h-screen">
      <p>{userid}</p>
      <PageWebhooks userid={userid} />
    </div>
  );
}
