import ContainerBlock from "@/components/ContainerBlock";
import CardHistorie from "@/components/informations-layouts/histoire/CardHistorie";
import Screeninfohistorie from "@/components/informations-layouts/histoire/Screeninfohistorie";
import Footer from "@/components/Footer";

export default function Stories() {
  return (
    <ContainerBlock>
      <Screeninfohistorie />
      <CardHistorie />
      <Footer/>
    </ContainerBlock>
  );
}
