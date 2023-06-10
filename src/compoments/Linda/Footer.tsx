import React, { useState, useEffect } from "react";

import linda_name from "../../assets/images/Linda_name.png";
import { Box, Container, Stack } from "../../../node_modules/@mui/joy/index";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";

function Footer() {
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
            backgroundColor={"inherit"}
            // paddingLeft={{ xs: 2, sm: 6, md: 13 }}
            // paddingRight={7}
            paddingY={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box>
              <img src={linda_name} style={{ width: 70 }} />
            </Box>

            <Stack
              width={"100%"}
              alignItems="center"
              justifyContent={"center"}
              direction="row"
              spacing={3}
            >
              <Box
                component={"button"}
                backgroundColor={"inherit"}
                // onClick={() => props.homeCall()}
              >
                <Text
                  text="Home"
                  color={colors.offwhite}
                  weight="thin"
                  level="p"
                />
              </Box>{" "}
              <Box
                component={"button"}
                backgroundColor={"inherit"}
                // onClick={() => props.ServiceCall()}
              >
                <Text
                  text="Features"
                  color={colors.offwhite}
                  weight="thin"
                  level="p"
                />
              </Box>{" "}
              <Box
                component={"button"}
                backgroundColor={"inherit"}
                // onClick={() => props.aboutCall()}
              >
                <Text
                  text="About"
                  color={colors.offwhite}
                  weight="thin"
                  level="p"
                />
              </Box>{" "}
              <Box
                component={"button"}
                backgroundColor={"inherit"}
                // onClick={() => props.testimonialCall()}
              >
                <Text
                  text="Testimonials"
                  color={colors.offwhite}
                  weight="thin"
                  level="p"
                />
              </Box>{" "}
            </Stack>
          </Box>
        </Stack>
      </Container>
    );
  } catch (e) {
    return;
  }
}

export default Footer;
