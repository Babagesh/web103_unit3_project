import express from 'express'
import getEvents from '../controllers/getEvents.js'

const router = express.Router()

router.get('/', getEvents)


export default router