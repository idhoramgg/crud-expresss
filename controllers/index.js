const users = require('../models/user');

module.exports = {
  home: (req, res) => {
    res.send('Welcome to homepage');
  },
  getAll: (req, res) => {
    res.send(users)
  },
  getById: (req, res) => {
    const user = users.find(data => data.id === parseInt(req.params.id))
    res.json({
     user
  })
  },
  create: (req, res) => {
    let id = users.length + 1;
    users.push({
      id,
      name: req.body.name,
      email:req.body.email,
      gender: req.body.gender
    })
    res.json(users)
  },
  deleteUser: (req, res) => {
    const id = users.findIndex( element => element.id == req.params.id)
    users.splice(id, 1 )
    res.json({
      users
    })
  },
  editUser: (req, res) => {
    try {
      let idUpdate = users.findIndex(data => data.id == req.params.id);

      users.map(data => {
        if(data.id == req.params.id) {
          users[idUpdate].name = req.body.name;
          users[idUpdate].email = req.body.email;
          users[idUpdate].gender = req.body.gender;
        }
      });
      res.send({
        message: 'data succesfully update',
        users
      });
    } catch (error) {
      res.send({
        message: 'error update',
        error
      });
    }
  }

}