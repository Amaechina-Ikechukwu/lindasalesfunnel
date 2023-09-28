"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams(); // Use array destructuring to get searchParams
  const search = searchParams.get("code");
  const router = useRouter();
  async function getUserToken() {
    try {
      const res = await fetch(
        "http://localhost:3003/instagram/confirm?code=" + search,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const { uid } = await res.json();
      console.log(uid);
      handleLocalStorageUpdate(uid);
      // Handle the Instagram response data as needed
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }
  const handleLocalStorageUpdate = (uid: string) => {
    // Update local storage when needed
    if (uid !== undefined) {
      localStorage.setItem("IGtoken", uid);
    }
    router.push("/instagram");

    return null;
  };

  return (
    <>
      <div className="container mx-auto px-6 py-12 h-screen">
        <div className="space-y-8 flex flex-col  h-full items-center justify-center">
          <div className="space-y-8 flex flex-col items-center  sm:w-3/5 md:w-4/5">
            <div className="space-y-4 sm:space-y-8">
              <p className="text-xl font-xl">
                Please, complete the connection process
              </p>
              <button
                onClick={() => getUserToken()}
                className="bg-blue-500 w-full text-white rounded-md hover:text-white shadow-md p-4 drop-shadow-xl hover:scale-105 active:scale-95 scale-100 hover:transition ease-in-out delay-50 text-center"
              >
                Complete Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
