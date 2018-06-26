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
                    }}>{this.props.message.user.name}</Text>
                </View>
                <View style={{                   
                    marginTop: 8
                }}>
                    <Text>{this.props.message.text}</Text>
                </View>          
            </View>    
        )
    }
}

export default Chat