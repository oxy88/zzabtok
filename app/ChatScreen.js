import React from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import Chat from './Chat'

class ChatScreen extends React.Component {
    render() {
        return (
            <View style={{marginTop: 56, justifyContent: "space-between", flex: 1}}>
                <ScrollView style={{margin: 16}}>
                {[0, 1, 2, 3].map(num => {
                    return <Chat key={num}/>
                })}                                          
                </ScrollView>
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