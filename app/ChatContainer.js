import React from 'react'
import { Query, Mutation } from 'react-apollo'
import ChatScreen from './ChatScreen'
import gql from 'graphql-tag'

class ChatContainer extends React.Component {
    render() {
        return (
            <Mutation mutation={SEND_MESSAGE_MUTATION}>
            {( sendMessage ) => {
                return (
                    <Query query={MESSAGES_QUERY} fetchPolicy="network-only">
                    {({ data, loading, error, subscribeToMore, refetch }) => {
                        if (loading) return null

                        const subscribeToNewMessages = () => {
                            subscribeToMore({
                                document: MESSAGE_SUBSCRIPTION,
                                updateQuery: (prev, { subscriptionData }) => {
                                    console.log(subscriptionData)
                                    refetch()
                                }
                            })
                        }
                        return (
                            <ChatScreen 
                                messages={data.messages}
                                sendMessage={sendMessage}
                                subscribeToNewMessages={subscribeToNewMessages}
                            />
                        )
                    }}                
                    </Query>
                )
            }}
            </Mutation>
        )
    }
}

const MESSAGES_QUERY = gql`
query messagesQuery {
    messages {
        id
        text
        user {
            name
        }        
    }
}
`

const SEND_MESSAGE_MUTATION = gql`
mutation sendMessageMutation($text: String) {
    sendMessage(
        text: $text
    ) {
        id
    }
}
`

const MESSAGE_SUBSCRIPTION = gql`
subscription messageSubscription {
    messageSubscription {
        node {
            id
            text
            user {
                name
            }
        }
    }
}
`

export default ChatContainer