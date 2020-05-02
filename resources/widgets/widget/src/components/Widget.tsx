import * as React from "react";

interface IWidgetProps {}

interface IWidgetState {}

class Widget extends React.Component<IWidgetProps, IWidgetState>{

    constructor(props: IWidgetProps) {
        super(props);
    }

    render() {
        return(<>
            <div className={`widget`}>
                
                {this.props.children}
            </div>
        </>);
    }

}

export default Widget;