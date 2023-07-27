import React from "react";
import { Stack, Box } from "@mui/joy";
import Text from "@/constants/Text";
import Image from "next/image";
import KeyWears from "@/assets/features/keys-wears.png";
import Notification from '@/assets/features/notification.jpg';
import { Fade } from "@mui/material";
import colors from '@/constants/Colors'
import Buttons from "@/constants/Buttons";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
export default function TakeFive() {
  return (
    <Box>
      <Fade in={true} timeout={2000}>
        <Stack sx={{paddingY:5}} spacing={5}>
          <Text
            level="body" size={14}
            text="As soon as a lead is generated, I receive an instant notification. I have the ability to stay in touch with potential customers, and then the sound of credit alerts follows. "
          />
          <Stack sx={{alignItems:'center',justifyContent:'center',backgroundColor:colors.first}}><Image
            src={Notification}
            style={{
              width: "100%",
               height: 'auto',
              borderRadius: 10,
              objectFit: "contain",
              objectPosition: "top",
              boxShadow: "0px 0px 40px 0px rgba(20,19,20,0.1)",
            }}
            alt="LindaSalesPro Offer"
            
          />
</Stack>
<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:8}}>
      <Buttons
              px={6}
              py={2}
              // onClick={() => props.contactCall()} 
              radius={3}
              fwidth={true}
              color={colors.linda}    text={"Sign Up Now - Its Free"}
              textColor={colors.first}
                            capital={"capitalize"}
              icon={<OpenInNewOutlinedIcon sx={{ color: colors.first }} />}
              shadow="0px 0px 90px -11px rgba(255,208,0,1)"
              // linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
            />
</Box>

                  </Stack>
      </Fade>
    </Box>
  );
}
