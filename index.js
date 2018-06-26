import React from 'react'
import { AsyncStorage, Platform, AppRegistry, YellowBox } from 'react-native';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'

import App from './app/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const API_ENDPOINT = "http://localhost:4000"
const GENYMOTION_API = "http://10.0.3.2:4000"
const TOKEN = 'user_token'

const API = Platform.OS === "ios" ? API_ENDPOINT : GENYMOTION_API

const httpLink = new HttpLink({
  uri: API
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem(TOKEN)
  return {
    headers: { 
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

const wsLink = new WebSocketLink({
  uri: API,
  options: {
    reconnect: true,
    connectionParams: () => (
      new Promise((resolve, reject) => {
        AsyncStorage.getItem(TOKEN).then(token => {
          if (token) {
            resolve({
              "Authorization": `Bearer ${token}`
            })
          } else {
            resolve({
              "Authorization": ""
            })
          }
        })
      })
    )
  }
})

console.log(wsLink)

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

const Apollo = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

AppRegistry.registerComponent('zzabtok', () => Apollo);