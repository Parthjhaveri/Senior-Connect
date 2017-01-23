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
    isAvailable: req.body.isAvailable,
    beacon: req.body.isAvailable,
    eta: req.body.eta,
    helper: req.body.helper,
    helpee: req.body.helpee
  }).then(() => {
    res.sendStatus(200)
  }).catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

router.route('./api/update/:id')
.post((req, res) => {

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
