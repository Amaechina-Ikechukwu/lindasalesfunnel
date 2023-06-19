// import { Box, CardMedia, Stack } from "@mui/material";
// import React, { useEffect } from "react";

// import { useState } from "react";
// import Text from "../../../constants/Text";
// import TextInput from "../../../constants/TextInput";

// import colors from "../../../constants/Colors";
// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
// // import shallow from "zustand/shallow";
// // import useStore from "../../../../../assets/store";
// import { styled } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import Buttons from "@/constants/Buttons";

// // import DiscountClaimSuccess from "../DiscountClaimSuccess";

// function ContactBusiness(props: any) {
//   const inputs = ["Full Name", "Phone Number", "Email Address", "Service"];
//   //converts input to api compatible parameters
//   const convertToApiInputs = () => {
//     let apiInputs = [];
//     inputs.map((input) =>
//       apiInputs.push(input.toLowerCase().split(" ").join("-"))
//     );
//     return apiInputs;
//   };
//   // converts apiinput to input for useState
//   const apiInputToObject = () => {
//     let emptyObject = {};
//     convertToApiInputs().map((input) => (emptyObject[input] = ""));
//     return emptyObject;
//   };
//   const apiInputToErrorObject = () => {
//     let emptyObject = {};
//     convertToApiInputs().map((input) => (emptyObject[input] = undefined));
//     return emptyObject;
//   };
//   const [inputValues, setInputValues] = useState(apiInputToObject());
//   const [errorMessage, setErrorMessage] = useState(apiInputToErrorObject());
//   const [openModal, setOpenModal] = useState(false);
//   const [claimProgress, setClaimProgress] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [name]: value,
//     }));
//   };
//   const navigate = useNavigate();
//   const {
//     subscriptionCall,
//     singleSubscription,
//     setSingleSubscription,
//     business,
//     setLeadId,
//     setProfile,
//   } = useStore(
//     (state) => ({
//       subscriptionCall: state.subscriptionCall,
//       singleSubscription: state.singleSubscription,
//       setSingleSubscription: state.setSingleSubscription,
//       business: state.business,
//       setLeadId: state.setLeadId,
//       setProfile: state.setProfile,
//     }),
//     shallow
//   );
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let hasError = false;
//     let errors = {};
//     setClaimProgress(true);
//     // Check if the inputs are empty
//     for (const input of inputs) {
//       const inputName = input.toLowerCase().split(" ").join("-");
//       if (inputValues[inputName] === "" && inputName !== "service") {
//         errors[inputName] = `${input} is required`;
//         hasError = true;
//       }
//     }

//     // Check if the email address is valid
//     if (inputValues["full-name"].split(" ").length < 2) {
//       errors["full-name"] = "Please add your full name";
//       hasError = true;
//     }

//     if (
//       inputValues["email-address"] !== "" &&
//       !/^[\w-.]+@([\w-]+.)+[\w-]{2,}$/g.test(
//         inputValues["email-address"].trim()
//       )
//     ) {
//       errors["email-address"] = "Email address is invalid";
//       hasError = true;
//     }

//     // Check if the phone number is valid
//     if (
//       inputValues["phone-number"].length !== 11 ||
//       (inputValues["phone-number"] !== "" &&
//         !/^\+?\d{8,}$/g.test(inputValues["phone-number"]))
//     ) {
//       errors["phone-number"] = "Phone number is invalid";
//       hasError = true;
//     }
//     if (
//       (any.from == false && singleSubscription == undefined) ||
//       singleSubscription == undefined
//     ) {
//       errors["service"] = "Please pick a service";
//       hasError = true;
//     }

//     if (hasError) {
//       setErrorMessage(errors);
//       setClaimProgress(false);
//     } else {
//       setProfile(inputValues);
//       claimOffer();
//     }
//   };

//   const handleChange = (event, newValue) => {
//     setSingleSubscription(newValue);
//   };

//   const claimOffer = () => {
//     fetch(`${import.meta.env.VITE_DEV_LINK}/claim-offer`, {
//       method: "POST",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//       body: JSON.stringify({
//         firstname: inputValues["full-name"].split(" ")[0],
//         lastname: inputValues["full-name"].split(" ")[0],
//         phone: inputValues["phone-number"],
//         email: inputValues["email-address"],
//         offer:
//           singleSubscription?.unique_id || singleSubscription?.data?.unique_id,
//       }),
//       redirect: "follow",
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         setLeadId(result.data.lead_id), setOpenModal(true);
//         setClaimProgress(false);
//       })
//       .catch((error) => {
//         setClaimProgress(false);
//       });
//   };

//   useEffect(() => {}, []);

