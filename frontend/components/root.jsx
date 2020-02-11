import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
           <h1>Large</h1>
            <App />
        </HashRouter>
    </Provider>
);

export default Root; 