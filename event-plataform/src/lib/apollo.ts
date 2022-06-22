import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oq0d8w0nvy01xx7z28ah9l/master',
  cache: new InMemoryCache()
})