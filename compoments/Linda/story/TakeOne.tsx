import { Stack, Box } from "@mui/joy";
import Text from "@/constants/Text";
import Image from "next/image";
import KeyWears from "@/assets/features/keys-wears.png";
import { Fade, Zoom } from "@mui/material";
import colors from '@/constants/Colors'
export default function FirstTake() {
  return (
    <Box >
    <Fade in={true} timeout={2000}>
      <Stack>
    
        <Stack spacing={5}>
          <Text
            text="My business needs to take online to reach more customer and to generate leads, manage leads and convert leads,with my phone."
            level="body"
            size={14}
          />
                <Stack sx={{alignItems:'center',justifyContent:'center',backgroundColor:colors.first}}><Image
            src={KeyWears}
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
      </Stack>
      </Fade>
    </Box>
  );
}
