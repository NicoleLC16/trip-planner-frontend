import React, { Component } from "react";
import TripPageDetails from '../components/TripPageDetails'

class TripPageContainer extends Component {

  state = {
    trip: ""
  }
  
  fetchTripDetails = () => {
    let tripId = this.props.selectedTrip.id
    console.log(tripId)
    fetch(`http://localhost:3000/trips/${tripId}`)
    .then(res => res.json())
    .then(data => this.setState({
      trip: data
    }))
  }

  componentDidMount() {
    this.fetchTripDetails();
  }

  updateDetails = (patch) => {
    this.setState({
      trip: patch
    })
  }

  render() {
    return (
      <div>
        <TripPageDetails user={this.props.user} trip={this.state.trip} updateDetails={this.updateDetails}/>
      </div>
    )
  }
}

export default TripPageContainer