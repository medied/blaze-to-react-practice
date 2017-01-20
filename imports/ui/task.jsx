import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import './task.html';


export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  render() {
    const taskClassName = this.props.task.checked ? 'checked' : '';
    console.log("render(): ", this.props.task.text);
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
     
        <input
          type="checkbox"
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        {/*<button className="toggle-private">
                  
                    Private
                  
                    Public
                  
                </button>*/}
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};

// export default createContainer((task) => {
//   console.log("createContainer(): ", task);
//   return task;
// }, Task);
