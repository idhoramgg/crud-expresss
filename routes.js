const users = require('./user')

const router = app => {
  app.get('/', (req, res) => res.send('Welcome'));


  app.get('/users', (req, res) => res.send(users));


  app.post('/create', (req, res) => {
    //push body-nya saja sudah bisa
    //buat dinamis id yang di enter
    let id = users.length + 1;
    users.push({
      id,
      name: req.body.name,
      email:req.body.email,
      gender: req.body.gender
    })
    //using res.json not res.send
    res.json(users)
  }, )


  app.get('/users/:id', (req, res) => {
    // users.splice(req.body-1)
    const user = users.find(data => data.id === parseInt(req.params.id))
    res.json({
     user
    })
  })


  app.delete('/delete/:id', (req, res) => {
    const id = users.findIndex( element => element.id == req.params.id)
    //vuat rermove array nomor ke 0 sampai 1
    users.splice(id, 1 )
    res.json({
      users
    })
  })

  //filter
  //users.filter(element => element.id !== idUser)

  // app.put('/edit/:id', async (req, res) => {
  //   try {
  //     let id = await users.findIndex(element => element.id === Number(req.params.id) 
  //     );

  //     users.map((data) => {
  //       if(data.id === id) {
  //        return users[id].name = req.body.name
  //       }
  //     }
  //   }}
  
  
  




  
}
module.exports = router;