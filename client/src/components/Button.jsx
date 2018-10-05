import React from 'react';


class GetDataButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log('getData() called');
    fetch('http://localhost:8080/userdata', {
      method: 'GET',
      mode: 'no-cors',
      headers : {
        "Content-Type" : "application/json"
      }
    })
    .then(res => {
      console.log('here');
      return res.json()
      .then(data => {
        console.log(JSON.stringify(data));
      })
      .catch(e => console.log(e, 'Failed to fetch resource'));
    });
  }


  render() {
    return(
      <button type="button" id="requestData" onClick={this.getData}>Get Data!</button>
    )
  }
}
export default GetDataButton;