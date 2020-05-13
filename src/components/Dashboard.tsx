import * as React from "react";
import * as GridLayout from "react-grid-layout";

declare global {
    interface Window { }
}


interface IProps {
    widgets: any[]
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
            widgets: this.props.widgets
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    componentDidMount() {
        // get width

        let container = document.getElementById("content-block");
        // if (container.offsetWidth > this.state.width) {
        this.setState({ width: container.offsetWidth });
        // }
    }

    onLayoutChange(layouts: any) {
        console.log("___layout___");
        console.log(layouts);
    }

    // render
    renderWidget(widget: any, key: number) {
        let WidgetElement = widget.widget;
        // let layout = { x: 0, y: 0, w: 6, h: 8 };

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
                                this.props.widgets.map((widget: any, key: number) => {

                                    // get layout
                                    let last = null;
                                    if (key > 0) last = this.props.widgets[key - 1];
                                    console.log(last);

                                    // layout
                                    let layout = { x: 0, y: 0, w: 6, h: 8 };

                                    if (last != null) {
                                        let ll = last.layout;
                                        console.log(ll);
                                        layout.y = ll.y + ll.h + 1;
                                        if ((ll.x + ll.w) < 12 && (ll.x + ll.w + 6) <= 12) {
                                            layout.x = ll.x + ll.w + 1;
                                            layout.y = ll.y
                                        }

                                        // console.log(layout);
                                    }

                                    widget.layout = layout;
                                    // this.props.widgets[key] = widget;

                                    return this.renderWidget(widget, key)
                                })
                            }

                        </GridLayout>

                    </div>


                </div>

            </div>
        </>);
    }
}

export default Dashboard;