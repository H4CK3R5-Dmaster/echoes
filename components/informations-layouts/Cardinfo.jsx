import { Box, Image, Text, Link, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

const CardInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
   
    axios
      .get("/api/getlink")
      .then((response) => setData(response.data.links))
      .catch((error) => console.error(error));
  }, []);

 
  if (!data) {
    return <div>Chargement...</div>;
  }

  return (
    <>
    <Box id="premier-titre"></Box>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"} mt={40} >
        Informations importantes !
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-between" >
        {data.map((item, index) => (
          <Box
            key={index}
            bg="#5165F6"
            p={4}
            borderRadius="md"
            boxShadow="md"
            flexBasis="30%" // Définissez la largeur des cartes pour s'ajuster à trois cartes sur la même ligne
            my={2}
            mx={[0,4]} // Marge verticale entre les cartes
          >
            <Image
              src={item.image}
              alt="Image de la carte"
              boxSize="250px"
              mx="auto"
            />
            <Text fontSize="xl" fontWeight="bold" mt={4} textAlign="center" color={"white"}>
              {item.titre}
            </Text>
            <Text mt={2} textAlign="center" color={"white"}>
              {item.description}
            </Text>
            <Link
              href={item.link}
              display="block" // Mettez en bloc pour occuper tout l'espace disponible
              textAlign="right"
              mt={4}
              color="white" // Définissez la couleur du lien
              _hover={{ textDecoration: "underline" }} // Effet de soulignement au survol
            >
              Y accéder
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default CardInfo;
