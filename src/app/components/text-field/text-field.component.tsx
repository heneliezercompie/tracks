//@ts-ignore
import classes from './text-field.module.scss';
import * as React from "react";

export interface TextFieldProps {
    value: string;
    placeholder: string;
    onChange: (text: string) => void,
}
const TextField: React.SFC<TextFieldProps> = (props: TextFieldProps) => {
    const { value, placeholder} = props;
    const onChange = (e: any) => {
        props.onChange(e.target.value);
    }
    return (
        <div className={classes.mainGrid}>
            <input 
                className={classes.input} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />     
        </div>
    )
};

export default TextField;