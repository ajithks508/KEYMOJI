import fetch from 'node-fetch';
import { ApolloClient, apolloClient, from } from 'apollo-boost';
import { InMemoryCatche } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import clientconfig from './../client-config';

const client = new ApolloClient ({
    link: createHttpLink({
        Url: clientconfig.graphqlUrl,
        fetch: fetch
    }),
    Cache: new InMemoryCatche()
});

export default apolloClient;