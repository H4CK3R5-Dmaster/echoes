import ContainerBlock from "@/components/ContainerBlock";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ScreenUnique from '@/components/informations-layouts/unicstory/ScreenUnique'
import Footer from "@/components/Footer";
import ContentStory from "@/components/informations-layouts/unicstory/ContentStory";


export default function Story() {
    const router = useRouter()

    const { id } = router.query
    const [datas, setDatas] = useState([""])

    useEffect(()=>{
        axios.get('/api/story').then(response => {
            
            response.data.storys.map((element) => {
                element.storyid === id ? setDatas(element) : ""
            })
        })
    },[id])
    
    
    return(
        <ContainerBlock>
            <ScreenUnique dataArray={datas}/>
            <ContentStory dataArray={datas}/>
            <Footer/>
        </ContainerBlock>
    )
}