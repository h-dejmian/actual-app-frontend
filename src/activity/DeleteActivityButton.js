import {useCallback} from "react";
import '../css/activity.css'


function DeleteActivityButton(props) {

    const fetchDelete = useCallback( () => {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'DELETE'});
        props.removeActivity(props.id);
    }, [props])

    return (
        <a id="removeActivity" onClick={fetchDelete}> X </a>
    )
}

export default DeleteActivityButton;