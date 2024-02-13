import { useEffect } from "react";
import { contentApi } from "../../common/api";
import axios from "axios";
// import Header from "../../components/Header";

import EventCard from "../../components/EventCard/EventCard";

const Home = () => {
  return (
    <div
      className="fixed inset-0 grid text-white"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >

      {/* <Header /> */}
      <div className="" style={{ background: "/images/backGround.svg" }}></div>
      <iframe src="/index.html" width="100%" height="100%"></iframe>
    </div>
  );
};

export default Home;
