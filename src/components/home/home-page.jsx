import React from 'react';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PersonList from '../person-list';

export default class HomePage extends React.Component {

    state = {
      personData: {}
  }

  call = (data) => {
      this.setState({ personData: data });
  }

  render() {

    const { personData } = this.state;
    
    return(
      <div className="container">
        <RandomPlanet />
        <div className="container persons">
          <PersonList call={this.call} />
          {personData.name && <PersonDetails personData={personData} />}
        </div>                   
      </div>
    );
  }
}