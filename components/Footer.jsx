import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex
      bg="#5165F6"
      py={4}
      color="white"
      mt={40}
      align="center"
      justify="center"
      direction="column"
    >
      <NextLink href="/">
       
          <Image src="/discord.gif" alt="Logo" boxSize="70px" />
        
      </NextLink>
      <Text textAlign="center" mt={2} fontSize={"medium"}>
        Rejoignez nous sur Discord !
      </Text>
    </Flex>
  );
};

export default Footer;
