const
  express = require('express'),
  DayController = require('./controllers/DayController');

let router = new express.Router();

router.get('/', (req,res) => res.send("OK"));
router.get('/days', DayController.getDays);
router.get('/day/:id', DayController.getDay);
router.post('/day', DayController.addDay);
router.put('/day/:id', DayController.updateDay);



module.exports = router;
