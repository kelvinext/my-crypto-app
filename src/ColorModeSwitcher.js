import React,{useState} from 'react';
import { useColorMode, useColorModeValue, IconButton} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [myColor, setMyColor] = useState("black");
  const colorBackground =()=>{
if(myColor === "black"){
  setMyColor("white")
}
else {
  setMyColor("black")
}
  } 
  return (
    <IconButton
    bgColor={myColor}
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      pos={"fixed"}
top={"4"}
right={"4"}
      // onClick={toggleColorMode}
      onClick={() => {
        toggleColorMode();
        colorBackground();
      }}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
