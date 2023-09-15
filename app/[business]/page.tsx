
import BusinessPage from "@/compoments/business/home/Business";
import { getBusiness } from '@/utils/getBusiness';
import { getBusinessOffers } from '@/utils/getBusinessOffers';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { business: string };
};

export async function generateMetadata(
  { params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const business = params.business;

  // fetch data
  const product = await getBusiness(params.business);

  return {
    title: product?.data?.business_name,
    description: product?.data?.business_description,
    openGraph: {
      images: [
        {
          url: product?.data?.business_logo,
         
        },
      ],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Page({ params }: { params: { business: string } }) {
  const business = await getBusiness(params.business);
  const businessOffers = await getBusinessOffers(business?.data?.business_url)
  return <BusinessPage business={business} businessOffers={businessOffers} />;
}
