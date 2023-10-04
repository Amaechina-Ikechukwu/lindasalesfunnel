"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Header({ userInfo }: any) {
  const [switchToIG, setSwitchToIG] = useState<any | undefined>();

  return (
    <div>
      <div className="p-6 rounded-md bg-sky-50 flex flex-row space-x-6 items-center justify-between">
        <div>
          {userInfo && (
            <Image
              src={userInfo.picture.data.url}
              alt={`${userInfo.name} in LindaSalesPro`}
              height={50}
              width={50}
              className="rounded-full"
            />
          )}
          <p className="text-xl text-zinc-500 font-bold">{userInfo?.name}</p>
        </div>
        <div>
          <div>
            <Image
              src={userInfo.picture.data.url}
              alt={`${userInfo.name} in LindaSalesPro`}
              height={50}
              width={50}
              className="rounded-full"
            />{" "}
            <InstagramIcon className="w-5 h-5 relative bottom-3 left-7 text-orange-300" />
          </div>
          <p className="text-sm text-zinc-500 relative bottom-3">
            Tap to switch
          </p>
        </div>
      </div>
    </div>
  );
}
