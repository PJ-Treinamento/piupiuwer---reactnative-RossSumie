import React, {FormEvent} from "react";
import { useState } from "react";
import { FormPiu, Piar, PiuContent } from './styles';
import api from "../../services/api";
import { Piu } from "../Piu";
import { AxiosResponse } from "axios";
import { useAuth } from "../../hooks/contexts/auth";

interface FormProps{
    pius: Piu[],
    setPius: React.Dispatch<React.SetStateAction<Piu[]>>
}

const Form:React.FC <FormProps> = ({pius, setPius}) => {
    const [countChar, setCountChar]=useState(0);
    const maxLenght = 140;

    const [values, setValues] = useState({
        post: '',
    })

    const handleSubmit = async () =>{

        const postResponse:AxiosResponse<Piu> = await api.post('/pius', {
            text: values.post},
        )
        const {text} = postResponse.data
        console.log(text)
        
        const newPiu: Piu = {
            id:postResponse.data.id,
            text:values.post,
            likes:[],
            user: postResponse.data.user,
            created_at: postResponse.data.created_at,
            updated_at: postResponse.data.updated_at

        }
        setPius([newPiu, ...pius])
    }

    return(
        <FormPiu>
            <PiuContent multiline={true} numberOfLines={10} placeholder="Lança a braba!" 
            onChangeText={text =>{
                setValues({...values, post:(text)})
                setCountChar(text.length)
            }} />
            <Piar onPress={handleSubmit}>SÓ VAPO</Piar>
        </FormPiu>
    )
}

export default Form;