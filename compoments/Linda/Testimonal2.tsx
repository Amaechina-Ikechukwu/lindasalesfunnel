import { Box, Grid, Stack } from "@mui/joy/index";
import colors from "../../constants/Colors";
import { Fade } from "@mui/material/index";
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

export default function Testimonials2() {
  return (
    <Box paddingX={2}>
      <Stack
        sx={{ opacity: 1, zIndex: 1, alignItems: "center", paddingY: 5 }}
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
          sx={{ alignItems: "flex-start", justifyContent: "center" }}
          direction={"row"}
          rowSpacing={2}
          columnSpacing={2}
          container
        >
          {testinomials.map((testinomial, index) => (
            <Fade in={true} key={testinomial.tesimony} timeout={1000 * index}>
              <Grid
                sx={{ width: "100%" }}
                key={index}
                component="div"
                xs={12}
                md={6}
              >
                <Box
                  sx={{
                    backgroundColor: colors.offwhite,
                    padding: 2,
                    borderRadius: 5,
                  }}
                >
                  <Stack spacing={2}>
                    <Text level={"p"} text={testinomial.tesimony} />
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end" }}
                    >
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
