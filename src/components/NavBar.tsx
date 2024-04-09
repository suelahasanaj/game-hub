import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  //make the nav bar to the full screen width

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Box w="full">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
