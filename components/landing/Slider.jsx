import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
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
        {
            imageSrc: "/image3.jpg",
            title: "Titre 3",
            description: "Description 3",
        },
        {
            imageSrc: "/image3.jpg",
            title: "Titre 3",
            description: "Description 3",
        },
        {
            imageSrc: "/image3.jpg",
            title: "Titre 3",
            description: "Description 3",
        },
        {
            imageSrc: "/image3.jpg",
            title: "Titre 3",
            description: "Description 3",
        },
        // Ajoutez plus d'éléments de données si nécessaire
    ];

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 2,
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
        <Box maxWidth="70%" mx={[20, 64]} mt={20}>
            <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"}>
                Gros Titre
            </Heading>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <Box key={index} p={4} bg="#5165F6" borderRadius="md" boxShadow="md"  >
                        <Image src={item.imageSrc} alt="Image" />
                        <Heading as="h3" size="md" mt={4}>
                            {item.title}
                        </Heading>
                        <Text mt={2}>{item.description}</Text>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SliderCard;
