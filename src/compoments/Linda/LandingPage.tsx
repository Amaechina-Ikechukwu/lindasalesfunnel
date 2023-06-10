import {
  Avatar,
  Typography,
  Box,
  Stack,
  AspectRatio,
} from "../../../node_modules/@mui/joy/index";
import Buttons from "../../constants/Buttons";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";
import IntroImage from "../../assets/images/intro_image.png";

function LandingPage() {
  return (
    <Box>
      <Stack alignItems={"center"} direction={{ md: "row" }}>
        <Box
          // width={{ md: "80%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <Typography
            level="h4"
            sx={{ lineHeight: 2.3, fontFamily: "Poppins", textAlign: "left" }}
          >
            {" "}
            Turn{" "}
            <Typography
              sx={{
                padding: 1,
                borderRadius: 10,
                backgroundColor: colors.black,
                color: colors.offwhite,
                fontWeight: "medium",
                textAlign: "left",
              }}
            >
              More Leads
            </Typography>{" "}
            into{" "}
            <Typography
              sx={{
                padding: 1,
                borderRadius: 10,
                backgroundColor: colors.greenBackShade,
                color: colors.text,
                fontWeight: "medium",
              }}
            >
              Paying Customers
            </Typography>{" "}
            with your phone.
          </Typography>
          <Text
            size={14}
            level={"p"}
            weight="thin"
            spacing={1.8}
            text={
              "LindaSalesPro is a mobile CRM app that helps you organize your leads and customers on your mobile phone and instantly connect with them through popular channels like WhatsApp, Calls, SMS, and email, no matter where you are. It empowers you to generate more leads and convert them into sales in just a matter of days."
            }
          />
          <Stack>
            <Buttons
              px={6}
              py={2}
              // onClick={() => props.contactCall()}
              radius={7}
              color={colors.black}
              textColor={colors.first}
              text={
                <Text
                  size={14}
                  level={"h4"}
                  color={colors.first}
                  spacing={1.8}
                  text={"Sign Up Now - Its Free"}
                />
              }
              capital={"capitalize"}
              shadow="1px 1px 40px 0px rgba(48,48,48,0.75)"
              // linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
            />
          </Stack>
        </Box>
        <Box>
          <img style={{ width: 600 }} src={IntroImage} alt={"LindaSalesPro"} />
        </Box>
      </Stack>
      <Box
        display={{ md: "none" }}
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
          children={
            <Stack
              paddingX={2}
              direction={"row"}
              // backgroundColor={colors.first}
              spacing={2}
              alignItems={"center"}
            >
              <Avatar
                src={
                  "data:image/jpeg;base64,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"
                }
                sx={{ fontSize: 30 }}
              />
            </Stack>
          }
        />
      </Box>
      <Box
        display={{ xs: "none", md: "block" }}
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
          pheight={2}
          href={`https://wa.link/ep1xru`}
          target={"/blank"}
          pwidth={4}
          textColor={colors.first}
          color={colors.green}
          children={
            <Avatar
              src={
                "data:image/jpeg;base64,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"
              }
              sx={{ fontSize: 30 }}
            />
          }
        />
      </Box>
    </Box>
  );
}

export default LandingPage;