//   return (
//     <Box width={"100%"}>
//       <Stack
//         width={{ xs: "100%" }}
//         paddingX={{ md: 5 }}
//         paddingY={1}
//         backgroundColor={colors.first}
//         spacing={3}
//       >
//         <Stack alignItems={props.from ? "center" : "flex-start"}>
//           {/* <Text
//             text={
//               !props.from
//                 ? singleSubscription?.description?.length > 0
//                   ? singleSubscription.discount > 0
//                     ? `Unlock up to ${singleSubscription.discount}% Discount`
//                     : `This is an awesome offer`
//                   : `Discover Amazing Offers`
//                 : "Confirm your interest"
//             }
//             size={{ xs: 26, md: 30 }}
//             align={props.from ? "center" : "left"}
//             color={colors.black}
//           /> */}
//         </Stack>

//         {convertToApiInputs().map(
//           (input, index) =>
//             input !== "service" && (
//               <TextInput
//                 twidth={"100%"}
//                 swidth={"100%"}
//                 name={input}
//                 fontSize={16}
//                 error={errorMessage[input.toLowerCase().replace(" ", "")]}
//                 label={inputs[index]}
//                 value={inputValues[input.toLowerCase().replace(" ", "")]}
//                 onChange={handleInputChange}
//               />
//             )
//         )}
//         {!props.from && (
//           <Stack>
//             <ChooyaText text="Select Offer" />
//             {/* <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={singleSubscription}
//               label="Select offer"
//               defaultValue={subscriptionCall?.data[0]}
//               onChange={handleChange}
//               sx={{
//                 color: colors.text,
//                 height: 50,
//                 "& .MuiInputBase-input": {
//                   "&:focus": {
//                     borderRadius: 1,
//                     height: 50,
//                     color: colors.text,
//                   },
//                 },
//                 "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
//                   {
//                     borderColor: colors.green,
//                     height: 50,
//                     color: colors.text,
//                   },
//                 "& .MuiOutlinedInput-root": {
//                   height: 50,
//                 },
//               }}
//             >
//               {subscriptionCall !== undefined &&
//                 subscriptionCall?.data?.map((services) => (
//                   <Option sx={{ padding: 0 }} key={services} value={services}>
//                     <Stack
//                       backgroundColor={colors.first}
//                       direction="row"
//                       alignItems="center"
//                       width="100%"
//                       sx={{
//                         "&:hover": {
//                           backgroundColor: colors.offwhite,
//                         },
//                       }}
//                     >
//                       <CardMedia
//                         image={services.image_url}
//                         sx={{ width: 40, height: 40 }}
//                       />
//                       <ChooyaText text={services.title} />
//                     </Stack>
//                   </Option>
//                 ))}
//             </Select> */}
//           </Stack>
//         )}

//         {/* {singleSubscription?.description?.length > 0 ? (
//           <Stack direction={"row"} alignItems={"flex-end"}>
//             <p
//               style={{
//                 fontFamily: "Poppins",
//                 fontWeight: "light",
//                 fontSize: 12,
//                 lineHeight: 2,
//                 color: colors.text,
//               }}
//             >
//               {singleSubscription?.description?.length > 150
//                 ? singleSubscription?.description.slice(0, 150) + "..."
//                 : singleSubscription?.description}
//               <button
//                 onClick={
//                   singleSubscription.unique_id == undefined
//                     ? () => setErrorMessage({ service: "Please add service" })
//                     : () =>
//                         navigateToSingleSubscription(
//                           singleSubscription.unique_id
//                         )
//                 }
//                 style={{
//                   fontFamily: "Poppins",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: 12,
//                   backgroundColor: "inherit",
//                   lineHeight: 2,
//                   color: colors.black,

//                   textDecoration: "underline",
//                 }}
//               >
//                 View More
//               </button>
//             </p>
//           </Stack>
//         ) : null} */}
//         <Buttons
//           text={"Claim your discount now"}
//           swidth={"100%"}
//           width={"100%"}
//           pheight={2}
//           disabled={claimProgress}
//           onClick={handleSubmit}
//           radius={10}
//           textColor={claimProgress && colors.text}
//           color={claimProgress ? colors.first : colors.black}
//           capital={"initial"}
//         />
//         {/* {props.from && (
//           <Text
//             text="By clicking on activate, I agree to the
// Terms & Conditions for this Offer"
//             align="center"
//             size={12}
//             weight="light"
//           />
//         )}
//         <Stack width={"100%"}>
//           <DiscountClaimSuccess
//             open={openModal}
//             onClose={() => setOpenModal(false)}
//           />
//         </Stack> */}
//       </Stack>
//     </Box>
//   );
// }

// export default ContactBusiness;
