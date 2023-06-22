import Buttons from "../../constants/Buttons";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";
import Image from "next/image";
import IntroImage from "../../assets/images/intro_image.png";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Box, Stack, Typography, Avatar } from "@mui/joy";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styles from "./LandingPage.module.css"; // Import the CSS file for styling
import { whatsappimg } from "@/constants/whatsappimg";
import BasicModal from "@/constants/Modal";
import FirstStory from "./story/FirstStory";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

export default function LandingPage() {
  const [gyroX, setGyroX] = useState(0);
  const [gyroY, setGyroY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const textTransition = keyframes`
  0%, 100% {
    color: #FFFF00;
    border-color: #FFFF00;
  }
  20% {
    color: #FFCC00;
    border-color: #FFCC00;
  }
  40% {
    color: #FF9900;
    border-color: #FF9900;
  }
  60% {
    color: #FF6600;
    border-color: #FF6600;
  }
  80% {
    color: #FF3300;
    border-color: #FF3300;
  }
`;

  const shimmerAnimation = `
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }
`;

  useEffect(() => {
    // Automatically toggle the isHovered state at regular intervals
    const intervalId = setInterval(() => {
      setIsHovered((prevIsHovered) => !prevIsHovered);
    }, 2000); // Toggle every 2 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleDeviceOrientation = (event: any) => {
      setGyroX(event.gamma || 0);
      setGyroY(event.beta || 0);
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setGyroX(scrollY / 40); // Adjust the sensitivity by changing the divisor
    setGyroY(scrollY / 40); // Adjust the sensitivity by changing the divisor
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box sx={{ mt: 15 }}>
      <Stack alignItems={"center"} direction={{ md: "row" }}>
        <Box
          // width={{ md: "80%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "flex-start",
            // width: { md: "60%" },
          }}
        >
          <Typography
            level="h2"
            sx={{ lineHeight: 1.5, fontFamily: "Poppins", textAlign: "left" }}
           >
            {" "}
            <Typography
              
              // sx={{
              //   color: colors.offwhite,
              //   fontWeight: "regular",
              //   textAlign: "left",
              //   padding: 1,
              //   borderRadius: 10,
              //   backgroundColor: "black",
              // }}
            >
              Convert leads
            </Typography>{" "}
            into{" "}
            <Typography
              sx={{
                padding: 1,
                borderRadius: 10,
                animation: `${textTransition} 10s linear infinite`,
                fontWeight: "medium",
                color: "#FFFF00",
                border: "2px solid #FFFF00",
                transition: "color 0.1s, border-color 0.5s",
              }}
            >
              Paying Customers
            </Typography>{" "}
            with ease, with your phone.
          </Typography>
          <Text
            size={16}
            level={"body"}
            weight="thin"
            spacing={1.8}
            text={
              "Organize your leads in one place and communicate with them easily through popular channels like WhatsApp, phone calls, SMS, and emails. Turn more leads into paying customers, from your phone using the LindaSalesPro App."
            }
          />
          <Stack direction={{ sm: "row" }} sx={{alignItems:'center',gap:3,width:'100%'}} spacing={5}>
            <Buttons
              px={6} width={{xs:'100%'}}
              py={2}
              // onClick={() => props.contactCall()}
              radius={3}
              color={colors.linda}    text={"Sign Up Now - Its Free"}
              textColor={colors.first}
                            capital={"capitalize"}
              icon={<OpenInNewOutlinedIcon sx={{ color: colors.first }} />}
              shadow="0px 0px 116px -11px rgba(255,208,0,1)"
              // linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
            />
            <Buttons
              px={10} text={'See Stories'}
              py={2} width={{xs:'100%'}}
              onClick={() => setOpenModal(true)}
              radius={3}
              color={'transparent'}
              textColor={colors.black}
              furtherStyles={{ border: 1, borderColor: colors.text }}
              
              capital={"capitalize"}
              icon={<MenuBookOutlinedIcon fontSize='large' sx={{ color: colors.text,fontSize:'large' }} />}
              shadow="0px 0px 116px -11px rgba(255,255,0,1)"
              // linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
            />
          </Stack>
          <BasicModal open={openModal} onClose={() => setOpenModal(false)}>
            <FirstStory />
          </BasicModal>
        </Box>
        <Box sx={{marginTop:{xs:5,md:0}}}>
          <Image
            src={IntroImage}
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "transparent",
              transform: `rotateX(${gyroX}deg) rotateY(${gyroY}deg)`,
            }}
            alt="LindaSalesProp"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {/* <img style={{ width: 600 }} src={IntroImage} alt={"LindaSalesPro"} /> */}
        </Box>
      </Stack>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          right: 0,
          bottom: 0,
          display: { md: "none" },
          zIndex: 5,
        }}
      >
        <Buttons
          radius={10}
          capital={"capitalize"}
          href={`https://wa.link/ep1xru`}
          target={"/blank"}
          // pheight={2}
          // pwidth={4}
          color={colors.first}
          // children={
          //   <Stack
          //     sx={{ paddingX: 2, direction: "row", alignItems: "center" }}
          //     spacing={2}
          //   >
          //     <Avatar src={whatsappimg} sx={{ fontSize: 30 }} />
          //   </Stack>
          // }
        />
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          right: 0,
          bottom: 0,
          display: { xs: "none", md: "block" },
          zIndex: 4,
        }}
      >
        <Buttons
          text={"Connect With Linda On Whatsapp"}
          radius={10}
          capital={"capitalize"}
          py={2}
          href={`https://wa.link/ep1xru`}
          target={"/blank"}
          px={4}
          textColor={colors.first}
          color={colors.green}
          // children={<Avatar src={whatsappimg} sx={{ fontSize: 30 }} />}
        />
      </Box>
    </Box>
  );
}
