import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class MainScreen extends React.Component {
    async componentWillMount() {
        const token = await AsyncStorage.getItem('user_token')
        console.log(token)
    }

    render() {
        return (
            <Query query={MY_NAME_QUERY}>
            {({ data, loading, error }) => {           
                return (
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{fontSize: 24}}>안녕하세요</Text>
                        <Text style={{fontSize: 24}}>{loading ? " " : data.myName} 님</Text>
                    </View>
                )
            }}
            </Query>
        )
    }
}

const MY_NAME_QUERY = gql`
query myNameQuery {
    myName
}
`

export default MainScreen