import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";

const GridCard = () => {
  const data = [
    {
      imageSrc: "/rp.svg",
      title: "Rôle play !",
      description: "Echoes propose du rôle play français immersif dans un univers singulier et captivant. Plongez dans une aventure unique où vos actions façonnent le destin du monde.",
    },
    {
      imageSrc: "/fun.svg",
      title: "Rencontrez des gens !",
      description: "Echoes est bien plus qu'un simple serveur de rôle play : c'est aussi un espace chaleureux où l'on peut faire des rencontres amicales et favoriser de solides liens avec tous les membres. Rejoignez-nous pour vivre des expériences inoubliables et créer des souvenirs inestimables.",
    },
    {
      imageSrc: "/gaming.svg",
      title: "Amusez vous !",
      description: "Echoes est un serveur vibrant et divertissant, où une myriade d'événements passionnants sont régulièrement organisés pour vous offrir des moments inoubliables et des sourires à profusion. Plongez dans notre communauté animée et profitez de l'amusement à chaque instant !",
    },
    
  ];

  return (
    <Box mt={"40"} mb={40}>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"}>
        Principes d&apos;Echoes
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={6} mx={20}>
        {data.map((item, index) => (
          <Box key={index} bg="#5165F6" p={8} borderRadius="md" boxShadow="md" color={"white"}>
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
