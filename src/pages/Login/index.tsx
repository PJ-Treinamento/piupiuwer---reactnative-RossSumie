import React, { useState, useCallback } from 'react';
import {Container, Title, Header, Inputs, Entrar, Buttontext, Textinput, SimpleText, OrangeText, Loginimg} from './styles';
import {useAuth} from '../../hooks/contexts/auth';
import loginImg from '../../assets/images/login-01.png'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {Text} from 'react-native'


function Login(){
    const {login, token} = useAuth();
    const[countEmail, setCountEmail]=useState(0);
    const[countPassword, setCountPassword]=useState(0);
    const {navigate} = useNavigation();
    const [error, setError] = useState('');


    const [cred, setCred] = useState({
        email: '',
        password: ''
    })
    
    const handleLogin = useCallback(async () =>{
        try{
            await login(cred, countEmail, countPassword);
            navigate('Feed');
        }
        catch(err){
            setError(err.message)
        }
    },[countEmail, countPassword, cred, login]);

    useEffect(()=>{
        if (token) navigate('BottomTabs')
    },[token])


    return( 
        <Container>
            <Header>
                <Loginimg source ={loginImg}>
                    <Title>
                        Login
                    </Title> 
                </Loginimg>
            </Header>
            <Inputs>
                <Textinput
                placeholder = "Email"
                value={cred.email}
                onChangeText={text => { 
                    setCred({ ...cred, email:(text)})
                    setCountEmail(text.length)
                    }} 
                />
                <Textinput
                placeholder = "Password"
                value={cred.password}
                onChangeText={text => { 
                    setCred({...cred, password:(text)})
                    setCountPassword(text.length)
                    }} 
                />
                <Entrar onPress={handleLogin}>
                    <Buttontext>
                        Entrar
                    </Buttontext>
                </Entrar>
                <Text>
                    {error}
                </Text>
                <SimpleText>
                    AINDA NÃO TEM SUA CONTA?
                </SimpleText>
                <OrangeText>
                    CADASTRE-SE
                </OrangeText>
            </Inputs>
        </Container>
    )
}

export default Login;