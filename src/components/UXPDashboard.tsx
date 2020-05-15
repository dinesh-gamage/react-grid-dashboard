import * as React from 'react';

// components
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';
import WidgetContainer from './WidgetContainer/WidgetContainer';


interface IProps { }
interface IState { }

class UXPDashboard extends React.Component<IProps, IState> {

    render() {

        return (<>
            <div className="main-block">
                <div className="navigation-block">
                    <SideBar />
                </div>
                <div className="content-block">

                    <div className="header-block">
                        <div className="logo"></div>
                        <div className="title">Adani Experience</div>
                        <div className="user-prop">
                            <div className="user-icon"></div>
                            <div className="user-name">Welcome, Dinesh</div>
                        </div>
                    </div>

                    <div className="main-content-block">
                        <div className="toolbar-block">
                            <ToolBar />
                        </div>

                        <div className="widget-container-block">
                            <WidgetContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }

}

export default UXPDashboard;