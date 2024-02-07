import EventCard from "../../components/EventCard/EventCard"
import Header from "../../components/header"


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
            <div className="w-full overflow-y-scroll" style={{background: "/images/backGround.svg"}}>
                {eventsName.map((item) => (
                    <div>
                        <EventCard />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default EventsPage;