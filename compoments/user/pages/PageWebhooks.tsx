'use client'
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase.ts";
import Text from "@/constants/Text";
import colors from "@/constants/Colors";
import { Box, Stack } from "@mui/material";

export default function PagesWebhooks({ userid }:any) {
  const [data, setData] = useState<any[]>([]);

  // Function to fetch initial data
  const fetchInitialData = async () => {
    try {
      const { data, error } = await supabase.from(`userid_${userid}`).select();
      if (error) {
        console.error("Error fetching data:", error);
      } else if (data && Array.isArray(data)) {
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle real-time updates
  const handleSubscription = (payload: any) => {
    setData((prevData:any) => [...prevData, payload.new]);
  };

  useEffect(() => {
    console.log(`userid_${userid}`)
    // Fetch initial data
    fetchInitialData();

    // Subscribe to the 'custom-filter-channel' channel for real-time updates
    const subscription = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        {
          event: "*", // You can add more events here, like "UPDATE" and "DELETE"
          schema: "public",
          table: `userid_${userid}`,
        },(payload)=>{
          handleSubscription(payload)
          console.log("change recieved",payload.new)
        },
      )
      .subscribe();

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
       supabase.removeChannel(subscription);
    };
  }, [supabase]);

  // Log data changes whenever data updates (for demonstration purposes)
  // useEffect(() => {
  //   console.log("Data changed:", data);
  // }, [data]);

  return (
    <Stack sx={{display:"flex", flexDirection:'column-reverse'}} spacing={2}>
      {data.map((d:any) => {
        if (d.verb === "remove") {
          return (
            <Stack
              sx={{
                padding: 4,
                borderRadius: 5,
                backgroundColor: colors.lightash,
              }}
              key={d.id}
            >
              <Text text={d.id} />
              {d.item !== null ? (
                <Box>
                  <Text text={` ${d.from_name} deleted ${d.item}`} />
                </Box>
              ) : (
                <Box>
                  <Text text={`${d.from_name} deleted ${d.reaction_type}`} />
                </Box>
              )}
            </Stack>
          );
        } else {
          return (
            <Stack
              sx={{
                padding: 4,
                borderRadius: 5,
                backgroundColor: colors.lightash,
              }}
              key={d.id}
            >
              <Text text={d.id} />
              {d.item !== null ? (
                <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                  <Text text={`New ${d.item} from ${d.from_name}`} />
                  <Text text={d.message} />
                </Box>
              ) : (
                <Box>
                  <Text text={`New ${d.reaction_type} from ${d.from_name}`} />
                </Box>
              )}
            </Stack>
          );
        }
      })}
    </Stack>
  );
}
