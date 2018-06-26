import { createSwitchNavigator } from 'react-navigation'
import MainTab from './MainTab'
import LoginScreen from './LoginScreen'

const RootNavigator = createSwitchNavigator({
    Login: {
        screen: LoginScreen
    },
    MainTab: {
        screen: MainTab
    },
})

export default RootNavigator