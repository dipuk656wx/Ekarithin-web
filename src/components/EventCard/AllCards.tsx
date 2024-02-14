import React, { Component } from "react";
import { Link } from "react-router-dom";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import EventCard from "./EventCard";

interface Slide {
  key: number;
  content: JSX.Element;
}

interface AllCardsState {
  goToSlide: number;
  offsetRadius: number;
  showNavigation: boolean;
  config: any;
}

export default class AllCards extends Component<{}, AllCardsState> {
  slides: Slide[];
  intervalId?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: { tension: 120, friction: 14, precision: 0.1 }
    };

    this.slides = [
      {
        key: 1,
        content: (
          <img
          src="/images/Arts.png"
          alt="1"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 2,
        content: (
          <img
            src="/images/mlbb.png"
            alt="2"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 3,
        content: (
          <img
            src="/images/PitchPerfect.jpg"
            alt="3"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 4,
        content: (
          <img
            src="/images/Rockville.png"
            alt="4"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 5,
        content: (
          <img
            src="/images/RoboGp.png"
            alt="5"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 6,
        content: (
          <img
            src="/images/ritzy.jpg"
            alt="6"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 7,
        content: (
          <img
            src="/images/coderaze.png"
            alt="7"
            className="w-full h-auto"
          />
        )
      },
      {
        key: 8,
        content: (
          <img
            src="/images/Shark.png"
            alt="8"
            className="w-full h-auto"
          />
        )
      }
    ];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length
      }));
    }, 2000); // Adjust the interval time (in milliseconds) as needed
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-white">
  <span className="mr-4">
    <Link to="/technical-events" className="hover:text-green-800">
      Technical Events
    </Link>
  </span>
  <span className="mr-4">
    <Link to="/cultural-events" className="hover:text-gray-800">
      Cultural
    </Link>
  </span>
  <span>
    <Link to="/sport-events" className="hover:text-gray-800">
      Sports
    </Link>
  </span>
</div>

        <h1 className="text-black text-center mb-4">Gallery Section</h1>
        <div className="max-w-screen-lg mx-auto">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>
        <div className="flex justify-around mt-4"></div>
      </div>
    );
  }
}
