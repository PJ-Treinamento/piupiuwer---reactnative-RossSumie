import React, {FormEvent} from "react";
import { useState } from "react";
import { FormPiu, Piar, PiuContent } from './styles';

interface FormProps{
    values: {post: string};
    setValues:React.Dispatch<React.SetStateAction<{post: string;}>>
}


const Form:React.FC <FormProps> = ({values, setValues}) => {
    const [countChar, setCountChar]=useState(0);
    const maxLenght = 140;


    return(
        <FormPiu>
            <PiuContent multiline={true} numberOfLines={10} placeholder="Lança a braba!" 
            onChangeText={text =>{
                setValues({...values, post:(text)})
                setCountChar(text.length)
            }} />
        </FormPiu>
    )
}

export default Form;