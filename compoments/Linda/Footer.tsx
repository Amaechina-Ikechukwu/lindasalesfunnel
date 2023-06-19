import React, { useState, useEffect } from "react";

import linda_name from "../../assets/images/Linda_name.png";
import { Box, Container, Stack } from "@mui/joy/index";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";
import Buttons from "../../constants/Buttons";
import Image from "next/image";

export default function Footer(): JSX.Element {
  // const { business, businessName, setBusiness } = useStore(
  //   (state) => ({
  //     username: state.username,
  //     clearUser: state.clearUser,
  //     profile: state.profile,
  //     setEncrypted: state.setEncrypted,
  //     businessName: state.businessName,
  //     business: state.business,
  //     setBusiness: state.setBusiness,
  //     isSignedIn: state.isSignedIn,
  //   }),
  //   shallow
  // );
  // const [hideHeader, setHideHeader] = useState(false);
  // const avoid = [
  //   "login",
  //   "signup",
  //   "verify",
  //   "update",
  //   "updateprofile",
  //   "forgotpassword",
  //   "profile",
  //   "",
  // ];
  // const avoidHeader = () => {
  //   if (avoid.includes(params.pathname.split("/")[1])) {
  //     setHideHeader(true);
  //   } else {
  //     setHideHeader(false);
  //   }
  // };
  // const params = useLocation();
  // const navigate = useNavigate();
  // const check = params.pathname.split("/");
  // const pathurl = params.pathname.split("/")[1];
  // const pathurl2 = params.pathname.split("/")[2];

  // const fetchBusiness = async () => {
  //   try {
  //     if (business == undefined) {
  //       await getSavedBusiness().then(
  //         async (e) => (
  //           await getBusiness(e).then((result) => setBusiness(result)),
  //           savebusinessname()
  //         )
  //       );
  //     }
  //   } catch {}
  // };
  // const savebusinessname = async () => {
  //   try {
  //     if (newavoid.includes(params.pathname.split("/")[1]) == false) {
  //       await AsyncStorage.setItem("business", pathurl);
  //     }
  //   } catch (e) {}
  // };

  // const getSavedBusiness = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("business");
  //     if (value !== null) {
  //       return value;
  //     } else {
  //     }
  //   } catch (e) {}
  // };
  // useEffect(() => {
  //   avoidHeader();
  // }, [params, business]);

  try {
    return (
      <Container>
        {" "}
        <Stack
          sx={{
            flexDirection: "column",
            overflowX: "hidden",
            "& .MuiDialogContent-root::-webkit-scrollbar": {
              display: "none",
            },
            "& .MuiDialogContent-root": {
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            },
          }}
          paddingX={1}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              paddingY: 4,
              backgroundColor: "inherit",
            }}
          >
            <Box>
              <Image
                width={70}
                height={70}
                src={linda_name}
                alt="lindasalespro"
              />
            </Box>

            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                direction: "row",
                spacing: 3,
              }}
              width={"100%"}
              alignItems="center"
              justifyContent={"center"}
              direction="row"
              spacing={3}
            >
              <Buttons
                color="inherit" // onClick={() => props.homeCall()}
                text={
                  <Text
                    text="Home"
                    color={colors.text}
                    weight="thin"
                    level="p"
                  />
                }
              />
              <Buttons
                color="inherit" // onClick={() => props.ServiceCall()}
                text={
                  <Text
                    text="Features"
                    color={colors.text}
                    weight="thin"
                    level="p"
                  />
                }
              />
              <Buttons
                color="inherit" // onClick={() => props.aboutCall()}
                text={
                  <Text
                    text="About"
                    color={colors.text}
                    weight="thin"
                    level="p"
                  />
                }
              />
              <Buttons
                color="inherit" // onClick={() => props.testimonialCall()}
                text={
                  <Text
                    text="Testimonials"
                    color={colors.text}
                    weight="thin"
                    level="p"
                  />
                }
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    );
  } catch (e) {
    return <></>;
  }
}
