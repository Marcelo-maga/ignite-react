import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': 'Bearer ' + import.meta.env.VITE_GRAPHQL_API_KEY,
  },
  cache: new InMemoryCache()
})