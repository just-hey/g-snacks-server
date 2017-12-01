const snackModel = require('../models/snack.model')

class snacksController {
  constructor () {}

  static showAll (req, res, next) {
    snackModel.all()
    .then((response) => res.json({response}))
    .catch((err) => res.json(err))
  }

  static getOne (req, res, next) {
    let id = req.params.id
    snackModel.getOne(id)
    .then((response) => res.json({response}))
    .catch((err) => res.json(err))
  }
}

module.exports = snacksController
