import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Button } from "@mui/joy";
import { SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import styles from "./LandingPage.module.css";

import linda_name from "../../assets/images/Linda_name.png";
import Linda from "../../assets/images/Linda.png";
import Buttons from "../../constants/Buttons";
import colors from "../../constants/Colors";

// interface HeaderProps {
//   homeCall: () => void;
//   serviceCall: () => void;
//   aboutCall: () => void;
//   testimonialCall: () => void;
// }

export default function Header(): JSX.Element {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const anchor = "right";

  const toggleDrawer =
    (anchor: string, open: boolean, fxn?: () => void) =>
    (
      event:
        | React.KeyboardEvent<Element>
        | React.MouseEvent<Element, MouseEvent>
    ) => {
      if (
        (event &&
          event.type === "keydown" &&
          (event as React.KeyboardEvent<Element>).key === "Tab") ||
        (event as React.KeyboardEvent<Element>).key === "Shift"
      ) {
        return;
      }

      if (open === true) {
        setState({ ...state, [anchor]: open });
      } else {
        setState({ ...state, [anchor]: open });
        setTimeout(() => {
          fxn && fxn();
        }, 500);
      }
    };

  const [hideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Check initial screen size
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          zIndex: 99,
          paddingY: 2,
          backgroundColor: colors.first,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          spacing={1}
        >
          <Image
            width={40}
            height={40}
            src={Linda}
            style={{ fontSize: 40 }}
            alt="Linda"
          />

          <Image
            width={40}
            height={40}
            src={linda_name}
            style={{ width: 70 }}
            alt="Linda"
            className={!isSmallScreen ? styles.image : styles.hidden}
          />
        </Stack>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",gap:2
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",gap:1
            }}
          >
            <Box>
              <Buttons
                textColor={colors.text}
                font={"regular"}
                capital={"capitalize"}
                text={"Home"}
                width={"100%"}
                color={"transparent"}
                // onClick={toggleDrawer(anchor, false, () => props.homeCall())}
              />
            </Box>
            <Box>
              <Buttons
                textColor={colors.text}
                font={"regular"}
                // onClick={toggleDrawer(anchor, false, () => props.serviceCall())}
                capital={"capitalize"}
                text={"Features"}
                width={"100%"}
                color={"transparent"}
              />
            </Box>
            <Buttons
              textColor={colors.text}
              font={"regular"}
              // onClick={toggleDrawer(anchor, false, () => props.aboutCall())}
              text={"About"}
              width={"100%"}
              capital={"capitalize"}
              color={"transparent"}
            />
            <Buttons
              textColor={colors.text}
              font={"regular"}
              // onClick={toggleDrawer(anchor, false, () =>
              //   props.testimonialCall()
              // )}
              text={"Testimonials"}
              width={"100%"}
              color={"transparent"}
              capital={"capitalize"}
            />
          </Stack>
          <Buttons
            textColor={colors.first}
            width="100%"
            radius={2} py={1} px={2}
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=online.priceplan"
            }
            text={"get started"}
            capital={"capitalize"}
            linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
          />
        </Box>
        <Box
          sx={{
            display: { xs: hideHeader ? "none" : "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <Box>
            <Button
              sx={{ backgroundColor: "inherit" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuOutlinedIcon sx={{ fontSize: 40, color: colors.text }} />
            </Button>
          </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Stack
              sx={{
                display: "flex",
                height: "100vh",
                width: { xs: "50vw", md: "20vw" },
                flexDirection: "column",
              }}
              spacing={2}
            >
              <Box sx={{ paddingY: 1 }}>
                <Button
                  sx={{ backgroundColor: "inherit" }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <CloseOutlinedIcon
                    sx={{ fontSize: 30, color: colors.text }}
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ alignItems: "center" }} spacing={6}>
                  <Box>
                    <Buttons
                      textColor={colors.text}
                      font={"bold"}
                      capital={"capitalize"}
                      text={"Home"}
                      width={"100%"}
                      color={"transparent"}
                      // onClick={toggleDrawer(anchor, false, () =>
                      //   props.homeCall()
                      // )}
                    />
                  </Box>
                  <Box>
                    <Buttons
                      textColor={colors.text}
                      font={"bold"}
                      // onClick={toggleDrawer(anchor, false, () =>
                      //   props.serviceCall()
                      // )}
                      capital={"capitalize"}
                      text={"Features"}
                      width={"100%"}
                      color={"transparent"}
                    />
                  </Box>
                  <Buttons
                    textColor={colors.text}
                    font={"bold"}
                    // onClick={toggleDrawer(anchor, false, () =>
                    //   props.aboutCall()
                    // )}
                    text={"About"}
                    width={"100%"}
                    capital={"capitalize"}
                    color={"transparent"}
                  />
                  <Buttons
                    textColor={colors.text}
                    font={"bold"}
                    // onClick={toggleDrawer(anchor, false, () =>
                    //   props.testimonialCall()
                    // )}
                    text={"Testimonials"}
                    width={"100%"}
                    color={"transparent"}
                    capital={"capitalize"}
                  />
                  <Buttons
                    py={2}
                    width={"100%"}
                    textColor={colors.first}
                    radius={4}
                    target="_blank"
                    href={
                      "https://play.google.com/store/apps/details?id=online.priceplan"
                    }
                    text={"get started"}
                    capital={"capitalize"}
                    linear={`linear-gradient(to right bottom, #ffd000, ${colors.linda})`}
                  />
                </Stack>
              </Box>
            </Stack>
          </SwipeableDrawer>
        </Box>
      </Box>
    </Container>
  );
}
