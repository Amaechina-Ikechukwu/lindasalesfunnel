import * as React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "../../../node_modules/@mui/material/index";
import { Box, Stack } from "../../../node_modules/@mui/joy/index";
import colors from "../../constants/Colors";
import Text from "../../constants/Text";

const Accordion = MuiAccordion;

const AccordionSummary = MuiAccordionSummary;

const AccordionDetails = MuiAccordionDetails;

export default function AskedQuestions() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const questions = [
    {
      question: "What is LindaSalesPro?",
      answer:
        "LindaSalesPro is a mobile CRM app designed to empower sales and marketing professionals to generate more leads online and effortlessly follow up with them via WhatsApp, calls, SMS, or email. Organize leads on your mobile phone and activate automated, personalized email follow-up.",
    },
    {
      question: "How does LindaSalesPro work?",
      answer:
        "LindaSalesPro works by allowing you to create Lead-Gen campaign links that capture user data and automatically follow up with potential leads. This streamlines your sales process and increases conversion rates.",
    },
    {
      question: "Is LindaSalesPro User-Friendly?",
      answer:
        "Yes, LindaSalesPro is designed to be user-friendly and easy to set up and manage. You don't need any technical expertise to use it.",
    },
    {
      question: "Can I try LindaSalesPro for free?",
      answer:
        "Yes, you can sign up for LindaSalesPro for free and start generating and converting leads right away.",
    },
    {
      question:
        "What makes LindaSalesPro a unique lead generation and conversion tool?",
      answer:
        "LindaSalesPro is unique in that it combines lead generation and conversion into one app, making it easier and more effective for businesses. Plus, with its built-in automation, it saves businesses time and money in the long run.",
    },
  ];

  return (
    <Box>
      <Stack spacing={5} alignItems="center">
        <Text
          level="h3"
          size={24}
          weight="bold"
          color={colors.black}
          text="Frequently Asked Questions"
          alignItems="center"
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {questions.map((question, index) => (
            <Box key={`panel${index}`}>
              <Accordion
                sx={{ borderRadius: 3 }}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  sx={{ paddingY: 1, backgroundColor: colors.lightash }}
                  expandIcon={
                    <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Text text={question.question} />
                </AccordionSummary>
                <AccordionDetails>
                  <Text lineSpacing={2} text={question.answer} />
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
