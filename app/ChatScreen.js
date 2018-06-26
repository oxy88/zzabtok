import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class ChatScreen extends React.Component {
    render() {
        return (
            <View style={{marginTop: 56, justifyContent: "space-between", flex: 1}}>
                <Text>채팅이 들어갈 곳</Text>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 16,
                }}>
                    <TextInput placeholder="채팅 입력" underlineColorAndroid="transparent" style={{
                        flex: 1,
                        alignItems: "center",
                    }}/>
                    <TouchableOpacity style={{
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            textAlign: "center"
                        }}>보내기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ChatScreen