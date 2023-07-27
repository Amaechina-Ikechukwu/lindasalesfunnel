// import React, { useState, ChangeEvent, FormEvent } from "react";
// import Text from "@/constants/Text";
// import TextInput from "@/constants/TextInput";
// import colors from "@/constants/Colors";
// import { styled } from "@mui/material/styles";
// import Button from "@/style/Button";
// import { Box, Stack, CardMedia } from "@mui/material";
// import Image from "next/image";

// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";

// import InputBase from "@mui/material/InputBase";
// import Buttons from "@/constants/Buttons";

// interface BusinessOffer {
//   title: string;
//   image_url: string;
// }

// interface ContactBusinessProps {
//   businessOffers: BusinessOffer[] | undefined;
// }

// function ContactBusiness(props: ContactBusinessProps) {
//   const inputs = ["First Name", "Last Name", "Phone Number", "Email Address", "Service"];
//   const convertToApiInputs = (): string[] => {
//     let apiInputs: string[] = [];
//     inputs.map((input) => apiInputs.push(input.toLowerCase().split(" ").join("-")));
//     return apiInputs;
//   };
//   const apiInputToObject = (): Record<string, string> => {
//     let emptyObject: Record<string, string> = {};
//     convertToApiInputs().map((input) => (emptyObject[input] = ""));
//     return emptyObject;
//   };
//   const apiInputToErrorObject = (): Record<string, string | undefined> => {
//     let emptyObject: Record<string, string | undefined> = {};
//     convertToApiInputs().map((input) => (emptyObject[input] = undefined));
//     return emptyObject;
//   };
//   const [inputValues, setInputValues] = useState(apiInputToObject());
//   const [errorMessage, setErrorMessage] = useState(apiInputToErrorObject());
//   const [singleOffer, setSingleOffer] = useState<BusinessOffer | undefined>();
// const [claimProgress,setClaimProgress]=useState<boolean>()
//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [name]: value,
//     }));
//   };

//   const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
//     console.log(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     let hasError = false;
//     let errors: Record<string, string> = {};
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
//       !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g.test(inputValues["email-address"].trim())
//     ) {
//       errors["email-address"] = "Email address is invalid";
//       hasError = true;
//     }

//     // Check if the phone number is valid
//     if (
//       inputValues["phone-number"].length !== 11 ||
//       (inputValues["phone-number"] !== "" && !/^\+?\d{8,}$/g.test(inputValues["phone-number"]))
//     ) {
//       errors["phone-number"] = "Phone number is invalid";
//       hasError = true;
//     }

//     // Check if a service is picked
//     if ( !singleSubscription) {
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
//         offer: singleSubscription?.unique_id || singleSubscription?.data?.unique_id,
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

//   return (
//     <Box width={"100%"}>
//       <Stack
//         width={{ xs: "100%" }}
//         paddingX={{ md: 5 }}
//         paddingY={1}
//         backgroundColor={colors.first}
//         spacing={3}
//       >
//         <Stack>
//           <Text
//             text={
//               singleOffer?.description?.length > 0
//                 ? singleOffer.discount > 0
//                   ? `Unlock up to ${singleOffer.discount}% Discount`
//                   : `This is an awesome offer`
//                 : `Discover Amazing Offers`
//             }
//             size={{ xs: 26, md: 30 }}
//             color={colors.black}
//           />
//         </Stack>
//         <div className="h-full w-full">
//           <form onSubmit={handleSubmit}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 8,
//                 }}
//               >
//                 {convertToApiInputs().map((input, index) => (
//                   input !== "service" && (
//                     <div key={index} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                       <span className="mr-2">
//                         <Text size={12} text={inputs[index]} />
//                       </span>
//                       <input
//                         key={index}
//                         className="w-full px-3 py-2 bg-offwhite rounded-xl font-poppins text-sm drop-shadow-sm h-12 placeholder-slate-200 focus:outline-none focus:border focus:border-greenBackShade focus:ring-1 focus:ring-red-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-2 mb-2"
//                         type="text"
//                         placeholder={''}
//                         id={input}
//                         name={input}
//                         required
//                         onChange={handleInputChange}
//                         value={inputValues[input]}
//                       />
//                     </div>
//                   )
//                 ))}
//               </div>
//               <Stack sx={{marginTop:2}} spacing={2}>
//                 <Stack>
//                   <Text size={12} text="Select Offer" />
//                   <Select
//                     labelId="demo-simple-select-helper-label"
//                     id="demo-simple-select-helper"
//                     value={singleOffer}
//                     label="Select offer" 
//                     placeholder='Select offer'
//                     onChange={handleChange}
//                     sx={{
//                       color: colors.text,
//                       backgroundColor: colors.offwhite,
//                       height: 50,
//                       "& .MuiInputBase-input": {
//                         "&:focus": {
//                           borderRadius: 1,
//                           height: 50,
//                           color: colors.text,
//                         },
//                       },
//                       "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
//                       {
//                         borderColor: colors.green,
//                         height: 50,
//                         color: colors.text,
//                       },
//                       "& .MuiOutlinedInput-root": {
//                         height: 50,
//                       },
//                     }}
//                   >
//                     {props.businessOffers !== undefined &&
//                       props.businessOffers?.data?.map((services) => (
//                         <Option sx={{ padding: 0 }} key={services} value={services}>
//                           <Stack
//                             backgroundColor={colors.first}
//                             direction="row"
//                             alignItems="center"
//                             width="100%"
//                             sx={{
//                               "&:hover": {
//                                 backgroundColor: colors.offwhite,
//                               },
//                             }}
//                           >
//                             <CardMedia
//                               image={services.image_url}
//                               sx={{ width: 40, height: 40 }}
//                             />
//                             <Text text={services.title} />
//                           </Stack>
//                         </Option>
//                       ))}
//                   </Select> 
//                 </Stack>
//                 <Buttons color={colors.black} fwidth={true} py={1}
//                   text={<Text color={colors.first} text='Claim Now' level='h6' />}
//                 />
//               </Stack>
//             </div>
//           </form>
//         </div>
//       </Stack>
//     </Box>
//   );
// }

// export default ContactBusiness;
