import { createBottomTabNavigator } from 'react-navigation'

import MainScreen from './MainScreen'
import ChatScreen from './ChatScreen'

const MainTab = createBottomTabNavigator({
    Main: {
        screen: MainScreen
    },
    Chat: {
        screen: ChatScreen
    }
})

export default MainTab