import { Box, Container, Grow, Stack } from "@mui/material";
import Text from "../../../constants/Text";
import colors from "../../../constants/Colors";
// import ContactBusiness from "./ContactBusiness";

interface BusinessData {
  data: {
    business_name: string;
    business_description: string;
  };
}

interface Props {
  business: BusinessData[];
  businessOffers: Record<string, any>;
}

export default function BusinessPage({ business, businessOffers }: Props,props:any): JSX.Element {
  try {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: colors.first,
            width: "100%",
            paddingTop: { xs: 2, sm: 5, md: 4 },
          }}
        >
          <Stack width="100%" spacing={{ xs: 8, md: 18 }}>
            <Grow in={true} style={{ transformOrigin: "1 0 0" }} timeout={2000}>
              <Stack
                sx={{
                  width: "100%",
                  backgroundColor: colors.first,
                  borderRadius: 5,
                  paddingY: 5,
                  height: "fit-content",
                  alignItems: "center",
                }}
              >
                <Stack
                  width="100%"
                  alignItems="flex-start"
                  justifyContent="space-evenly"
                  spacing={{ xs: 7, md: 2 }}
                  direction={{ md: "row" }}
                >
                  <Stack alignItems="flex-start" spacing={3} width="100%">
                    <Text
                      text={business[0]?.data?.business_name}
                      weight="bold"
                      color={colors.black}
                      size={{ xs: 28, md: 50 }}
                      align="left"
                    />
                    <Text
                      text={business[0]?.data?.business_description}
                      size={{ xs: 16, md: 16 }}
                      spacing={2}
                      align="left"
                    />
                  </Stack>
                  <Stack
                    sx={{
                      width: { xs: "100%", md: "80%" },
                      backgroundColor: colors.pinkBackShade,
                    }}
                  >
                    {/* Pass businessOffers to the ContactBusiness component */}
                    {/*<ContactBusiness businessOffers={props.businessOffers} />*/}
                  </Stack>
                </Stack>
              </Stack>
            </Grow>
          </Stack>
        </Box>
      </Container>
    );
  } catch (e) {
    console.log({ e });
    return <></>; // You can also return null instead of an empty string
  }
}
