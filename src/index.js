import * as React from "react";
import ReactDOM from "react-dom";

import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
