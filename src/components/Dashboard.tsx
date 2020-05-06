import * as React from "react";
import * as GridLayout from "react-grid-layout";

declare global {

    interface Window {
        // Widgets: any
    }
}


interface IProps {
    widgets: any[]
 }

interface IState {
    // showEditDashboard: boolean,
    // enableResize: boolean,
    // enableDrag: boolean,
    // showAddWidget: boolean,
    // newWidget: string,
    // availableWidgets: any[],
    // selectedWidgets: any[],
    width: number
}

class Dashboard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            // showEditDashboard: false,
            // enableDrag: false,
            // enableResize: false,
            // showAddWidget: false,
            // newWidget: "",
            // selectedWidgets: [],
            // availableWidgets: Widgets,
            width: 1200
        }

        this.toggleAddWidgets = this.toggleAddWidgets.bind(this);
        this.toggleDashboardEdit = this.toggleDashboardEdit.bind(this);
        this.onAddNewWidget = this.onAddNewWidget.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
        this.getAvailableWidgets = this.getAvailableWidgets.bind(this);
    }

    componentDidMount() {
        // get width
        let width = document.documentElement.clientWidth;
        // let navElement = document.querySelector(".navigation-block") as HTMLElement;
        // console.log("width " + width );
        // console.log("nav width " + navElement.clientWidth);
        this.setState({ width: width - 200 });
    }

    loadFromLocalStorage() {
        // console.log("__loading_from_LS__")
        // let savedToLS = JSON.parse(localStorage.getItem("selectedWidgets"));
        // if(savedToLS == null) savedToLS = [];
        // console.log(savedToLS);

        // let __Widgets = Widgets;

        // let selectedWidgets:any[] = [];

        // savedToLS.map((saved: any, i: number) => {

        //     console.log("__save");
        //     console.log(savedToLS);

        //     // get selected widget
        //     let selectedWidget = __Widgets.find((widget: any, j: number) => {
        //         if (saved.name == widget.name) {
        //             return widget;
        //         }
        //     })

            
        //     if (typeof selectedWidget !== "undefined") {
        //         selectedWidget.layout = saved.layout;
        //         selectedWidget.layout.i = i.toString();
        //         selectedWidgets.push(selectedWidget);
        //     }
        // })


        // this.setState({ selectedWidgets: selectedWidgets }, this.getAvailableWidgets);
    }

    saveToLocalStorage() {
        // let selectedWidgets = this.state.selectedWidgets;

        // let saveToLS = selectedWidgets.map((widget: any, i: number) => {
        //     return { "name": widget.name, "layout": widget.layout };
        // })

        // if (!this.state.showEditDashboard) {
        //     console.log("__saving_to_LS__");
        //     console.log(saveToLS);
        //     localStorage.setItem("selectedWidgets", JSON.stringify(saveToLS));
        // }
    }

    getAvailableWidgets() {
    //     let selectedWidgets: any[] = [];
        
    //     this.state.selectedWidgets.map((widget:any, i: number) => {
    //         selectedWidgets.push(widget.name)
    //     });

    //     let availableWidgets = Widgets.filter((widget:any, j:number) => {
    //         if(selectedWidgets.indexOf(widget.name) == -1) {
    //             return widget;
    //         }
    //     })


    //     console.log("available widgets")
    //     console.log(availableWidgets);
    //     this.setState({availableWidgets: availableWidgets});
    }

    onLayoutChange(layouts: any) {
        // console.log("___layout___");
        // console.log(layouts);
        // let selectedWidgets = this.state.selectedWidgets;

        // selectedWidgets.map((widget: any, i: number) => {
        //     let layout = layouts[i];
        //     widget.layout = layout;
        // })

        // this.setState({ selectedWidgets: selectedWidgets });
    }


    // add widgets
    toggleAddWidgets() {
        // let show = this.state.showAddWidget;
        // this.setState({ showAddWidget: !show, newWidget: "" });
    }

    onAddNewWidget() {
        // console.log("__add_new_widget__" + this.state.newWidget);

        // // get selecrted widget
        // let widget = Widgets.find((widget: any, i: number) => {
        //     if (this.state.newWidget == widget.name) {
        //         return widget;
        //     }
        // });

        // // update state
        // // enable dashboard edit mode
        // let selectedWidgets = this.state.selectedWidgets;

        // let layout = { x: 0, y: 0, w: 6, h: 8 };

        // if (selectedWidgets.length > 0) {
        //     let last = selectedWidgets[selectedWidgets.length - 1];
        //     let ll = last.layout;

        //     layout.y = ll.y + ll.h + 1;
        //     if ((ll.x + ll.w) < 12 && (ll.x + ll.w + 6) <= 12) {
        //         layout.x = ll.x + ll.w + 1;
        //         layout.y = ll.y
        //     }
        //     console.log(layout);
        // }

        // widget.layout = layout;
        // selectedWidgets.push(widget);

        // this.setState({
        //     selectedWidgets: selectedWidgets
        // }, () => { 
        //     this.toggleAddWidgets(); 
        //     if(!this.state.showEditDashboard) this.toggleDashboardEdit(); 
        //     this.getAvailableWidgets();
        // });

    }

    // edit widgets
    toggleDashboardEdit() {
        // let show = this.state.showEditDashboard;
        // this.setState({
        //     showEditDashboard: !show,
        //     enableDrag: !show,
        //     enableResize: !show
        // }, this.saveToLocalStorage);
    }
    
    removeWidget(key:number){
        // let selectedWidgets = this.state.selectedWidgets;
        // selectedWidgets.splice(key, 1);

        // this.setState({selectedWidgets: selectedWidgets}, this.getAvailableWidgets);
    } 

    // render
    renderWidget(widget: any, key: number) {
        let WidgetElement = widget.widget;
        let layout = { x: 0, y: 0, w: 6, h: 8 };

        return (
            <div className="layout-item" key={key} data-grid={layout}>
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

                    <div className="content-block">

                        <div className="toolbar">
                            {/* <div className="toolbar-buttons">
                                <button className={`toggleEdit ${this.state.showEditDashboard ? "active" : ""}`} onClick={this.toggleDashboardEdit}> {this.state.showEditDashboard ? "Save Changes" : "Edit Dashboard"} </button>
                            </div>
                            <div className="toolbar-buttons">
                                <button className={`addWidgets ${this.state.showAddWidget ? "active" : ""}`} onClick={this.toggleAddWidgets} >Add Widgets</button>

                                <div className={`dropdown ${this.state.showAddWidget ? "" : "hide"} `}>

                                    <select name="select-widget" id="selectWidget"
                                        value={this.state.newWidget}
                                        onChange={e => this.setState({ newWidget: e.target.value })}
                                    >
                                        <option value="">--select a widget--</option>
                                        {
                                            this.state.availableWidgets.map((widget: any, key: any) => {
                                                return <option key={key} value={widget.name}>{widget.name}</option>
                                            })
                                        }
                                    </select>
                                    {
                                        this.state.newWidget == "" ? "" :
                                            <button className="add-widget" onClick={this.onAddNewWidget}>Add Widget</button>

                                    }
                                </div>

                            </div> */}
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
                                this.props.widgets.map((widget: any, key: number) => this.renderWidget(widget, key))
                            }

                        </GridLayout>

                    </div>


                </div>

            </div>
        </>);
    }
}

export default Dashboard;