import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import api from '../../services/api';
import {FontAwesome} from '@expo/vector-icons'
import {AddPiu, Container, Interactions, Logo, SearchBar, SearchItems, SearchLogo, Timeline, Topbar} from './styles';
import PiuComp from '../../components/Piu';
import { Piu } from '../../components/Piu';
import logoImg from '../../assets/images/logo.png'

import { useAuth, User } from '../../hooks/contexts/auth';
import {Animated} from 'react-native';

function Feed(){
    const {user}=useAuth();
    const[pius, setPius] = useState<Piu[]>([])
    const [renderAgain, setRenderAgain] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get ('/pius')
            console.log(response)
        setPius(response.data)
        }
        fetchData()
    }, [renderAgain])

    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get ('/users')
            console.log(response)
            
        setUsers(response.data)
        }
        fetchData()
    }, [])
    
    const [search, setSearch] = useState("");
    const animation = new Animated.Value(30);

    function onSearch (){
        Animated.spring(animation,{ 
            toValue: 150,
            useNativeDriver: false,
        }).start();
    }

    const {navigate} = useNavigation();

    function handleNavigationToNewPiu(){
        navigate('NewPiu', setRenderAgain);
    }

    return(
        <Container>
            <Topbar>
                <Logo source={logoImg}/>
                <Interactions>
                    <AddPiu onPress={handleNavigationToNewPiu}>
                        <FontAwesome name="plus-circle" size={30} color={"#FFAC2F"}/>
                    </AddPiu>
                    <SearchItems style ={{width: animation}}>
                        <SearchLogo onPress = {onSearch}>
                            <FontAwesome name="search" size={18} color={"#FFFFFF"}/>
                        </SearchLogo>
                        <SearchBar placeholder="Pesquisar" autoFocus onChangeText={text => {setSearch(text)}}/>
                    </SearchItems>
                </Interactions>
            </Topbar>
            <Timeline>
            {pius.map((piu)=>{
                if ( search === '' 
                || piu.user.username.toLowerCase().includes(search.toLowerCase()) 
                || piu.user.first_name.toLowerCase().includes(search.toLowerCase())
                || piu.user.last_name.toLowerCase().includes(search.toLowerCase())){
                    
                return(
                <PiuComp {...piu} isPiuFromUser={user.username === piu.user.username ? true: false} key={piu.id}/>
                )}
            } )}
            </Timeline>
        </Container>
    )
}

export default Feed;
