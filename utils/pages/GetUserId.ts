import { cache } from 'react';
import supabase from "@/utils/supabase.ts";

import axios from "axios";

 const GetUser= cache(async (userid: string) => {
  try {
    const response = await axios.get(
      `${process.env.PAGS_DEV_LINK}/userid`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userid}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log({ error });
    // throw new Error('Failed to fetch data '+error);
  }
});

export const GetUserId = cache(async (userid: string) => {
 try {
    const response = await axios.get(
      `${process.env.PAGS_DEV_LINK}/userid`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userid}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log({ error });
    // throw new Error('Failed to fetch data '+error);
  }d });
 