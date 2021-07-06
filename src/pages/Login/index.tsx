import React, { useState, useCallback } from 'react';
import {Container, Title, Header, Inputs, Entrar, Buttontext, Textinput, Loginimg} from './styles';
import {useAuth} from '../../hooks/contexts/auth';
import loginImg from '../../assets/images/login-01.png'


function Login(){
    const {login} = useAuth();
    const[countEmail, setCountEmail]=useState(0);
    const[countPassword, setCountPassword]=useState(0);


    const [cred, setCred] = useState({
        email: '',
        password: ''
    })
    
    const handleLogin = useCallback(async () =>{
        await login(cred, countEmail, countPassword);
    },[countEmail, countPassword, cred, login]);


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
            </Inputs>
        </Container>
    )
}

export default Login;