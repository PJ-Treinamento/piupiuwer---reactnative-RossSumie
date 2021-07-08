import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from '../pages/Feed'
import NewPiu from '../pages/NewPiu'
import Login from "../pages/Login";
import { useState } from "react";
import { useAuth } from "../hooks/contexts/auth";
import BottomTabs from "./BottomTabs";
import Register from "../pages/Register";
const{ Navigator, Screen }= createStackNavigator();

export const AppStack = () => {
    const {token} = useAuth();
    return(
        <Navigator screenOptions={{ headerShown: false}} initialRouteName={token? 'BottomTabs': 'Login'}>
            <Screen name="Login" component={Login}/>
            <Screen name='BottomTabs' component ={BottomTabs}/>
            <Screen name='Feed' component ={Feed}/>
            <Screen name='NewPiu' component ={NewPiu}/>
            <Screen name='Register' component ={Register}/>
        </Navigator>
    );
}
