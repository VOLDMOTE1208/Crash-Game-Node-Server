const router = require('express').Router();

const myController = require('../controllers/mycontrollers');
var cors = require('cors');

//router.get('/login', myController.login);
router.post('/login', myController.login);
router.post('/w_login', myController.w_login);
router.post('/w_signup', myController.w_signup);
router.post('/signup', myController.signup);
router.post('/savegame', myController.savegame);
router.post('/get-saved-list', myController.getSavedGame);
// router.post('/loadgame', myController.loadGame);
// router.post('/login', cors(), myController.login);
// router.options('/login', cors());

module.exports = router;
