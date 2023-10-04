"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import supabase from "@/utils/supabase.ts";
import Text from "@/constants/Text";
import colors from "@/constants/Colors";
import { Box, Stack } from "@mui/material";

export default function PagesWebhooks({ userid }: any) {
  const [data, setData] = useState<any[]>([]);

  // Function to fetch initial data
  const fetchInitialData = async () => {
    try {
      const { data, error } = await supabase
        .from("page_notifications")
        .select("*")
        .eq("userid", userid);
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
    setData((prevData: any) => [...prevData, payload.new]);
  };
  useLayoutEffect(() => {
    // Fetch initial data
    fetchInitialData();
  }, []);
  useEffect(() => {
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
          table: `page_notifications`,
          filter: "userid=eq." + userid,
        },
        (payload) => {
          handleSubscription(payload);
          console.log("change recieved", payload.new);
        }
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
    <Stack sx={{ display: "flex", flexDirection: "column-reverse", gap: 2 }}>
      {data.map((d: any) => {
        if (d.verb === "remove") {
          return (
            <Stack
              sx={{
                padding: 4,
                borderRadius: 5,
                backgroundColor: colors.lightash,
                gap: 2,
              }}
              key={d.id}
            >
              <Text text={`Page: ${d.pagename}`} />
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
                gap: 4,
              }}
              key={d.id}
            >
              <div className="flex flex-row space-x-2">
                <Text text={`Page: `} />
                <Text
                  className="font-bold text-lg text-zinc-600"
                  text={` ${d.pagename}`}
                />
              </div>
              {d.item !== null ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
