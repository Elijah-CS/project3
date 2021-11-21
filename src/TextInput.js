import React, { Component } from "react";

class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    this.props.format(event, this.props.setter);

  }

  render() {
    return (
      <input type="text" className="search-box"
        placeholder="Leave empty to show all"
        value={this.state.value}
        onChange={event => this.handleChange(event)} />
    );
  }
}

export {TextInput}