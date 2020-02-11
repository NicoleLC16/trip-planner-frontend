import React, { Component } from "react";
import TripPageDetails from './TripPageDetails'

class TripPageContainer extends Component {

  state = {
    trip: ""
  }
  
  fetchTripDetails = () => {
    fetch('http://localhost:3000/trips/1')
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
        <TripPageDetails trip={this.state.trip} updateDetails={this.updateDetails}/>
      </div>
    )
  }
}

export default TripPageContainer