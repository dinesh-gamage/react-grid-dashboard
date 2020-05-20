import * as React from "react";
import * as ReactDOM from "react-dom";

// styles
import "./index.scss";

// components
import UXPDashboard from "./components/UXPDashboard";


(window as any).renderDashboard = (root: string, scriptFiles:string[]) => {
    ReactDOM.render(<UXPDashboard scriptFiles={scriptFiles} />,document.getElementById('root'));
}