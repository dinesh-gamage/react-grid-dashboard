import * as React from 'react';
import './DynamicForm.scss';

interface IProps {
    formStructure: any[],
    onSubmit: any,
    onCancel?: any
}


function DynamicForm(props: IProps) {
    // refs & state
    const myRefs = React.useRef([]);
    const [formData, setFormData] = React.useState<{ [key: string]: any }>({})

    // component did mount 
    // pass second argument as [] to run only once
    React.useEffect(() => {
        updateFormDataWithDefaults();
    }, [])

    // update state by defaults
    const updateFormDataWithDefaults = () => {
        let newData = {};
        props.formStructure.map((formField: any) => {
            let value = formField.value || "";
            Object.assign(newData, { [formField.name]: value })
        })

        setFormData(newData);
    }

    // submit event
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(formData);
    }

    const handleCancel = () => {
        if(typeof props.onCancel != "undefined") {
            props.onCancel();
        }
    }

    // change event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {

        let value: any = e.target.value;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        let newData = { [key]: value };

        let newFormData = { ...formData, ...newData };
        setFormData(newFormData);
    }


    const getFormFiledDetails = (formField: any) => {
        let type = "text";
        if (formField.hasOwnProperty("type")) {
            switch (formField.type) {
                case "number":
                    type = "number";
                    break;

                case "boolean":
                    type = "checkbox";
                    break;
            }
        }

        let attr = formField.attr || {};

        return [type, attr];
    }

    const generateForm = () => {
        let formStructure = props.formStructure;

        let formFields = formStructure.map((formField: any) => {

            let key = formField.name;
            let [type, attr] = getFormFiledDetails(formField);

            return (<>
                <div className="form-group row" key={key}>
                    <label htmlFor={key} key={"label-" + key} className="form-label" >{formField.label}</label>

                    <input
                        {...attr}
                        key={"input-" + key}
                        type={type}
                        className="form-input"
                        ref={el => (myRefs.current[key] = el)}
                        onChange={(e) => handleChange(e, key)}
                        value={formData[key]}
                    />
                </div>
            </>);
        })

        return formFields;
    }

    return (<>
        <div className="form-container">
            <form onSubmit={handleSubmit}>

                {
                    generateForm()
                }

                <div className="form-group buttons">
                    <button className="btn btn-submit" type="submit">Submit</button>
                    <button className="btn btn-cancel" type="reset" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    </>)
}

export default DynamicForm;