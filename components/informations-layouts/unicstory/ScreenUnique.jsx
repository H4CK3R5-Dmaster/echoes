import { Box, Center, Image, Text, Button } from "@chakra-ui/react";

const ScreenUnique = ({ dataArray }) => {
    const handleButtonClick = () => {
      const firstTitle = document.querySelector("#premier-titre");
      if (firstTitle) {
        firstTitle.scrollIntoView({ behavior: "smooth" });
      }
    };


  return (
    <>
      {dataArray ? (
        <Box bg="#2A2B2E">
          
            <>
              <Box
                minHeight="80vh"
                
                backgroundPosition="center"
                display="flex"
                alignItems="center"
               
                justifyContent="center"
                backgroundColor={"#5165F6"}
              >
                <Center>
                  <Box textAlign="center">
                    <Image
                      src={dataArray.image ? dataArray.image : ""}
                      alt="Logo"
                      boxSize="250px"
                      mx="auto"
                      borderRadius={"25%"}
                    />
                    <Text color="#fff" fontSize={[34, 64]} mt={4} >
                      {dataArray.title}
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box
                backgroundPosition="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt={20}
              >
                <Image
                  src="/icons-info/arrow.png"
                  alt="Flèche vers le bas"
                  boxSize={"60px"}
                  cursor="pointer"
                  onClick={handleButtonClick}
                />
              </Box>
            </>
          
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default ScreenUnique;
