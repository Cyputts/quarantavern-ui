import React from 'react';

class TavernForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input class="form-control" type="text" value={this.state.value} onChange={this.handleChange} />

      	<p class="lead button-margin">
	  <a target="_blank" href={"https://dev.quarantavern.com/" + this.state.value } class="btn btn-lg btn-secondary">Start/Join a tavern!</a>
	</p>
      </div>
    );
  }
}
export default TavernForm;
