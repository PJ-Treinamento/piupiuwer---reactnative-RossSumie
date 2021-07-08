import React, {useState} from 'react';
import { Cancel, Piar, PiarText, Topbar } from './styles';
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";
import Form from '../../components/Form';
import { Piu } from '../../components/Piu';
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { useAuth } from "../../hooks/contexts/auth";
import { useRoute } from '@react-navigation/native';

interface NewPiuProps{
    pius: Piu[],
    setPius: React.Dispatch<React.SetStateAction<Piu[]>>
}


const NewPiu: React.FC <NewPiuProps> = ({pius, setPius}) =>{
    
    const [values, setValues] = useState({
        post: '',
    })

    const {navigate} = useNavigation();
    
    const {params: setRenderAgain}:any = useRoute();

    function handleNavigationToFeed(){
        navigate('BottomTabs');
    }

    const handleSubmit = async () =>{

        const postResponse:AxiosResponse<Piu> = await api.post('/pius', {
            text: values.post},
        )
        const {text} = postResponse.data
        console.log(text)
        setRenderAgain((c:boolean) => !c)
        handleNavigationToFeed();
        
    }

    return(
        <>
            <Topbar>
                <Cancel onPress={handleNavigationToFeed}>
                    <FontAwesome name="times" size={27} color={"#FFAC2F"}/>
                </Cancel>
                <Piar onPress={handleSubmit}>
                    <PiarText>
                        Piar
                    </PiarText>
                </Piar>
            </Topbar>
            <Form values={values} setValues={setValues}/>
        </>
    )
}
export default NewPiu;