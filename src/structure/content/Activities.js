import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import ModalForm from "../../modalForm";
import moment from "moment/moment";

class Activities extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     data: []
        // }
    }

    componentDidMount() {
        // this.fetchData()
    }

    render() {
        return (
            <div className="activities">

                <h3>Activities</h3>
                <ModalForm handleSubmitForm={this.handleSubmitForm} addActivity={this.props.addActivity} date={moment(new Date).format("yyyy-MM-DD")} />
                {this.props.activities.map((activity, index) => <Activity key={index}
                                                                    name={activity.description}
                                                                    time={activity.timeSpentInMinutes}
                                                                    id={activity.id}
                                                                    removeActivity={this.props.removeActivity}/>
                )}
            </div>
        )
    }

    // async fetchData() {
    //     const response = await fetch("http://localhost:8080/api/v1/activities");
    //     const data = await response.json();
    //     this.setState({data: data});
    // }

    // removeActivity(id) {
    //     this.props.activities.filter((activity) => activity.id !== id);
    //     // this.setState({data: data});
    // }
    //
    // addActivity(activity) {
    //     // this.setState(current => ({
    //     //     data : [...current.data, activity ]
    //     // }))
    //     this.props.activities.push(activity)
    // }


}

export default Activities;