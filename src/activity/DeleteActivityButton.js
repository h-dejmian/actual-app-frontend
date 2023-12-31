import {useCallback} from "react";


function DeleteActivityButton(props) {

    const fetchDelete = useCallback( () => {
        if(window.confirm("Are you sure you want to delete this activity?")) {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'DELETE', credentials: "include"});
        props.removeActivity(props.id);
        }
    }, [props])

    return (
        <a className="button-sm" onClick={fetchDelete}> X </a>
    )
}

export default DeleteActivityButton;