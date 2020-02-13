import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  hanleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.onAddContact(name, phone);
    this.setState({ name: "", phone: "" });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.hanleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>
        <label>
          Phone
          <input
            type="text"
            value={phone}
            placeholder="Enter phone"
            onChange={this.handleChange}
            name="phone"
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
