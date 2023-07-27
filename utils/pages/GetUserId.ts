import { cache } from 'react';
import supabase from "@/utils/supabase.ts";

export const GetUserId = cache(async (userid: string) => {
    try {
      const { data, error } = await supabase.from("logindetails").select().eq('uuid',userid);
      if (error) {
        console.error("Error fetching data:", error);
      } else if (data && Array.isArray(data)) {
        return data[0].userid
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }});
 