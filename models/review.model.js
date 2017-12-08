const db = require('../db/knex')

class reviewModel {
  constructor () {}

  static all () {
    return db('reviews')
  }

  static getOne (id) {
    return db('reviews')
    .where({id})
    .first()
  }

  static update (id, body) {
    return db('reviews')
    .where({id})
    .update({name: body.name, description: body.description})
    .returning('*')
  }

  static create (title, text, rating, snack_id, user_id) {
    return db('reviews')
    .insert(title, text, rating, snack_id, user_id)
    .returning('*')
  }

  static destroy (id) {
    return db('reviews')
    .where({id})
    .del()
    .returning('*')
  }
}

module.exports = reviewModel
