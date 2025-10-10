import {useState, useEffect} from 'react'
import Event from '../components/Event'
import '../App.css'
const Events = () => {

    const [events, setEvents] = useState([])


    useEffect(() => {
        const fetchEvents = async() => {
            const response = await fetch('/events')
            const data = await response.json()
            setEvents(data)
        }
        fetchEvents()
    }, [])


    return (
        <div className = 'events'>
            <main className="events-grid">
                {
                     events && events.map((event) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.length}
                            image={event.image}
                        />
                     ))
                }
            </main>
        </div>
    )
}



export default Events