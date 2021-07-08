import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

const{Navigator, Screen} = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Navigator  
            tabBarOptions={{
            style:{
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle:{
                flexDirection: 'column',
            },
            iconStyle:{
                width: 20,
                height: 20,
            },
            
            inactiveBackgroundColor: '#ffffff',
            activeBackgroundColor: '#ffffff',
            inactiveTintColor:"#d6d6d6",
            activeTintColor: "#FFAC2F"
        }}>
            <Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color, size, focused}) =>{
                    return(
                        <FontAwesome name='home' size={size} color={focused ? "#FFAC2F" : color}/>
                    );
                }
            }}/>
            <Screen 
            name="Profile" 
            component ={Profile}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color, size, focused}) =>{
                    return(
                        <FontAwesome name='user' size={size} color={focused ? "#FFAC2F" : color}/>
                    );
                }
            }} />


        </Navigator>
    )

}

export default BottomTabs;