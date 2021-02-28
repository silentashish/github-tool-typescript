import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Approutes from './routers/Approutes';
import { SnackbarProvider } from 'notistack';
import { store } from './redux/store/store';

const jsx = (
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <Approutes />
        </Provider>
    </SnackbarProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
