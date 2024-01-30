import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    );
}

reRenderEntireTree()

store.subscribe(reRenderEntireTree)
