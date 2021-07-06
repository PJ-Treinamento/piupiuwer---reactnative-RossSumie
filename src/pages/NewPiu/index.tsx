import React, {useState} from 'react';
import { Cancel, Piar, PiarText, Topbar } from './styles';
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";
import Form from '../../components/Form';
import { Piu } from '../../components/Piu';



function NewPiu(){
    const[pius, setPius] = useState<Piu[]>([])
    const {navigate} = useNavigation();

    function handleNavigationToFeed(){
        navigate('Feed');
    }

    return(
        <>
            <Topbar>
                <Cancel onPress={handleNavigationToFeed}>
                    <FontAwesome name="times" size={27} color={"#FFAC2F"}/>
                </Cancel>
                <Piar>
                    <PiarText>
                        Piar
                    </PiarText>
                </Piar>
            </Topbar>
            <Form pius={pius} setPius={setPius}/>
        </>
    )
}
export default NewPiu;