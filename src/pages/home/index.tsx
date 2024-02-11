import { useEffect } from "react";
import { contentApi } from "../../common/api";
import axios from "axios";
import Header from "../../components/header";
import EventCard from "../../components/EventCard/EventCard";

const Home = () => {
  return (
    <div
      className="fixed inset-0 grid text-white"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <div className="header">
      <Header />
      </div>
      <div
        className=""
        style={{ background: "/images/backGround.svg" }}
      >
        <iframe src="/index.html" width="" height="" ></iframe>
      </div>
    </div>
  );
};

export default Home;
