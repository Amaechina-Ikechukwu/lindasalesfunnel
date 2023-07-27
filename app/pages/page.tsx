import Image from "next/image";
import LindaImage from "@/assets/Linda.png";
import AIImage from "@/assets/ai.jpg";
import FBImage from "@/assets/facebook.jpg";
import Button from "@/style/Button";
import Link from "next/link";

export default async function Pages() {
  return (
    <div className="container mx-auto px-6 py-12 h-screen">
      <div className="space-y-8 flex flex-col sm:items-center">
        <div className="space-y-8 flex flex-col items-center  sm:w-3/5 md:w-4/5">
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-gray-600 text-center">
              Linda Meets Meta Meets AI
            </h1>
            <h3 className="text-gray-500 text-center">
              We are proud to introduce a CRM experience like no other, where
              the seamless integration of AI and Meta merge to deliver
              unprecedented levels of productivity, insights, and customer
              engagement.
            </h3>
          </div>
          <div className="w-full flex justify-center">
            <a
              href="/index.html"
              className="bg-blue-500 w-full text-white rounded-md hover:text-white shadow-md p-4 drop-shadow-xl hover:scale-105 active:scale-95 scale-100 hover:transition ease-in-out delay-50 text-center"
            >
              Connect To Linda
            </a>
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
          <h1 className="font-bold">+</h1>
          <Image
            src={AIImage}
            width={400}
            height={400}
            className="drop-shadow-xl hover:scale-105 w-60"
            alt="AI"
          />
        </div>
      </div>
    </div>
  );
}
