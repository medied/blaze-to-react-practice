import { Template } from 'meteor/templating';

import './task.html';
import Task from './task.jsx';

Template.task.helpers({
  Task() {
    return Task;
  }
})