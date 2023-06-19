import BusinessPage from "../../compoments/business/home/Business";
async function getBusiness(business: string) {
  const res = await fetch(`${process.env.DEV_LINK}/${business}/profile`);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default function Page({ params }: { params: { business: "string" } }) {
  const business = getBusiness(params.business);
  return <BusinessPage business={business} />;
}
