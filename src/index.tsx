import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import Dashboard from "./components/Dashboard";

// ReactDOM.render(
//     <Dashboard />,
//     document.getElementById("root")
// );


(window as any).renderDashboard = (root: string, widgets: any[]) => {
    ReactDOM.render(<Dashboard widgets={widgets} />,document.getElementById('root'));
}