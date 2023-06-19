import { Box, Stack } from "@mui/joy";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";

export default function About(): JSX.Element {
  return (
    <Box
      sx={{
        paddingX: 4,
        paddingY: 5,
        borderRadius: 5,
        backgroundColor: colors.offwhite,
      }}
    >
      <Stack spacing={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Text
            level={"h3"}
            weight={"bold"}
            size={24}
            text="Our Mission & Commitment"
            align={{ xs: "left", sm: "center" }}
            color={colors.black}
          />
          <Stack spacing={2}>
            <Text
              weight={"light"}
              spacing={2}
              text="LindaSalesPro was founded by a team of digital entrepreneurs who recognized the challenges that digital marketers, salespersons, and businesses face in generating leads and converting them into sales. We saw the need for a solution that could streamline the sales process and enhance customer service through personalized, automated follow-ups. Committed to this mission, our team developed LindaSalesPro, an app that simplifies lead generation and automates follow-up communication to help businesses convert more leads into sales in just a few days."
              align={{ xs: "left", sm: "center" }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
