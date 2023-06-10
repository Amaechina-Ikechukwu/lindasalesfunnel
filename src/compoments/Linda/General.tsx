import { Box, Container, Stack } from "../../../node_modules/@mui/joy/index";
import About from "./About";
import LandingPage from "./LandingPage";
import LindaSalesProHelps from "./LindaSalesProHelps";
import Testimonials2 from "./Testimonal2";
import AskedQuestions from "./AskedQuestions";
import Footer from "./Footer";
import Bottom from "./Bottom";
import colors from "../../constants/Colors";

export default function General() {
  return (
    <>
      <Container>
        <Stack spacing={6}>
          <LandingPage />
          <LindaSalesProHelps />
          <Testimonials2 />
          <About />
          <AskedQuestions />
        </Stack>
      </Container>
      <Box mt={10} width={"100vw"}>
        <Box width={"100vw"} backgroundColor={colors.backShade}>
          <Footer />
        </Box>
        <Box width={"100vw"} backgroundColor={colors.black}>
          <Bottom />
        </Box>
      </Box>
    </>
  );
}
