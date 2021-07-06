import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import api from '../../services/api';
import {FontAwesome} from '@expo/vector-icons'
import {AddPiu, Container, Interactions, Logo, Timeline, Topbar} from './styles';
import PiuComp from '../../components/Piu';
import { Piu } from '../../components/Piu';
import logoImg from '../../assets/images/logo.png'

import { User } from '../../hooks/contexts/auth';

function Feed(){
    const[pius, setPius] = useState<Piu[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get ('/pius')
            console.log(response)
        setPius(response.data)
        }
        fetchData()
    }, [])

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

    const {navigate} = useNavigation();

    function handleNavigationToNewPiu(){
        navigate('NewPiu');
    }

    return(
        <Container>
            <Topbar>
                <Logo source={logoImg}/>
                <Interactions>
                    <AddPiu onPress={handleNavigationToNewPiu}>
                        <FontAwesome name="plus-circle" size={27} color={"#FFAC2F"}/>
                    </AddPiu>
                </Interactions>
            </Topbar>
            <Timeline>
            {pius.map((piu)=>{
                if ( search === '' 
                || piu.user.username.toLowerCase().includes(search.toLowerCase()) 
                || piu.user.first_name.toLowerCase().includes(search.toLowerCase())
                || piu.user.last_name.toLowerCase().includes(search.toLowerCase())){
                    
                return(
                <PiuComp {...piu}/>
                )}
            } )}
            </Timeline>
        </Container>
    )
}

export default Feed;