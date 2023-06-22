import { useEffect, useRef, useState } from "react";
import Additional from "../../assets/features/additional-removebg-preview.png";
import cloud from "../../assets/features/cloud-removebg-preview.png";
import follow from "../../assets/features/follow-removebg-preview.png";
import Import from "../../assets/features/import-removebg-preview.png";
import instant from "../../assets/features/instant-removebg-preview.png";
import manage from "../../assets/features/manage-removebg-preview.png";
import maximize from "../../assets/features/maximize-removebg-preview.png";
import track from "../../assets/features/track-removebg-preview.png";
import Image, { StaticImageData } from "next/image";
import { Box, Stack } from "@mui/joy";
import Text from "@/constants/Text";
import styles from "./LandingPage.module.css";
import { Fade, Zoom } from "@mui/material";
interface Features {
  image: StaticImageData;
  hero: string;
  text: string;
  description: string;
}
const features: Features[] = [
  {
    image: maximize,
    hero: "Maximize Customer Value",
    text: "Automated Follow-Up to upsell and cross-seloffers to one-time customers",
    description:
      "You can automate follow-up messages to upsell and cross-sell offers to one-time customers. Engage with customers who have made a previous purchase and present them with relevant additional products or services. By automating these follow-up messages, you can increase the chances of upselling and cross-selling, thereby driving additional revenue and maximizing customer lifetime value.",
  },
  {
    image: Import,
    hero: "Import or generate new leads ",
    text: "Generate leads from your website, facebook ads or import contacts from excel.",
    description:
      "Easily reach out to potential customers and expand your business. Take advantage of this capability to grow your business by reaching out to a larger audience. Whether you're running a small business or looking to expand your customer base, our app makes it easy to generate leads and drive growth. Give it a try today and see the results for yourself!",
  },
  {
    image: manage,
    hero: "Match Leads With Offers",
    text: "Create and match leads with enticing offers to convert them into customers.",
    description:
      "We provide you with the tools and resources you need to create compelling offers that will captivate your target audience. With our user-friendly interface, you can easily craft personalized campaigns tailored to the specific needs and preferences of your leads.",
  },
  {
    image: follow,
    hero: "auto lead follow-up",
    text: "automated email and sms follow-up for lead conversion using matched offers.",
    description:
      "Our automated email and SMS follow-up system revolutionizes the way you convert leads with perfectly matched offers. With this powerful tool, you can effortlessly engage and convert leads through personalized and timely communication.",
  },
  {
    image: instant,
    hero: "Instant lead messaging",
    text: "send personalized messages via whatsapp, sms or email or start a direct call",
    description:
      "You can send personalized messages via WhatsApp, SMS, email, and initiate direct calls. This allows for increased engagement, enhanced customer experience, higher conversion rates, improved customer retention, time and cost savings, multi-channel reach, and access to valuable analytics and insights.",
  },
  {
    image: track,
    hero: "Track Conversions In Real Time",
    text: "Monitor Clicks,leads, and sales conversion for each other on your phone.",
    description:
      "Monitoring clicks, leads, and sales conversion rates on your phone is an easy and convenient way to stay on top of your business performance. By keeping track of these metrics, you can gain valuable insights, identify trends, and make informed decisions to improve your business.",
  },
  {
    image: cloud,
    hero: "Secured Cloud Data Storage",
    text: "Store and access your data securely with our cloud-based data protection technology.",
    description:
      "With our cloud-based data storage solution, you can effortlessly access your data from anywhere, at any time, making it easy for you to stay connected to your business. Whether you are traveling or working remotely, our cloud-based data storage solution is designed to meet your needs and keep your data safe and secure.",
  },
  {
    image: Additional,
    hero: "Additional Services",
    text: "Set up a free lead-generating website and virtual wallet and receive 24/7 tech support",
    description:
      "Leverage the benefits of a free lead-generating website and virtual wallet. Lead-generating website helps businesses attract and capture potential customers, increasing their chances of conversion. Virtual wallet feature enables secure and convenient online transactions, providing a seamless payment experience for customers.  24/7 tech support, ensuring that businesses receive prompt assistance and uninterrupted service.",
  },
];

export default function Feature(): JSX.Element {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isElementVisible, setElementVisible] = useState<boolean>(true);
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setElementVisible(entry.isIntersecting);
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Start observing the elements when the component mounts
    document.querySelectorAll(".fade-on-scroll").forEach((element) => {
      element.classList.add("fade-hidden");
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Stop observing the elements when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack sx={{gap:12}} spacing={10}>
        {features.map((feature, index) => (
          <Fade in={isElementVisible} timeout={1000} key={feature.hero}>
            <Box>
              <Stack
                
                direction={{
                  xs: "column-reverse",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                }}
                sx={{ justifyContent: "space-between",gap:4 }}
                key={feature.hero}
              >
                <Stack spacing={2}>
                  <Text
                    text={feature.hero}
                    level="h2"
                    size={18}
                    weight="bold"
                    capital="uppercase"
                  />
                  <Text
                    size={18}
                    text={feature.text}
                    level="h5"
                    capital="capitalize"
                  />
                  <Text
                    text={feature.description}
                    level="body"
                    size={14}
                    capital="initial"
                  />
                </Stack>

                <Fade in={isElementVisible} timeout={1000} key={feature.hero}>
                  <Image
                    src={feature.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      boxShadow: "0px 0px 168px -25px rgba(143,143,143,0.6)",
                      backgroundColor: "transparent",
                    }}
                    alt={feature.hero}
                  />
                </Fade>
              </Stack>
            </Box>
          </Fade>
        ))}
      </Stack>
    </Box>
  );
}
