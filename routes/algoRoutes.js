import express from 'express'
const router = express.Router()
import { problemsMap } from "../utils/problemsMap.js"
import { algo } from '../controllers/algoController.js'

Object.keys(problemsMap).forEach(problemName => router.route(`/${problemName}`).post((req, res, next) => {req.name = problemName; next()}, algo))

export default router