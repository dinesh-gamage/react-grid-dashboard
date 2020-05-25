import * as React from 'react';
import * as GridLayout from "react-grid-layout";
import './WidgetContainer.scss';
import DynamicForm from '../DynamicForm/DynamicForm';
import { func } from 'prop-types';


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
    configs?: any,
    hasConfigured: boolean
}

interface IProps {
    scriptFiles: string[],
}



function WidgetContainer(props: IProps) {

    let Width = 1200;

    const [width, setWidth] = React.useState(Width);
    const [widgets, setWidgets] = React.useState([])
    const [showConfigModel, setShowConfigModal] = React.useState(false);
    const [editInstance, setEditInstance] = React.useState(null);

    // refs 
    const widgetContainer = React.useRef(null);

    React.useEffect(() => {
        let width = widgetContainer.current.clientWidth;
        if (width > Width) {
            setWidth(width);
        }

        loadWidgetScripts(props.scriptFiles, getNewlyRegisteredWidgets);
    }, [])


    // load scripts functions
    function loadWidgetScripts(scriptFiles: any[], callback?: any) {

        scriptFiles.map((scriptFile, i) => {
            loadScriptFile(scriptFile, callback);
        })
    }

    function loadScriptFile(path: string, callback?: any) {
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
    function getNewlyRegisteredWidgets() {
        let widgets = loadFromLocalStorage();
        setWidgets(widgets);
    }

    // load widgets
    function getLayoutUsingConfigs(widget: any) {
        let _id: string = new Date().getTime().toString() + (Math.round(Math.random() * 100000)).toString();
        let layout: ILayout = {
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

    function loadFromLocalStorage() {
        let savedWidgets: IWidgetInstance[] = JSON.parse(localStorage.getItem("saved_widgets"));

        // todo:: get saved widgets from database
        if (savedWidgets == null) savedWidgets = [];

        let newWidgets: IWidgetInstance[] = [];
        let returnWidgets: IWidgetInstance[] = [];
        let lastLayout: ILayout = null;

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
                    widget = { ...widget, ...savedWidget }

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
        newWidgets.map((newWidget: IWidgetInstance, i: number) => {

            let hasConfigured = true;
            if (newWidget.hasOwnProperty("configs") && newWidget.configs.hasOwnProperty("props")) {
                newWidget.configs.props.map((prop: any) => {
                    prop.value = ""
                })
                hasConfigured = false;
            }

            let layout = getLayoutUsingConfigs(newWidget);

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
            newWidget.hasConfigured = hasConfigured;

            returnWidgets.push(newWidget);
        })

        return returnWidgets;
    }

    // save layout to local storage
    function onLayoutChange(layouts: any) {
        // get widgets
        let Widgets = widgets;
        Widgets.map((widget: any) => {

            let _layout = layouts.find((layout: any) => layout.i == widget.key);
            // _layout cannot be undefined at this point
            if (typeof _layout != "undefined") {
                widget.layout = _layout;
            }
        });


        setWidgets(Widgets);
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        localStorage.setItem("saved_widgets", JSON.stringify(widgets));
    }


    // configure
    function onCloseModel() {
        setShowConfigModal(false);
        setEditInstance(null);
    }

    function onSaveChanges(submittedData: any) {
        console.log("Saving Widget Configurations");
        let _editInstance = editInstance;
        let defaultProps = _editInstance.configs.props;
        defaultProps.map((prop: any) => {
            prop.value = submittedData[prop.name];
        })

        _editInstance.configs.props = defaultProps;
        _editInstance.props = submittedData;
        _editInstance.hasConfigured = true;

        setEditInstance(_editInstance);

        // update state
        let _widgets = [...widgets];
        _widgets.map((widget: any) => {
            if (widget._id === editInstance._id) {
                widget = editInstance;
            }
        })

        setWidgets(_widgets);
        saveToLocalStorage();
        onCloseModel();
    }


    function renderConfigModel() {

        let formStructure = editInstance.configs.props;

        return (<>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="mh-title">Edit Configurations</div>
                        <div className="modal-close" onClick={onCloseModel}></div>
                    </div>

                    <div className="modal-body">
                        <DynamicForm
                            formStructure={formStructure}
                            onSubmit={onSaveChanges}
                            onCancel={onCloseModel}
                        />
                    </div>

                </div>
            </div>
        </>);

    }




    // render
    function renderWidget(widget: any, key: number) {
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

        let showConfigOption = (widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("props"));

        return (
            <div className="layout-item" style={styles} key={key} data-grid={widget.layout} data-instance-id={widget._id}>
                {
                    widget.hasConfigured ?
                        <>
                            <div className="layout-toolbar">
                                <div className="tb-btn settings">

                                    <div className="tb-dropdown">
                                        <ul>
                                            {
                                                showConfigOption ?
                                                    <li onClick={() => {
                                                        setShowConfigModal(true);
                                                        setEditInstance(widget)
                                                    }}>
                                                        Configurations
                                                    </li>
                                                    :
                                                    ""
                                            }
                                            <li>Duplicate</li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <WidgetElement {...widget.props} />
                        </>
                        :

                        <div className="layout-not-configured">
                            <p className="message">Widget Not Configured</p>
                            <button className="config-widget-btn"
                                onClick={() => {
                                    setShowConfigModal(true);
                                    setEditInstance(widget)
                                }}
                            >
                                <span className="icon"></span> Configure
                            </button>
                        </div>
                }

            </div>
        );
    }

    return (<>
        <div className="widget-container" ref={widgetContainer} >
            <GridLayout className="layout"
                cols={12}
                rowHeight={30}
                width={1200}
                isResizable={true}
                isDraggable={true}
                autoSize={false}
                onLayoutChange={onLayoutChange}
            >

                {
                    widgets.map((widget: any, key: number) => renderWidget(widget, key))

                }

            </GridLayout>
        </div>

        {
            showConfigModel == true && editInstance != null ?
                renderConfigModel()
                :
                ""
        }

    </>);

}



export default WidgetContainer;