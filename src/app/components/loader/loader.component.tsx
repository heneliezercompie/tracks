
//@ts-ignore
import classes from './loader.module.scss';
import * as React from "react";
interface Props {
    loading: boolean
}
const Loader: React.SFC<Props> = (props: Props) => {
    return (
        props.loading ?
        <div className={classes.loading} />
        : null
    )
};

export default Loader;