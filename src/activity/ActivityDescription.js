import DeleteActivityButton from "./DeleteActivityButton";


const ActivityDescription = (props) => <h3> {props.name + "  :  " + props.time + " minutes"} <DeleteActivityButton id={props.id} /> </h3>;

export default ActivityDescription;