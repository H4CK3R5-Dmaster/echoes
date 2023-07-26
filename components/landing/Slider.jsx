import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextLink from "next/link";

const SliderCard = () => {
  const data = [
    {
      imageSrc: "/Mother-telling-story-to-her-daughter.svg",
      title: "Histoire",
      description: "Description 1",
      height: "20%",
      link:"/informations/histoires"
    },
    {
      imageSrc: "/characters.svg",
      title: "Héros",
      description: "Description 2",
      height: "21%",
      link:"/"
    },
    {
      imageSrc: "/map.svg",
      title: "Carte",
      description: "Description 3",
      height: "20%",
      link:"/"
    },
    {
      imageSrc: "/concept.svg",
      title: "Concepte",
      description: "Description 3",
      height: "25%",
      link:"/"
    },
    {
      imageSrc: "/rules.svg",
      title: "Règles",
      description: "Description 3",
      height: "25%",
      link:"/"
    },
    {
      imageSrc: "/commands.svg",
      title: "Commandes",
      description: "Description 3",
      height: "25%",
      link:"/"
    },
    {
      imageSrc: "fun_card.svg",
      title: "Fun",
      description: "Description 3",
      height: "15%",
      link:"/"
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
        Ce qu&apos;il faut savoir !
      </Heading>
      <Box m={8}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box
              key={index}
              p={4}
              bg="#5165F6"
              borderRadius="md"
              boxShadow="md"
              marginRight={4}
              color={"white"}
            >
              <NextLink href={item.link}>
                <Flex
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  align="center"
                  justify="center"
                  direction="column"
                >
                  <Image
                    src={item.imageSrc}
                    alt="Image"
                    objectFit="cover"
                    borderRadius="md"
                    width={item.height}
                  />
                  <Box p={2}>
                    <Heading as="h3" size="md" textAlign="center" mt={4}>
                      {item.title}
                    </Heading>
                    <Text textAlign="center" mt={2}>
                      {item.description}
                    </Text>
                  </Box>
                </Flex>
              </NextLink>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderCard;
