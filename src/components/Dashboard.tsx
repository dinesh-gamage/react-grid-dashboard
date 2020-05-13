import * as React from "react";
import * as GridLayout from "react-grid-layout";

declare global {
    interface Window {
        Widgets: any[]
    }
}


interface IProps {
    // widgets: any[]
}

interface IState {
    width: number,
    widgets: any[]
}


class Dashboard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            width: 1200,
            widgets: []
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    }

    componentDidMount() {
        // get width
        let container = document.getElementById("content-block");
        // if (container.offsetWidth > this.state.width) {
        this.setState({
            width: container.offsetWidth -50,
            widgets: window.Widgets
        });
        // }
    }

    onLayoutChange(layouts: any) {
        console.log("___layout___");
        console.log(layouts);

        // get widgets
        let Widgets = this.state.widgets;
        Widgets.map((widget: any) => {

            let _layout = layouts.find((layout: any) => layout.i == widget.key.toString());
            // _layout cannont be undefined at this point
            if (typeof _layout != "undefined") {
                widget.layout = _layout;
            }
        });

        this.setState({
            widgets: Widgets
        }, () => {
            this.saveToLocalStorage();
        })
    }

    saveToLocalStorage() {
        console.log("saving to local storage")
        let widgets = this.state.widgets;
        localStorage.setItem("saved_widgets", JSON.stringify(widgets));
    }


    // render
    renderWidget(widget: any, key: number) {
        let WidgetElement = widget.widget;

        return (
            <div className="layout-item" key={key} data-grid={widget.layout}>
                {/* {
                    this.state.showEditDashboard ? 
                    <div className="overlay">
                        <button className="remove-widget" onClick={() => this.removeWidget(key)} >Remove</button>
                    </div>
                    :""
                } */}

                <WidgetElement />
            </div>
        );
    }

    render() {

        return (<>
            <div className={`container`}>

                <div className="navigation-block">
                    <div className="logo"></div>
                    <div className="navigation-links">
                        <ul>
                            <li>Building Management</li>
                            <li>Energy</li>
                            <li>Employee Dashboard</li>
                            <li>Operations</li>
                        </ul>
                    </div>
                </div>

                <div className="main-block">

                    <div className="header">
                        <div className="logo"></div>
                        <div className="title">Adani Experience</div>
                        <div className="user-prop">
                            <div className="user-icon"></div>
                            <div className="user-name">Welcome, Dinesh</div>
                        </div>
                    </div>

                    <div className="content-block" id="content-block">

                        <div className="toolbar">
                            <div className="toolbar-buttons">
                                {/* <button className={`toggleEdit ${this.state.showEditDashboard ? "active" : ""}`} onClick={this.toggleDashboardEdit}> {this.state.showEditDashboard ? "Save Changes" : "Edit Dashboard"} </button> */}
                            </div>

                        </div>

                        <GridLayout className="layout"
                            cols={12}
                            rowHeight={30}
                            width={this.state.width}
                            isResizable={true}
                            isDraggable={true}
                            autoSize={false}
                            onLayoutChange={this.onLayoutChange}
                        >

                            {
                                this.state.widgets.map((widget: any, key: number) => this.renderWidget(widget, key))
                            }

                        </GridLayout>

                    </div>

                </div>

            </div>
        </>);
    }
}

export default Dashboard;