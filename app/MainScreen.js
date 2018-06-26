import React from 'react'
import { View, Text } from 'react-native'

class MainScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{fontSize: 24}}>안녕하세요</Text>
                <Text style={{fontSize: 24}}>(이름) 님</Text>
            </View>
        )
    }
}

export default MainScreen