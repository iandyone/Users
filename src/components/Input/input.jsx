import "./input.css";
import { useDispatch, useSelector } from "react-redux";
import { setInputValueAction } from "../../store/actions/inputActions";

export function Input(props) {
    const id = props.id;
    const dispatch = useDispatch();
    const value = useSelector((store) => store.input[id]);

    function setCurrentValue(id, value) {
        dispatch(setInputValueAction({ id, value }));
    }

    return (<input id={id}
        type={props.type} 
        className={props.className}
        placeholder={props.placeholder} 
        value={value}
        onChange={(e) => setCurrentValue(e.target.id, e.target.value)} 
        onSubmit={() => console.log(`submit`)}/>
    );
}