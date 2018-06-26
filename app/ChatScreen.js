import React from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import Chat from './Chat'

class ChatScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    componentWillMount() {
        this.props.subscribeToNewMessages()
    }

    render() {
        return (
            <View style={{marginTop: 56, justifyContent: "space-between", flex: 1}}>
                <ScrollView ref="scrollView" style={{margin: 16}} onContentSizeChange={(w, h) => this.refs.scrollView.scrollToEnd()}>
                {this.props.messages.map(message => {
                    return <Chat key={message.id} message={message}/>
                })}                                          
                </ScrollView>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 16,
                }}>
                    <TextInput 
                        placeholder="채팅 입력" 
                        underlineColorAndroid="transparent" 
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}
                        value={this.state.text}
                        onChangeText={(text) => {this.setState({ text })}}
                    />
                    <TouchableOpacity 
                        style={{
                            justifyContent: "center",
                        }}
                        onPress={async() => {
                            await this.props.sendMessage({
                                variables: {
                                    text: this.state.text
                                }
                            })
                        }}
                    >
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