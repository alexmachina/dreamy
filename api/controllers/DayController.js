let DayModel = require('../models/day');

class DayController {
  getDay(req, res) {
    let findDay = DayModel.findById(req.params.id).exec();
    findDay.then(day => res.send(day));
    findDay.catch(err => res.status(500).send(err));
  }

  getDays(req, res) {
    let findDays = DayModel.find({}).exec();
    
    findDays.then(days => res.send(days));
    findDays.catch(err => res.status(500).send(err));
  }

  addDay(req, res) {
    let Day = new DayModel(req.body);

    let saveDay = Day.save();
    saveDay.then(() => res.send());
    saveDay.catch(err => res.status(500).send(err));
  }

  updateDay(req, res){
    DayModel.findByIdAndUpdate(
      req.params.id,
      {$set: req.body}
    ).then(() => res.send())
    .catch(err => res.status(500).send(err));
  }

}

module.exports = new DayController();
