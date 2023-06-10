import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Avatar, Container, Stack } from "../../../node_modules/@mui/joy/index";
import Buttons from "../../constants/Buttons";
import colors from "../../constants/Colors";

// import getBusiness from "../../../../../../apis/GetBusiness";

// import useStore from "../../../../../assets/store";

function Bottom() {
  // const navigate = useNavigate();
  // useEffect(() => {}, []);

  try {
    return (
      <Container>
        {" "}
        <Stack
          sx={{
            display: "flex",
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
          width={"100%"}
        >
          <Stack
            padding={6}
            justifyContent={"center"}
            backgroundColor={"inherit"}
            width={"100%"}
            spacing={3}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2.7}
            >
              <a
                href="https://ng.linkedin.com/company/chooya?trk=public_post_feed-actor-image"
                target="_blank"
              >
                {" "}
                <Avatar
                  component={"button"}
                  src={
                    "https://th.bing.com/th/id/R.14f8d0d8ea255a03471032d79087fdf0?rik=nO%2f6jENgayou0w&pid=ImgRaw&r=0"
                  }
                  sx={{ width: 30, height: 30 }}
                  alt={"LindaSalesPro linkedin link"}
                />
              </a>
              <a href="https://twitter.com/lindasalespro" target="_blank">
                <Avatar
                  src={
                    "https://th.bing.com/th/id/R.b909507357a3df14d1329cb0cc6b85bc?rik=PxluqXMNd1OT2A&pid=ImgRaw&r=0"
                  }
                  sx={{ width: 30, height: 30 }}
                  alt={"LindaSalesPro twitter link"}
                />{" "}
              </a>
              <a href="https://facebook.com/lindasalespro" target="_blank">
                <Avatar
                  src={
                    "https://th.bing.com/th/id/R.84669eb4301059aa602096c83a13e15f?rik=FkFOcs3CThcCJQ&pid=ImgRaw&r=0"
                  }
                  sx={{ width: 30, height: 30 }}
                  alt={"LindaSalesPro facebook link"}
                />
              </a>
              <a href="https://instagram.com/lindasalespro" target="_blank">
                <Avatar
                  src={
                    "https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                  }
                  sx={{ width: 30, height: 30 }}
                  alt={"LindaSalesPro instagram link"}
                />
              </a>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={{ xs: 4, sm: 3 }}
            >
              <Buttons
                textColor={colors.text}
                onClick={() => navigate("/")}
                font={"medium"}
                text={"Built With LindaSalesPro"}
                pwidth={0}
                color={"transparent"}
                capital={"capitalize"}
              />
              <Buttons
                textColor={colors.text}
                onClick={() => navigate("/privacypolicy")}
                font={"medium"}
                text={"Privacy policy"}
                pwidth={0}
                color={"transparent"}
                capital={"capitalize"}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    );
  } catch (e) {
    return;
  }
}

export default Bottom;
