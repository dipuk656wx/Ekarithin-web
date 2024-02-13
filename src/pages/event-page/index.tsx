import AllCards from "../../components/EventCard/AllCards";

import Header from "../../components/header";

const eventsName = ["andsdaf", "asdfklajskdf", "asdfa"];

const EventsPage = () => {
    return (
        <div className="fixed inset-0 grid text-white" style={{ gridTemplateRows: "auto 1fr auto", backgroundImage: `url("/backGround.svg")` }}>
            <Header />
            <AllCards />
          
        </div>
    );
}

export default EventsPage;
