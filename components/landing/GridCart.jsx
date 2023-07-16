import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";

const GridCard = () => {
  const data = [
    {
      imageSrc: "/rp.svg",
      title: "Titre 1",
      description: "Description 1",
    },
    {
      imageSrc: "/fun.svg",
      title: "Titre 2",
      description: "Description 2",
    },
    {
      imageSrc: "/gaming.svg",
      title: "Titre 3",
      description: "Description 3",
    },
    
  ];

  return (
    <Box mt={"40"} mb={40}>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"}>
        Gros Titre
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={6} mx={10}>
        {data.map((item, index) => (
          <Box key={index} bg="#5165F6" p={4} borderRadius="md" boxShadow="md">
            <Image src={item.imageSrc} alt="Image" height={60} width={"2xl"}/>
            <Heading as="h3" size="md" mt={8} >
              {item.title}
            </Heading>
            <Text mt={2}>{item.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default GridCard;
