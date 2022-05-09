const express = require('express');
const app = express();

const leaveRoute = express.Router();
let Leave = require('../model/leave-application');

//Add Leave
leaveRoute.route('/add-leave').post((req, res, next) => {
  Leave.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
})

//Get All Leave
leaveRoute.route('/').get((req, res) => {
  Leave.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
})

//Get Leave
leaveRoute.route('/read-leave/:id').get((req, res => {
  Leave.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
}))

//Update Leave
leaveRoute.route('/update-leave/:id').put((req, res, next) => {
  Leave.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Leave Updated Successfully');
    }
  })
})

//Delete Leave
leaveRoute.route('/delete-leave/:id').delete((req, res, next) => {
  Leave.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        message: data
      });
    }
  })
})

module.exports = leaveRoute;
