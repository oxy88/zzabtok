import React from 'react'
import { TouchableOpacity, Button, Text, View, TextInput } from 'react-native'

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput placeholder="이름 쓰기" underlineColorAndroid="transparent" style={{
                        flex: 1,
                        marginLeft: 16,
                    }} />
                    <TouchableOpacity style={{
                        marginRight: 16,
                        backgroundColor: '#d8d8d8',
                        padding: 16
                        }} onPress={() => {
                        this.props.navigation.navigate('MainTab')
                    }}>
                        <Text>로그인 버튼</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoginScreen