import app from "../../assets/images/app.jpg";
import Linda from "../../assets/images/Linda.png";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TabOutlinedIcon from "@mui/icons-material/TabOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";

import {
  // AspectRatio,
  Box,
  Grid,
  Stack,
} from "@mui/joy/index";
import { Fade } from "@mui/material/index";
// import Buttons from "../../constants/Buttons";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";
// interface NestedProps {
//   contactCall: () => void;
//   ref: React.RefObject<HTMLDivElement>;
// }
export default function LindaSalesProHelps() {
  const icons = [
    <LeaderboardOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
    <HandshakeOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,

    <MarkEmailUnreadOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
    // <ScheduleOutlinedIcon
    //   sx={{
    //     fontSize: 50,
    //     color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
    //   }}
    // />,
    <QuestionAnswerOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,

    <QueryStatsOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
    <TrendingUpOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
    <TabOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
    <FilterDramaOutlinedIcon
      sx={{
        fontSize: 50,
        color: `linear-gradient(to right bottom, #ffd000, ${colors.backShade})`,
      }}
    />,
  ];

  const serviceObject = [
    {
      title: "IMPORT OR GENERATE NEW LEADS",
      more: "Generate leads from your website, Facebook Ads, or import from contacts or Excel.",
    },
    {
      title: "MATCH LEADS WITH OFFERS",
      more: "Create and match leads with enticing offers to convert them into customers.",
    },
    {
      title: "AUTO LEAD FOLLOW-UP",
      more: "Personalized email and SMS automation follow up with the leads using their respective matched offers.",
    },
    {
      title: "INSTANT LEAD MESSAGING",
      more: "Send personalized messages via WhatsApp, SMS, or email, or start a direct call.",
    },
    {
      title: "TRACK CONVERSIONS IN REAL TIME",
      more: "Monitor clicks, leads, and sales conversions for each offer on your phone.",
    },
    {
      title: "INCREASE CUSTOMER LIFETIME VALUE",
      more: "Up-sell and cross-sell different offers to one-time customers.",
    },
    {
      title: "ADDITIONAL SERVICES",
      more: "Set up a free lead-generating website and virtual wallet, and receive 24/7 tech support.",
    },
    {
      title: "SECURED CLOUD DATA STORAGE",
      more: "Store and access your data securely with our cloud-based data protection technology.",
    },
  ];
  return (
    <Box
    // ref={props.ref}
    >
      <Stack
        sx={{
          borderRadius: 3,
          padding: { xs: 3, sm: 5 },
          alignItems: "center",
          backgroundColor: colors.offwhite,
        }}
      >
        <Text
          level={"h3"}
          size={24}
          color={colors.text}
          weight={"bold"}
          align={{ sm: "center" }}
          text="LindaSalesPro helps you"
        />
        <Box>
          <Grid
            sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            direction={"row"}
            rowSpacing={2}
            columnSpacing={2}
            container
          >
            {serviceObject.map((list, index) => {
              return (
                <Fade key={list.title} in={true} timeout={1000 * index}>
                  <Grid
                    sx={{ width: "100%" }}
                    key={index}
                    component="div"
                    xs={12}
                    md={6}
                  >
                    <Box
                      sx={{
                        paddingX: 5,
                        paddingY: 5,
                        borderRadius: 3,
                        backgroundColor: colors.first,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      {icons[index]}
                      <Text
                        align={"left"}
                        text={list.title}
                        weight={"medium"}
                        level="h4"
                        size={14}
                        color={colors.black}
                      />
                      <Text
                        align={"left"}
                        text={list.more}
                        size={12}
                        weight={"light"}
                        color={colors.black}
                      />
                    </Box>
                  </Grid>
                </Fade>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
