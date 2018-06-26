import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import MainScreen from './MainScreen'
import ChatScreen from './ChatScreen'

const MainTab = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            tabBarLabel: "메인",
            tabBarIcon: ({focused}) => {
                return (
                focused ?
                <Icon name="home" size={24} style={{color: "blue"}}/> :
                <Icon name="home" size={24}/>
                )
            }
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            tabBarLabel: "채팅",
            tabBarIcon: ({ focused }) => {
                return (
                focused ? 
                <Icon name="comment" size={24} style={{color: "blue"}}/> :
                <Icon name="comment" size={24} />
                )
            }
        }
    }
}, {
    tabBarOptions: {
        showIcon: true
    }
})

export default MainTab