import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    isPriority: false,
  };

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add new task"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <label htmlFor="prior">
          <input type="checkbox" id="prior" value={this.state.isPriority} />
          Priority
        </label>
        <br />
        <label htmlFor="date">
          Deadline
          <input
            type="date"
            id="date"
            value="2020-08-15"
            min="2020-08-15"
            max="2021-01-01"
          />
        </label>
        <br />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default AddTask;
