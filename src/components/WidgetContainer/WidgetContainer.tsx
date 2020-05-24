import * as React from 'react';
import * as GridLayout from "react-grid-layout";
import './WidgetContainer.scss';


declare global {
    interface Window {
        Widgets: any[]
    }
}

interface ILayout {
    x: number,
    y: number,
    w: number,
    h: number,
    isDraggable: boolean,
    isResizable: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number,
    static: boolean,
    i: string,
    _id: string
}

interface IWidgetInstance {
    _id: string,
    key: string,
    name: string,
    widget: any,
    props?: any,
    layout: ILayout,
    configs?: any
}

interface IProps {
    scriptFiles: string[],
}

interface IState {
    width: number,
    widgets: any[],
    pageLoaded: boolean
}


class WidgetContainer extends React.Component<IProps, IState> {

    private widgetContainer: React.RefObject<HTMLDivElement>;
    private Width = 1200;

    constructor(props: IProps) {
        super(props);

        this.widgetContainer = React.createRef();

        this.state = {
            width: this.Width,
            widgets: [],
            pageLoaded: false
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.getNewlyRegisteredWidgets = this.getNewlyRegisteredWidgets.bind(this);
    }


    componentDidMount() {
        // get width
        let width = this.widgetContainer.current.clientWidth;
        if (width > this.Width) {
            this.setState({ width: width })
        }

        this.loadWidgetScripts(this.props.scriptFiles, this.getNewlyRegisteredWidgets);
    }

    // load scripts functions
    loadWidgetScripts(scriptFiles: any[], callback?: any) {

        scriptFiles.map((scriptFile, i) => {
            console.log(scriptFile);
            this.loadScriptFile(scriptFile, callback);
        })
    }

    loadScriptFile(path: string, callback?: any) {
        var script = document.createElement('script');

        script.onload = function () {
            if (typeof callback == "function") {
                callback();
            }
        };

        script.setAttribute('src', path);
        document.head.appendChild(script);
    }

    // get newly registered widgets
    getNewlyRegisteredWidgets() {
        let widgets = this.loadFromLocalStorage();
        this.setState({
            widgets: widgets
        });
    }


    // load widgets
    getLayoutUsingConfigs(widget: any) {
        let _id:string = new Date().getTime().toString() + (Math.round(Math.random() * 100000)).toString();
        let layout:ILayout = { 
            x: 0, 
            y: 0, 
            w: 6, 
            h: 8, 
            i: "0", 
            isDraggable: true, 
            isResizable: true, 
            static: false,
            _id: _id
        };

        // check for configurations 
        if (widget.hasOwnProperty("configs")
            && widget.configs.hasOwnProperty("layout")) {

            let configs = widget.configs;
            let layoutConfig = configs.layout;
            let sampleConfigKeys = ["w", "h", "isDraggable", "isResizable", "maxH", "maxW", "minH", "minW", "static"];

            // remove additional configurations
            Object.keys(layoutConfig).map(key => {
                if (sampleConfigKeys.indexOf(key) == -1) {
                    delete layoutConfig[key];
                }
            })

            // merge config with layout
            // layout options will be replaced with configs
            let merged = { ...layout, ...layoutConfig };
            layout = merged;

        }

        return layout;
    }

    loadFromLocalStorage() {
        let savedWidgets: IWidgetInstance[] = JSON.parse(localStorage.getItem("saved_widgets"));

        // todo:: get saved widgets from database
        if (savedWidgets == null) savedWidgets = [];

        let newWidgets: IWidgetInstance[] = [];
        let returnWidgets: IWidgetInstance[] = [];
        let lastLayout:ILayout = null;

        // get registered widgets
        let __widgets = window.Widgets;

        __widgets.map(widget => {

            let savedWidgetInstances: IWidgetInstance[] = savedWidgets.filter((sw: any) => sw.name == widget.name);

            if (savedWidgetInstances.length === 0) {
                newWidgets.push(widget);
            }
            else {

                // loop through instances
                savedWidgetInstances.map((savedWidget: IWidgetInstance) => {

                    // get layout
                    let savedLayout = savedWidget.layout
                    widget = {...widget, ...savedWidget}

                    returnWidgets.push(widget);

                    if (lastLayout === null) {
                        lastLayout = savedLayout;
                    }
                    else {
                        if (lastLayout.x < savedLayout.x || lastLayout.y < savedLayout.y) {
                            lastLayout = savedLayout;
                        }
                    }

                })

            }
        });


        // generate layout for new widgets
        newWidgets.map((newWidget:IWidgetInstance, i:number) => {

            let hasConfigured = true;
            if (newWidget.hasOwnProperty("configs") && newWidget.configs.hasOwnProperty("props")) {
                let newProps = newWidget.configs.props;
                hasConfigured = false;
            }

            let layout = this.getLayoutUsingConfigs(newWidget);

            if ((lastLayout === null && i === 0 && returnWidgets.length > 0) || (i > 0)) {
                let last = returnWidgets[returnWidgets.length - 1];
                lastLayout = last.layout;
            }


            if (lastLayout !== null) {
                layout.y = lastLayout.y + lastLayout.h;
                if ((lastLayout.x + lastLayout.w) < 12 && (lastLayout.x + lastLayout.w + layout.w) <= 12) {
                    layout.x = lastLayout.x + lastLayout.w;
                    layout.y = lastLayout.y
                }
            }


            layout.i = returnWidgets.length.toString();
            newWidget.key = layout.i;
            newWidget.layout = layout;
            newWidget._id = layout._id;

            returnWidgets.push(newWidget);
        })

        return returnWidgets;
    }

    // save layout to local storage
    onLayoutChange(layouts: any) {
        // get widgets
        let Widgets = this.state.widgets;
        Widgets.map((widget: any) => {

            let _layout = layouts.find((layout: any) => layout.i == widget.key);
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

        let styles: any = {}
        if (widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("container")) {
            let containerConfig = widget.configs.container;

            if (containerConfig.hasOwnProperty("background")) {
                styles.background = containerConfig.background;

                if (containerConfig.background == "transparent") {
                    styles.boxShadow = "none";
                }
            }
        }

        return (
            <div className="layout-item" style={styles} key={key} data-grid={widget.layout}>
                <div className="layout-toolbar">
                    <div className="tb-btn settings">

                        <div className="tb-dropdown">
                            <ul>
                                <li>Configurations</li>
                                <li>Duplicate</li>
                                <li>Remove</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <WidgetElement />
            </div>
        );
    }

    render() {


        return (<>
            <div className="widget-container" ref={this.widgetContainer} >
                <GridLayout className="layout"
                    cols={12}
                    rowHeight={30}
                    width={1200}
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