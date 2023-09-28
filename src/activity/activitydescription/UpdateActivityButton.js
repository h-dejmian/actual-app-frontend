import {useCallback} from "react";
import '../../css/activity.css'


function UpdateActivityButton(props) {

    const fetchUpdate = useCallback( () => {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'PUT'});
        props.updateActivity(props.id);

    }, [props])

    return (
        <a id="updateActivity" onClick={fetchUpdate}> Update </a>
    )
}

export default UpdateActivityButton;