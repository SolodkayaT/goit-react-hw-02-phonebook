import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handelNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handelPhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };
  hanleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.phone);
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <form onSubmit={this.hanleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handelNameChange}
          ></input>
        </label>
        <label>
          Phone
          <input
            type="text"
            value={this.state.phone}
            placeholder="Enter phone"
            onChange={this.handelPhoneChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func
};
