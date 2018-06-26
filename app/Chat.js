import React from 'react'
import { View, Text } from 'react-native'

class Chat extends React.Component {
    render() {
        return (
            <View style={{marginBottom: 16}}>
                <View style={{                   
                }}>
                    <Text style={{
                        fontSize: 24
                    }}>채팅쓴사람</Text>
                </View>
                <View style={{                   
                    marginTop: 8
                }}>
                    <Text>쓸데없는 채팅들</Text>
                </View>          
            </View>    
        )
    }
}

export default Chat