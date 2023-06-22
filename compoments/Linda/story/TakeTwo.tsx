import React from "react";
import { Stack, Box } from "@mui/joy";
import Text from "@/constants/Text";
import Image from "next/image";
import KeyWears from "@/assets/features/keys-wears.png";
import Offer from '@/assets/features/follow-removebg-preview.png';
import { Fade } from "@mui/material";
import colors from '@/constants/Colors'
export default function TakeTwo() {
  return (
    <Box>
      <Fade in={true} timeout={2000}>
        <Stack spacing={5}>
          <Text
            level="body" size={14}
            text="I have the ability to create value, an offer, for potential customers, which is provisioned on a website and then a sharable link is provided."
          />
          <Stack sx={{alignItems:'center',justifyContent:'center',backgroundColor:colors.first}}><Image
            src={Offer}
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
