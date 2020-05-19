import * as React from 'react';
import * as GridLayout from "react-grid-layout";
import './WidgetContainer.scss';

declare global {
    interface Window {
        Widgets: any[]
    }
}

interface IProps { }
interface IState {
    width: number,
    widgets: any[],
    pageLoaded: boolean
}


class WidgetContainer extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            width: 1200,
            widgets: [],
            pageLoaded: false
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    }

    componentDidMount() {
        // get width
        let container = document.getElementById("widget-container");
        // if (container.offsetWidth > this.state.width) {
        this.setState({
            width: container.offsetWidth -50,
            widgets: window.Widgets
        });
        // }
    }

    onLayoutChange(layouts: any) {
        // get widgets
        let Widgets = this.state.widgets;
        Widgets.map((widget: any) => {

            let _layout = layouts.find((layout: any) => layout.i == widget.key.toString());
            // console.log(_layout.i);
            // _layout cannot be undefined at this point
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
        // console.log("saving to local storage")
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
            <div className="widget-container" id="widget-container">
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
        </>);
    }

}

export default WidgetContainer;