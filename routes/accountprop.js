const router = require('express').Router();
const Accountprop = require('../models/accountprop.model');

router.route('/').post((req, res) => {
  Accountprop.find()
  .then(email => res.json(email))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Accountprop.find({email:email})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findref').post((req, res) => {
  const ref = req.body.ref;
  Accountprop.find({ref:ref})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/id').post((req, res) => {
  const id = req.body.id;
  Accountprop.find({id:id})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email
  const credit = req.body.credit
  const rewards = req.body.rewards
  const projects = req.body.projects
  const Perfomance = req.body.Perfomance
  const sub = req.body.sub
  const id = req.body.id

  const newCoupon = new Accountprop({
    email,credit,rewards,projects,Perfomance,sub,id});

  newCoupon.save()
    .then(() => res.json('account creaated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/up').post((req, res) => {
  const email = req.body.email
  Accountprop.findOne({email:email})
    .then(account => {
      account.balance = req.body.balance;
      account.email = req.body.email;
      account.firstname = req.body.firstname;
      account.lastname = req.body.lastname;
      account.password = req.body.password;
      account.refferal = req.body.refferal;
      account.qlink = req.body.qlink;
      account.country = req.body.country;
      account.pin = req.body.pin;
      account.ref = req.body.ref;
      account.usdt = req.body.usdt;
      account.id = req.body.id;

      
      account.save()
        .then(() => res.json('account updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Accountprop.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Accountprop.findOneAndRemove({"id":id})
    .then(() => res.json('accont Removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Accountprop.findById(req.params.id)
    .then(exercise => {
      exercise.accontname = req.body.accontname;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;