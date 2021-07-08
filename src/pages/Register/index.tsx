import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Back, Buttontext, Cadastrar, Inputs, RegisterField, RegisterImg, TextInputField, TextInputTitle, Title } from './styles';
import RegImg from '../../assets/images/login-01.png'
import {useAuth} from '../../hooks/contexts/auth';
import { useCallback } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

function Register(){
    const [reg, setReg] = useState({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
        email:'',
        photo:'',
        bio:'',
    }) 
    const handleRegister = useCallback(async () =>{
        const {login} = useAuth();
        const cred= useState({
            email: reg.email,
            password: reg.password,
        })
        if(
            reg.email != "" &&
            reg.password != "" &&
            reg.firstName != "" &&
            reg.lastName != "" &&
            reg.username != "" &&
            reg.photo != "" &&
            reg.bio != ""
        ){
            await api.post("/register",{
                first_name: reg.firstName,
                last_name: reg.lastName,
                email: reg.email,
                photo: reg.photo,
                about: reg.bio,
                password: reg.password,
                username: reg.username,
            });
            login(cred, 1, 1);
        } else{
            alert('Preencha todos os campos!')
        }
    },[reg.email, reg.password, reg.firstName, reg.lastName, reg.username, reg.photo, reg.bio])
        const {navigate} = useNavigation();
        function handleNavigateBack(){
            navigate('Login')
        }
    return(
        <>
            <RegisterImg source={RegImg}>
                <Back onPress={() => handleNavigateBack()}>
                    <FontAwesome name="arrow-left" size={30} color={"#FFFFFF"}/>
                </Back>
                <Title>
                    Cadastro
                </Title>
                <RegisterField/>
            </RegisterImg>
            <Inputs>
                <TextInputTitle>
                    NOME
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, firstName:(text)})}/>
                <TextInputTitle>
                    SOBRENOME
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, lastName:(text)})}/>
                <TextInputTitle>
                    NOME DE USUÁRIO
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, username:(text)})}/>
                <TextInputTitle>
                    SENHA
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, password:(text)})}/>
                <TextInputTitle>
                    EMAIL
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, email:(text)})}/>
                <TextInputTitle>
                    LINK PARA FOTO
                </TextInputTitle>
                <TextInputField onChangeText={text=>setReg({...reg, photo:(text)})}/>
                <TextInputTitle>
                    UMA FRASE PRA SUA BIO
                </TextInputTitle>
                <TextInputField maxLength={140} onChangeText={text=>setReg({...reg, bio:(text)})}/>
                <Cadastrar>
                    <Buttontext onPress={handleRegister}>
                        Tudo certo!
                    </Buttontext>
                </Cadastrar>
            </Inputs>
        </>
    )
}

export default Register;