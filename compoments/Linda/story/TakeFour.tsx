import React from "react";
import { Stack, Box } from "@mui/joy";
import Text from "@/constants/Text";
import Image from "next/image";
import KeyWears from "@/assets/features/keys-wears.png";
import Lead from '@/assets/features/manage-removebg-preview.png';
import { Fade } from "@mui/material";
import colors from '@/constants/Colors'
export default function TakeFour() {
  return (
    <Box>
      <Fade in={true} timeout={2000}>
        <Stack spacing={5}>
          <Text
            level="body" size={14}
            text="I dont need to manually account for customers, I am provided with leads generate from the link I shared or pull from an Excel file "
          />
          <Stack sx={{alignItems:'center',justifyContent:'center',backgroundColor:colors.first}}><Image
            src={Lead}
            style={{
              width: "50%",
               height: 'auto',
              borderRadius: 10,
              objectFit: "contain",
              objectPosition: "top",
              boxShadow: "0px 0px 40px 0px rgba(20,19,20,0.1)",
            }}
            alt="LindaSalesPro Offer"
            
          />
</Stack>

                  </Stack>
      </Fade>
    </Box>
  );
}
