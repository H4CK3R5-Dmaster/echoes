import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,Heading
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  
  const ContentStory = ({ dataArray }) => {
    const [datas, setDatas] = useState([]);
  
    useEffect(() => {
      // Mise à jour du state "datas" lorsque "dataArray" change
      if (dataArray && dataArray.details) {
        const formattedData = dataArray.details.map((item) => {
            return {
              ...item,
              content: item.content.replace(/\\n/g, "<br/>"), 
            };
          });
        setDatas(formattedData);
      }
    }, [dataArray]);
  
    return (
      <>
      <Box id="premier-titre"></Box>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#5165F6"} mt={40} >
        Les Différentes Histoires !
      </Heading>
        {datas.length > 0 ? (
          <Accordion allowToggle bg={"#5165F6"} mt={20} mx={20} color={"white"}>
            {datas.map((element, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {element.titles}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}><div dangerouslySetInnerHTML={{ __html: element.content }} /></AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          ""
        )}
      </>
    );
  };
  
  export default ContentStory;
  