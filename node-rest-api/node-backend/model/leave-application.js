const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

let LeaveApplication = new Schema({
  emp_id: {
    type: String
  },
  f_name: {
    type: String
  },
  l_name: {
    type: String
  },
  leaveStartDate: {
    type: Date
  },
  leaveEndDate: {
    type: Date
  },
  leaveReason: {
    type: String
  }
}, {
  collection: 'leave'
})

module.exports = mongoose.model('leave', leave);
