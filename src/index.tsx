// import {store} from "./redux/store";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const reRenderEntireTree = () => {
    const state = store.getState();

    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

reRenderEntireTree()

store.subscribe(reRenderEntireTree)
