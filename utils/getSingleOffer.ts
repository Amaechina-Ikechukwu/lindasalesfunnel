import { cache } from 'react'
 
export const getSingleOffer = cache(async (offerId: string) => {
  const res = await fetch(`${process.env.DEV_LINK}/offer/${offerId}`);
   if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
})
