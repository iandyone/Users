import "./userActivity.css";

export function UserActivity(props) {
    return <p className={props.className}><span>{props.value}</span> {props.message}</p>;
}