import React, { Component } from 'react';
import logoReact from './img/logo.svg';
import logoApollo from './img/logoApollo.svg';
import './App.css';

import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Apollo client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr' }),
  cache: new InMemoryCache().restore({})
})

// Example query from https://www.graph.cool/
const MOVIE_QUERY = gql`
{
  Movie(id: "cixos5gtq0ogi0126tvekxo27") {
    id
    title
    actors {
       name
    }
  }
}`;

const ChannelsList = () =>
     (<ul>
       <li>Channel 1</li>
       <li>Channel 2</li>
     </ul>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
          <img src={logoApollo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Indata Jones</h1>
        </header>
        <p className="App-intro">
          A Data Visualisation tool to get the best insights from your data.
        </p>
        <ChannelsList />
      </div>
    );
  }
}

export default App;
