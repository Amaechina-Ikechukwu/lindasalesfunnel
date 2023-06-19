"use client";
import { Box, Container, Stack } from "@mui/joy";
import About from "./About";
import LandingPage from "./LandingPage";
import LindaSalesProHelps from "./LindaSalesProHelps";
import Testimonials2 from "./Testimonal2";
import AskedQuestions from "./AskedQuestions";
import Footer from "./Footer";
import Bottom from "./Bottom";

import Header from "./Header";
import colors from "../../constants/Colors";
import Feature from "./Feature";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import {
  CssVarsProvider as JoyCssVarsProvider,
  extendTheme,
} from "@mui/joy/styles";
const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: any) => ({
          ...(ownerState.variant === "glass" && {
            backgroundColor: ownerState.color || undefined,
            background: ownerState.linear || undefined,
            borderRadius: ownerState.radius || 5,
            px: ownerState.px !== undefined ? ownerState.px : 2,
            py: ownerState.py !== undefined ? ownerState.py : 2,
            width: ownerState.width || "fit-content",
            height: ownerState.height || "fit-content",
            fontSize: ownerState.fontSize || 12,
            opacity: 0.8,
            color: ownerState.textColor || colors.black,
            textTransform: ownerState.capital || undefined,
            boxShadow: ownerState.shadow || undefined,
            weight: ownerState.font || undefined,
            "&:hover": {
              backgroundColor: ownerState.color || undefined,
              opacity: 1,
            },
            "&:active": {
              // backgroundColor: darkenColor(ownerState.color, 0.1),
            },
          }),
        }),
      },
    },
  },
});
const materialTheme = materialExtendTheme();
export default function General() {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: colors.first,
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Header />
        </Box>
        <Container>
          <Stack spacing={6}>
            <LandingPage />
            <Feature />
            <LindaSalesProHelps />
            <Testimonials2 />
            <About />
            <AskedQuestions />
          </Stack>
        </Container>
        <Box sx={{ mt: 10, width: "100%" }}>
          <Box sx={{ width: "100%", backgroundColor: colors.lightash }}>
            <Footer />
          </Box>
          <Box sx={{ width: "100%", backgroundColor: colors.black }}>
            <Bottom />
          </Box>
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
