import React, {useEffect, useState} from "react";
import { Logo,  Topbar, Loginimg, Header, BodyTitle, AvatarImg, Name, Usrname, Follow, MyPius, Subtitle, Config} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/images/logo.png'
import loginImg from '../../assets/images/login-01.png'
import { Container } from "../Login/styles";
import {useAuth} from '../../hooks/contexts/auth';
import PiuComp from '../../components/Piu';
import { Piu } from '../../components/Piu';
import { FontAwesome } from "@expo/vector-icons";
import { useCallback } from "react";


function Profile (){
    const{user, logout} = useAuth();
    const[pius, setPius] = useState<Piu[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get ('/pius')
            console.log(response)
        setPius(response.data)
        }
        fetchData()
    }, [])

    const handleLogout= useCallback(async()=>{
        logout()
    }, [])
    
    return (
        <Container>
            <Topbar>
                <Logo source={logoImg}/>
                <Config onPress={() => handleLogout}>
                    <FontAwesome name="power-off" size={25} color={"#FFAC2F"}/>
                </Config>
            </Topbar>
            <Header>
                <AvatarImg source={{uri:user.photo}}/>
                <Loginimg source ={loginImg}/>
            </Header>
            <BodyTitle>
                <Name>
                    {user.first_name} {user.last_name}
                </Name>
                <Usrname>
                    @{user.username} 
                </Usrname>
            </BodyTitle>
            <MyPius>
            <Subtitle>Meus Pius</Subtitle>
            {pius.map((piu)=>{
                if ( piu.user.username === user.username){
                return(
                <PiuComp {...piu}/>
                )}
            } )}
            </MyPius>
        </Container>
    )
}
export default Profile;

