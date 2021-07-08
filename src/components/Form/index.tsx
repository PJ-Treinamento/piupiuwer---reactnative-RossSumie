import React, {FormEvent} from "react";
import { useState } from "react";
import { Counter, CounterView, FormPiu, Piar, PiuContent } from './styles';

interface FormProps{
    values: {post: string};
    setValues:React.Dispatch<React.SetStateAction<{post: string;}>>
}


const Form:React.FC <FormProps> = ({values, setValues}) => {
    const [countChar, setCountChar]=useState(0);
    const maxLenght = 140;


    return(
        <>
        <FormPiu>
            <PiuContent maxLength={140} multiline={true} numberOfLines={5} placeholder="Lança a braba!" 
            onChangeText={text =>{
                setValues({...values, post:(text)})
                setCountChar(text.length)
            }} />
        </FormPiu>
            <CounterView>
                <Counter style={{color: countChar==140? 'red' : 'black'}}>
                    {countChar}/140
                </Counter>
            </CounterView>
        </>
    )
}

export default Form;