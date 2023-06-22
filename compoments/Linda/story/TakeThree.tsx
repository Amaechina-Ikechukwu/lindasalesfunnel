import React from "react";
import { Stack, Box } from "@mui/joy";
import Text from "@/constants/Text";
import Image from "next/image";
import KeyWears from "@/assets/features/keys-wears.png";
import UserUi from '@/assets/features/userui.jpg';
import { Fade } from "@mui/material";
import colors from '@/constants/Colors'
export default function TakeThree() {
  return (
    <Box>
      <Fade in={true} timeout={2000}>
        <Stack spacing={5}>
          <Text
            level="body" size={14}
            text="Potential customers are provided with clean user interface where they can see my amazing offer."
          />
          <Stack sx={{alignItems:'center',justifyContent:'center',backgroundColor:colors.first}}> <Image
            src={UserUi}
            style={{
              width: "50%",
              height: 'auto',
              borderRadius: 10,
              objectFit: "contain",
              objectPosition: "top",
              boxShadow: "0px 0px 40px 0px rgba(20,19,20,0.1)",
            }}
            alt="LindaSalesPro Offer"
            
          /></Stack>

         
        </Stack>
      </Fade>
    </Box>
  );
}
