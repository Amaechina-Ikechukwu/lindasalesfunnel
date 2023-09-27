"use client"
import Image from "next/image";
import LindaImage from "@/assets/Linda.png";
import AIImage from "@/assets/ai.jpg";
import FBImage from "@/assets/facebook.jpg";
import Button from "@/style/Button";
import Link from "next/link";

export default async function Pages() {
  //   const handleInstagramAuth = () => {
  //   const clientId = '6600635150017636'; // Replace with your Instagram App's client ID
  //   const redirectUri = 'https://aa8b-129-205-113-160.ngrok-free.app/instagram/confirm'; // Replace with your redirect URI
  //   const scope = 'user_profile';
  //   const responseType = 'code';

  //   const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=${responseType}`;

  //   // Open a new window with the Instagram authorization URL
  //   window.open(authUrl, 'InstagramAuthWindow', 'width=500,height=600');
  // };
  const handleInstagramAuth = () => {
  const clientId = '6600635150017636'; // Replace with your Instagram App's client ID
  const redirectUri = 'https://aa8b-129-205-113-160.ngrok-free.app/instagram/confirm'; // Replace with your redirect URI
  const scope = 'user_profile';
  const responseType = 'code';

  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

  // Redirect the current tab to the Instagram authorization URL
  window.location.href = authUrl;
};


  return (
    <div className="container mx-auto px-6 py-12 h-screen">
      <div className="space-y-8 flex flex-col sm:items-center">
        <div className="space-y-8 flex flex-col items-center  sm:w-3/5 md:w-4/5">
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-gray-600 text-center">
              Linda Meets Instagram
            </h1>
            <h3 className="text-gray-500 text-center">
              Do not allow the distrations of Instagram waste your time. Sieve through responses from your ads, answer clients, and much more
            </h3>
          </div>
          <div className="w-full flex justify-center">
            <button onClick={()=>handleInstagramAuth()}
              className="bg-blue-500 w-full text-white rounded-md hover:text-white shadow-md p-4 drop-shadow-xl hover:scale-105 active:scale-95 scale-100 hover:transition ease-in-out delay-50 text-center"
            >
              Connect To Linda
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-4 space-x-4 sm:w-3/5">
          <Image
            src={LindaImage}
            width={400}
            height={400}
            className="drop-shadow-xl hover:scale-105 w-60"
            alt="Linda"
          />
          <h1 className="font-bold">+</h1>
          <Image
            src={FBImage}
            width={400}
            height={400}
            className="drop-shadow-xl hover:scale-105 w-60"
            alt="Facebook"
          />
        
        </div>
      </div>
    </div>
  );
}
