import { Box, Image, Text, Link, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import NextLink from "next/link";

const CardHistorie = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/story")
      .then((response) => setData(response.data.storys))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Box id="premier-titre"></Box>
      <Heading
        as="h2"
        size="2xl"
        textAlign="center"
        mb={20}
        color={"#5165F6"}
        mt={40}
      >
        Différentes histoires !
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {data.map((item) => (
          <Box
            key={item.storyid}
            bg="#5165F6"
            p={4}
            borderRadius="md"
            boxShadow="md"
            flexBasis="30%"
            my={2}
            mx={[0, 8]}
          >
            <NextLink
              key={item.storyid}
              href={`/informations/histoires/storyunic/${item.storyid}`}
            >
              <Image
                src={item.image}
                alt="Image de la carte"
                boxSize="150px"
                mx="auto"
                borderRadius={10}
              />
              <Text
                fontSize="xl"
                fontWeight="bold"
                mt={4}
                textAlign="center"
                color={"white"}
              >
                {item.title}
              </Text>
            </NextLink>

            <Text mt={2} textAlign="center" color={"white"}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default CardHistorie;
