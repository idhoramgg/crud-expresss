const express = require('express');
const route = express.Router();

const {
  home, 
  getAll,
  getById,
  create,
  deleteUser,
  editUser
} = require('../controllers/index')

  route.get('/', home);
  route.get('/users', getAll);
  route.post('/create', create)
  route.get('/:id', getById)
  route.delete('/:id', deleteUser)
  route.put('/:id',editUser)


module.exports = route;