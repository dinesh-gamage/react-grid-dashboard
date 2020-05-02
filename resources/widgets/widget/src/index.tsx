import * as React from "react";
import * as ReactDOM from "react-dom";
import Widget from "./components/Widget";
import FirstWidget from "./components/FisrtWidget";
import SecondWidget from "./components/SecondWidget";
import ThirdWidget from "./components/ThirdWidget";
import FourthWidget from "./components/FourthWidget";


// window interface
declare global {
    interface Window {
        Widgets: any
    }
}

// widget 
let Widgets = [];
Widgets.push({ "name":"FirstWidget", "widget": FirstWidget });
Widgets.push({ "name":"SecondWidget", "widget": SecondWidget });
Widgets.push({ "name":"ThirdWidget", "widget":ThirdWidget });
Widgets.push({ "name":"FourthWidget", "widget": FourthWidget });

// set to window object
let prevWidgets = window.Widgets||[];
window.Widgets = prevWidgets.concat(Widgets);


class Layout extends React.Component<{}, {}> {

    render() {

        return (<>
        <div className="content">
            <FirstWidget />
            <SecondWidget />
            <ThirdWidget />
            <FourthWidget />
        </div>
        </>);
    }
}

// render dom
ReactDOM.render(
    <Layout />,
    document.getElementById("root")
);