import { Box, Center, Image, Text } from "@chakra-ui/react";

const ScreenComponent = () => {
  return (
    <Box bg="#000">
      <Box
        minHeight="100vh"
        bg={`url('/screen.gif')`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <Box textAlign="center">
            <Image src="/logo.png" alt="Logo" boxSize="250px" mx="auto" borderRadius={"25%"} />
            <Text color="#fff" fontSize="xl" mt={4}>
              Titre du Composant
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default ScreenComponent;
