import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const TOKEN = "cfed2c9ca15b03a734bdba5d3f5860a157b05faa";

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (operation) => {
        operation.setContext({
            headers: {
                authorization: "token " + TOKEN
            }
        })
    }
});

const rootElement = document.getElementById('root')
ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ApolloProvider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
