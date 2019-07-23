const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')

router.use('/healthcheck', HealthcheckRoutes)

module.exports = router
