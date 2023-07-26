import ContainerBlock from "@/components/ContainerBlock";
import Footer from "@/components/Footer";
import CardInfo from "@/components/informations-layouts/Cardinfo";
import Screeninfo from "@/components/informations-layouts/Screeninfo";

export default function Informations() {
    return (
        <ContainerBlock>
            <Screeninfo/>
            <CardInfo/>
            <Footer/>
        </ContainerBlock>
    )
}