const router = require('express').Router();
const Demosignal = require('../models/demosignal.model');

router.route('/').post((req, res) => {
    Demosignal.find()
    .then(signal => res.json(signal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const signal = req.body.signal;
  Demosignal.find({signal:signal})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const signal = req.body.signal
  const Bitcoin = req.body.Bitcoin
  const Ethereum = req.body.Ethereum
  const eur_jpy = req.body.eur_jpy
  const usd_chf = req.body.usd_chf
  const aud_cad = req.body.aud_cad
  const eur_usd = req.body.eur_usd
  const chf_jpy = req.body.chf_jpy
  const NG = req.body.NG
  const WCO = req.body.WCO
  const BO = req.body.BO
  const Platinum = req.body.Platinum
  const Silver = req.body.Silver
  const Gold = req.body.Gold

  const newCoupon = new Demosignal({
    signal,Bitcoin,Ethereum,eur_jpy,usd_chf,
    aud_cad,eur_usd,chf_jpy,NG,WCO,BO,Platinum,Silver,Gold});

  newCoupon.save()
    .then(() => res.json('signal gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Demosignal.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const signal = req.body.signal;
  Demosignal.findOneAndRemove({"signal":signal})
  
    .then(() => res.json('signal Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const signal = req.body.signal
  Demosignal.findOne({signal:signal})
    .then(signal => {
      signal.signal = req.body.signal;
      signal.Bitcoin = req.body.Bitcoin;
      signal.Ethereum = req.body.Ethereum;
      signal.eur_jpy = req.body.eur_jpy;
      signal.usd_chf = req.body.usd_chf;
      signal.aud_cad = req.body.aud_cad;
      signal.eur_usd = req.body.eur_usd;
      signal.chf_jpy = req.body.chf_jpy;
      signal.WCO = req.body.WCO;
      signal.NG = req.body.NG;
      signal.BO = req.body.BO;
      signal.Platinum = req.body.Platinum;
      signal.Silver = req.body.Silver;
      signal.Gold = req.body.Gold;

      signal.save()
        .then(() => res.json('signal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;