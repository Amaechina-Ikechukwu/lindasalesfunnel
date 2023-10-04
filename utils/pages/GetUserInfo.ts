import { cache } from "react";
import axios from "axios";

export const GetUserInfo = cache(async (userid: string) => {
  try {
    const response = await axios.get(
      `https://keys-wears.onrender.com/userinfo`,
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
