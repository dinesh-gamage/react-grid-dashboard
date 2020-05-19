import * as React from 'react';
import './SideBar.scss';

interface IProps { }
interface IState { }

class SideBar extends React.Component<IProps, IState> {

    render() {

        return (<>
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
        </>);
    }

}

export default SideBar;