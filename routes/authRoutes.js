import express from 'express'
const router = express.Router()

import { register, /*login, updateUser*/ } from '../controllers/authController.js'
//import authenticateUser from '../middleware/auth.js'
router.route('/register').get(register)
// router.route('/login').post(apiLimiter, login)
// router.route('/updateUser').patch(authenticateUser, updateUser)

export default router