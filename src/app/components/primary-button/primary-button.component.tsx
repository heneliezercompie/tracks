import * as React from "react";
//@ts-ignore
import classes from './primary-button.module.scss';
import classNames from 'classnames';
interface Props {
    text: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const PrimaryButton: React.SFC<Props> = (props: Props) => (
    <button onClick={props.onClick} className={classNames(classes.mainGrid, props.className)} >
        {props.text}
    </button>);

export default PrimaryButton;