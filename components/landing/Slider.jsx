import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = () => {
  const data = [
    {
      imageSrc: "/Mother-telling-story-to-her-daughter.svg",
      title: "Histoire",
      description: "Description 1",
    },
    {
      imageSrc: "/characters.svg",
      title: "Héros",
      description: "Description 2",
    },
    {
      imageSrc: "/map.svg",
      title: "Carte",
      description: "Description 3",
    },
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box maxWidth="100%" mx={10}>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"}>
        Gros Titre
      </Heading>
      <Box m={8}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box key={index} p={4} bg="#5165F6" borderRadius="md" boxShadow="md" marginRight={4}>
              <Flex height="100%" display="flex" flexDirection="column" justifyContent="space-between" align="center"
      justify="center"
      direction="column">
                <Image src={item.imageSrc} alt="Image" objectFit="cover" borderRadius="md" width={"30%"}/>
                <Box p={2}>
                  <Heading as="h3" size="md" textAlign="center" mt={4}>
                    {item.title}
                  </Heading>
                  <Text textAlign="center" mt={2}>
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderCard;
