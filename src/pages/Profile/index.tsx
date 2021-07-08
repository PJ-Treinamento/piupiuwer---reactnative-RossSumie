import React, {useEffect, useState} from "react";
import { Logo,  Topbar, Loginimg, Header, BodyTitle, AvatarImg, Name, Usrname, Follow, MyPius, Subtitle, Config} from './styles';
import Modal from 'react-native-modal';
import api from '../../services/api';
import logoImg from '../../assets/images/logo.png'
import loginImg from '../../assets/images/login-01.png'
import { Container } from "../Login/styles";
import {useAuth} from '../../hooks/contexts/auth';
import PiuComp from '../../components/Piu';
import { Piu } from '../../components/Piu';
import { FontAwesome } from "@expo/vector-icons";


function Profile (){
    const{user} = useAuth();
    const[pius, setPius] = useState<Piu[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get ('/pius')
            console.log(response)
        setPius(response.data)
        }
        fetchData()
    }, [])

    const[visible, setVisible] = useState(false);
    console.log(visible)
    return (
        <Container>
            <Topbar>
                <Logo source={logoImg}/>
                <Config onPress={() => setVisible(!visible)}>
                    <FontAwesome name="gear" size={30} color={"#FFAC2F"}/>
                </Config>
                <Modal isVisible={visible}>
                    <Config onPress={() => setVisible(false)}>
                            <FontAwesome name="heart" size={30} color={"#FFAC2F"}/>
                    </Config>
                </Modal>
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

/*<Follow>
    <Usrname>
        Seguindo {user.following}
    </Usrname>
    <Usrname>
        Seguidores {user.followers}
    </Usrname>
</Follow>*/

