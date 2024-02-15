import React from "react";
import { useParams } from "react-router-dom";
// import { TechEventData } from "../../TechEventData"; // Importing event data
// TechEventData
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { TechEventData } from "../../TechData";
import Header from "../header";

interface Event {
  id: number;
  image: string;
  name: string;
  description: string;
  rules: string[];
  prizes: string[];
  team: string;
  category: string;
  fees: string;
  contactInfo: string[];
  location: string;
  date: string;
  link: string;
}

const TechnicalSingal: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract the 'id' parameter from the URL

  if (!id) {
    return <div className="bg-red-200 p-4">No eventId provided</div>;
  }

  // Find the event with the matching ID
  const event: Event | undefined = TechEventData.find(
    (event) => event.id === parseInt(id)
  );

  if (!event) {
    return <div className="bg-red-200 p-4">Event not found</div>;
  }

  return (
    <div className="bg-gray-200 gap-3 min-h-screen text-white">
      <Header/>
      <div
        className="container mx-auto p-4 px-4 py-8 "
        style={{ backgroundImage: `url("/backGround.svg")` }}
      >
        <Card className="shadow-lg">
          <Row className="grid grid-cols-1 p-2 md:grid-cols-2 gap-2">
            <Col sm="12" md="6">
              <CardImg
                top
                src={event.image}
                alt="Event Image"
                className="object-cover w-100 h-100 shadow" // Add shadow to CardImg
              />
            </Col>
            <Col sm="12" md="6">
              <CardBody className="h-full shadow">
                {" "}
                {/* Add shadow to CardBody */}
                <CardTitle className="text-2xl justify-center font-bold border-spacing-4 border-none shadow-lg-red p-4">
                  {event.name}
                </CardTitle>
                <CardText className="font-bold border-spacing-4 border shadow-sm p-4 " >
                  {event.description}
                </CardText>
                <CardSubtitle  className="font-bold border-spacing-4 border shadow-sm p-4 ">
                  <strong>{event.prizes}</strong>
                </CardSubtitle>
                <CardText className="font-bold border-spacing-4 border shadow-sm p-4 ">
                  <strong>Rules:</strong> {event.rules}
                </CardText>
                <CardText className="font-bold border-spacing-4 border shadow-sm p-4 ">
                  <strong>In case of any query, contact:</strong>{" "}
                  {event.contactInfo.join(", ")}
                </CardText>
                <CardText className="font-bold border-spacing-4 border shadow-sm p-4 "><strong>Entry fee</strong> :{event.fees}</CardText>
                <div>
                  <CardTitle className="font-bold border-spacing-4 border shadow-sm p-4 ">
                    <strong>Date:</strong> {event.date}
                  </CardTitle>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-between">
                  <Button className="mt-4 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 md:mr-2">
                    <a href={event.link}>Register</a>
                  </Button>
                  <Button className="mt-4 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 md:ml-2">
                    <a href="/events">Go to Events</a>
                  </Button>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSingal;
