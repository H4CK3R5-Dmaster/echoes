import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = () => {
  const data = [
    {
      imageSrc: "/image1.jpg",
      title: "Titre 1",
      description: "Description 1",
    },
    {
      imageSrc: "/image2.jpg",
      title: "Titre 2",
      description: "Description 2",
    },
    {
      imageSrc: "/image3.jpg",
      title: "Titre 3",
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
                <Image src={item.imageSrc} alt="Image" objectFit="cover" borderRadius="md" />
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
