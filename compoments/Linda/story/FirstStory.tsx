import React, { useState } from "react";
import { Box, Stack, IconButton } from "@mui/material";
import Text from "@/constants/Text";
import Buttons from "@/constants/Buttons";
import colors from "@/constants/Colors";
import KeysWears from "@/assets/features/keys-wears.png";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Image from 'next/image';
import TakeOne from './TakeOne';
import TakeTwo from './TakeTwo'
import TakeThree from './TakeThree'
import TakeFour from './TakeFour'
import TakeFive from "./TakeFive"

export default function FirstStory() {
  const businesses = [
    {
      image: "",
      name: "Keys Wears",
      type: "LifeStyle and Fashion",
    },
  ];
  // state management
  const [step, setStep] = useState<number>(0);

  const handleStepChange = (step) => {
    setStep(step);
  };
  const handleNextStepChange=()=>{
    if(step == 5){
      setStep(5)
    }else{
      setStep((prev) => prev+1)
    }

    
  }
  const handlePrevStepChange=()=>{
    if(step == 1){
      setStep(1)
    }
    else{
      setStep((prev) =>prev-1)
    }
    
  }

  return (
    <Box>
      {step === 0 && (
        <Stack>
          <Stack spacing={8}>
            <Text level="body" size={20} text="Here stories from businesses" />
            <Box>
              {businesses.map((business, index) => {
                return (
                  <Box key={index}>
                    <Buttons
                      onClick={() => handleStepChange(1)}
                      shadow="0px 0px 40px 0px rgba(20,19,20,0.2)"
                      color={colors.first}
                      fwidth={true}
                    >
                      <Stack
                        sx={{ alignItems: "center", width: "100%" }}
                        spacing={2}
                        direction="row"
                      >
                        <Image
                          src={KeysWears}
                          alt={business.name}
                          style={{
                            height: 'auto',
                            width: 50,
                            borderRadius: 7,
                          }}
                          width={50}
                          height={50}
                        />
                        <Stack>
                          <Text
                            level="h5"
                            text={business.name}
                            color={colors.text}
                          />
                          <Text
                            level={"p"}
                            text={business.type}
                            color={colors.backShade}
                          />
                        </Stack>
                      </Stack>
                    </Buttons>
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Stack>
      )}
      <Stack spacing={2}>
        {step > 0 && (
          <Stack sx={{ alignItems: 'center' }} direction="row">
            <Image
              src={KeysWears}
              style={{ width: 100, height: 'auto', borderRadius: 10 }}
              alt={"Keys Wears"}
              width={100}
              height={100}
            />
            <Stack>
              <Text level="h6" text="Keys Wears" />
              <Text level={"p"} size='12' weight="thin" text="Fashion and Clothing" />
            </Stack>
          </Stack>
        )}
        {step === 1 && <TakeOne />}
        {step === 2 && <TakeTwo/>}
        {step === 3 && <TakeThree/>}
        {step === 4 && <TakeFour/>}
        {step === 5 && <TakeFive/>}
      </Stack>
      <Stack sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Stack direction='row' sx={{ position: 'fixed', bottom: 60 }} spacing={2}>
          <IconButton onClick={()=>handlePrevStepChange()} sx={{ '&:hover': { backgroundColor: colors.greenBackShade } }}>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton onClick={() =>handleNextStepChange()} sx={{ backgroundColor:step==1 && colors.greenBackShade,'&:hover': { backgroundColor: colors.greenBackShade } }}>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
