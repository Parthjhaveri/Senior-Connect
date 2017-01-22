const router = require("express").Router();
const path = require("path")

router.route('./api/createUser')
.get((req, res) => {
  User.Create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    zip: req.body.zip,
    pantryLocation: req.body.pantryLocation,
    location: req.body.location,
    birthDate: req.body.birthDate,
    password: req.body.password,
    isAvailable: req.body.isAvailable
  }).then(() => {
    res.sendStatus(200)
  }).catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

router.route('./api/getAllUsers')
.get((req, res) => {
  User.findAll().then((data) => {
    res.send(data)
  }).catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

module.exports = router
