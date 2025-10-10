import express from 'express'
import getEvents from '../controllers/getEvents'

const router = express.Router()

router.get('/', getEvents)


export default router