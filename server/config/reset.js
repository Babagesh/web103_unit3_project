import './dotenv.js'
import {pool} from './database.js'
import events from '../data/eventData.js'

const createEventsTable = async() => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date VARCHAR(50) NOT NULL,
        length VARCHAR(50) NOT NULL,
        image VARCHAR(1000) NOT NULL
    )
    `
    try{
        const res = await pool.query(createTableQuery)
        console.log('table created')
    }
    catch(err)
    {
        console.error('error creating table')
    }
}

const seedEventsTable = async() => {
    await createEventsTable()
    for(const event of events){
        const query = 
        {
            text: `INSERT INTO events (name, date, length, image) VALUES ($1,$2,$3,$4)`
        }
        const values = [
            event.name,
            event.date,
            event.length,
            event.image
        ]
        try {
            await pool.query(query.text, values)
            console.log(`${event.name} added`)
        } catch(err) {
            console.error('error inserting values')
        }
    }
}

seedEventsTable()

