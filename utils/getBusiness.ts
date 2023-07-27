import { cache } from 'react'
 
export const getBusiness = cache(async (business: string) => {
  const res = await fetch(`${process.env.DEV_LINK}/${business}/profile`);
   if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
})
