import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from '../pages/Feed'
import NewPiu from '../pages/NewPiu'

const{ Navigator, Screen }= createStackNavigator();

export const AppStack = () => {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name='Feed' component ={Feed}/>
            <Screen name="NewPiu" component ={NewPiu}/>
        </Navigator>
    );
}
