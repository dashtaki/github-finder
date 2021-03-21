import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { store } from './store/store';
import { Provider } from 'react-redux';

const TOKEN = '218add489876a686f930dd13ada044bf63bd06ba';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (operation) => {
        operation.setContext({
            headers: {
                authorization: 'token ' + TOKEN,
            },
        });
    },
});

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
    </Provider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
