import AllCards from "../../components/EventCard/AllCards"
import EventCard from "../../components/EventCard/EventCard"
import TechnicalEventcard from "../../components/EventCard/TechnicalEventcard"
import Header from "../../components/Header"


const eventsName = [
    "andsdaf", "asdfklajskdf", "asdfa"
]
const EventsPage = () => {


    return (
        <div
            className="fixed inset-0 grid text-white"
            style={{ gridTemplateRows: "auto 1fr auto" }}
        >
            < Header />
            {/* <EventCard/> */}
            <AllCards/>
            <div className="w-full overflow-y-scroll" style={{background: "/images/backGround.svg"}}>
                {eventsName.map((item) => (
                    <div>
                        Technical 
                        
                    </div>
                ))}
            </div>
        </div>
    )
}


export default EventsPage;