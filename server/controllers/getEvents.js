import {pool} from '../config/database.js'

const getEvents = async(req, res) => {
    try{
        const eventsQuery = `SELECT * FROM events ORDER BY id ASC`
        const result = await pool.query(eventsQuery)
        res.status(200).json(result.rows)
    }
    catch(err)
    {
        res.status(409).json({error: err.message})
    }
}

export default getEvents