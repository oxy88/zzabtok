import React from 'react'
import { AsyncStorage, TouchableOpacity, Button, Text, View, TextInput } from 'react-native'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const TOKEN = "user_token"

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <Mutation mutation={LOGIN_MUTATION}>
            {( login ) => {
                return (
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            position: 'absolute',
                            top: 55,
                            left: 16,
                            right: 16,
                            bottom: 400,
                            borderRadius: 51,
                            backgroundColor: "#00ff2f",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                textAlign: "center",
                                textAlignVertical: "center",
                                fontSize: 56,
                                color: "#000000"
                            }}>짭 카 오 톡</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <TextInput 
                                placeholder="이름 쓰기" 
                                underlineColorAndroid="transparent" 
                                style={{
                                    flex: 1,
                                    marginLeft: 16,
                                }}
                                value={this.state.name}
                                onChangeText={(text) => {
                                    this.setState({ name: text })
                                }}
                             />
                            <TouchableOpacity style={{
                                marginRight: 16,
                                backgroundColor: '#0014ff',
                                padding: 16
                                }} onPress={async() => {
                                    const result = await login({
                                        variables: {
                                            name: this.state.name
                                        }
                                    })
                                    await AsyncStorage.setItem(TOKEN, result.data.login)
                                    this.props.navigation.navigate('MainTab')
                            }}>
                                <Text style={{color: "#ffffff" }}>로그인 버튼</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
            </Mutation>
        )
    }
}

const LOGIN_MUTATION = gql`
mutation loginMutation($name: String) {
    login(name: $name)
}
`

export default LoginScreen