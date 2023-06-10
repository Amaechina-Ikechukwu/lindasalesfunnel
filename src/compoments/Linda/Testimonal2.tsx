import { Box, Grid, Stack } from "../../../node_modules/@mui/joy/index";
import colors from "../../constants/Colors";
import { Fade } from "../../../node_modules/@mui/material/index";
import Text from "../../constants/Text";

const testinomials = [
  {
    tesimony: `"We're generating more leads than ever before, and LindaSalesPro's automated follow-ups have helped us close more sales in less time."`,
    author: "Josephine",
    service: "Sales Manager.",
  },
  {
    tesimony: `"We used to spend hours manually following up with leads, but now LindaSalesPro does it for me automatically. It's saved me so much time and has helped me increase my conversion rates."`,
    author: "Abraham",
    service: "Digital Marketer.",
  },
  {
    tesimony: `"Since we started using LindaSalesPro, our lead generation and conversion rates have gone through the roof. It's a game-changer for our business."`,
    author: "David",
    service: "Marketing Director.",
  },
];

function Testimonials2() {
  return (
    <Box paddingX={2}>
      <Stack
        sx={{ opacity: 1, zIndex: 1 }}
        // borderRadius={5}
        // backgroundColor={"#f4f4f4"}
        alignItems={"center"}
        paddingY={5}
        spacing={2}
      >
        <Text
          level={"h3"}
          size={24}
          weight={"bold"}
          color={colors.black}
          text={"Testimonials From Satisfied Clients"}
        />
        <Grid
          alignItems={"flex-start"}
          justifyContent={"center"}
          direction={"row"}
          rowSpacing={2}
          columnSpacing={2}
          container
        >
          {testinomials.map((testinomial, index) => (
            <Fade in={true} timeout={1000 * index}>
              <Grid width={"100%"} key={index} item xs={12} md={6}>
                <Box
                  backgroundColor={colors.offwhite}
                  padding={2}
                  borderRadius={5}
                >
                  <Stack spacing={2}>
                    <Text level={"p"} text={testinomial.tesimony} />
                    <Stack direction={"row"} justifyContent={"flex-end"}>
                      <Text
                        level={"p"}
                        text={testinomial.author}
                        weight={"bold"}
                      />
                      <Text level={"p"} text={", " + testinomial.service} />
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Testimonials2;
