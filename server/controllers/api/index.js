const router = require('express').Router();
const keyRoutes = require('./keyRoutes');

router.use('/keys', keyRoutes);

module.exports = router;
