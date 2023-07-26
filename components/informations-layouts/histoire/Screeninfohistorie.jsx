import { Box, Center, Image, Text, Button } from "@chakra-ui/react";

const Screeninfohistorie = () => {
  const handleButtonClick = () => {
    const firstTitle = document.querySelector("#premier-titre");
    if (firstTitle) {
      firstTitle.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box bg="#2A2B2E">
      <Box
        minHeight="80vh"
        bg={`url('/icons-info/WE2J.gif')`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <Box textAlign="center">
            <Image
              src="/logo.png"
              alt="Logo"
              boxSize="250px"
              mx="auto"
              borderRadius={"25%"}
            />
            <Text color="#fff" fontSize={[34, 64]} mt={4}>
              Histoires
            </Text>
          </Box>
        </Center>
      </Box>
      <Box backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center" mt={20}>
        <Image
          src="/icons-info/arrow.png"
          alt="Flèche vers le bas"
          boxSize={"60px"}
          cursor="pointer"
          onClick={handleButtonClick}
        />
      </Box>
    </Box>
  );
};

export default Screeninfohistorie;
