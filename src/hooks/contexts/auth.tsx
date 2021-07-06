import React, {createContext, useContext, useEffect} from "react";
import { useCallback } from "react";
import { useState } from "react";
import api from "../../services/api";
//import {AsyncStorage} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export interface User{
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    photo: string;
    pius: [];
    likes: [];
    following: [];
    followers: [];
    favorites: [];
}

interface AuthState{
    user:User;
    token:string;
}

interface AuthContextData{
    user:User;
    token: string;
    login(user:object, countEmail: number, countPassword: number): void;
}

const AuthContext = createContext<AuthContextData>({}as AuthContextData);

export const AuthProvider: React.FC = ({ children}) => {

	const [userData, setUserData] = useState<AuthState>({} as AuthState);

        useEffect(()=>{
            async function carregarDadosUsuario(){
                const token =  await AsyncStorage.getItem('@Project:token');
                const user = await AsyncStorage.getItem('@Project:user');

                if (user && token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`
                    setUserData ({user: JSON.parse(user), token: token });
                }
            }
            carregarDadosUsuario();
        }, []);


	const login = useCallback(async( cred, countEmail, countPassword) => {
        console.log(cred)
        try{
            const response = await api.post('/sessions/login', cred)
            const {token, user} = response.data;
            await AsyncStorage.setItem('@Project:user', JSON.stringify(user));
            await AsyncStorage.setItem('@Project:token', token);

            if(!!token){
                setUserData({user: user, token:token})
                api.defaults.headers.Authorization = `Bearer ${token}`
                console.log(setUserData)
            }
        }
        catch(error){
            if(countEmail ===0 || countPassword === 0){
                alert("Ops, parece que os campos estão vazios!")
            }
            else{
                alert("Ops, parece que seu email e/ou senha estão incorretos!")
                console.log(error)
            }
        }
    },[]);

    return(
        <AuthContext.Provider value = {{user: userData.user, login, token: userData.token}}>
        {children}
        </AuthContext.Provider>
    )
    
}

export function useAuth():AuthContextData{
    const context = useContext(AuthContext);

    return context;
}