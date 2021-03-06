const router = require('express').Router()
const ClientController = require(`${global.APP_CONTROLLER_PATH}/client.controller`)

const client = new ClientController()
const {verifyAccessToken} = require('../../middleware/auth.mware')

router.get('/', verifyAccessToken, client.getAll)
router.post('/', verifyAccessToken, client.create)
router.get('/tktt/:id', verifyAccessToken, client.getInfoByTKTT)

// other routes
module.exports = router