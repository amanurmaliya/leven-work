import React from "react";
import Gaurav from "./Gaurav2.png";
// import Avi from './images/Avi.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamLayout.css";
function Teamlayout() {
  const teamData = [
    {
      name: "Avi Shamnani",
      image: "./images/Avi.png",
      role: "Content Creator | Marketing Storyteller | Engagement Expert",
      specialization: `I craft compelling content that captivates audiences, drives engagement, and fuels brand growth. With a passion for creative storytelling and a keen understanding of marketing strategies, I develop content that resonates and converts.`,
    },
    {
      name: "Gaurav Dwivedi",
      image: "./images/Gaurav.png",
      role: "Ads Manager",
      specialization: `Highly creative and results-driven professional with expertise in Graphic Design, SEO, Google Ads, and Meta Ads. Proficient in crafting visually stunning designs and driving digital campaigns that deliver.`,
    },
    {
      name: "Roshan  Chaudhary",
      image: "./images/Roshan.png",
      role: "Editor | Visual Storyteller | Marketing Maestro",
      specialization: `I weave compelling narratives through video, crafting engaging stories that captivate audiences and drive brand success. With expertise in editing software and a keen eye for detail, I bring marketing visions to life.`,
    },
    {
      name: "Sarad Gupta",
      image: "./images/Sarad.png",
      role: "Graphic Designer",
      specialization:
        "Visual Storyteller | Graphic Designer | Creative Problem Solver I craft compelling visuals that capture attention, convey messages, and drive results. With a keen eye for detail and a passion for innovation, I bring brands to life through effective design solutions",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768, // tablet screen size
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480, // mobile screen size
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "10px",
        },
      },
    ],
  };

  // To track which slide is active
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <div className="mt-20 mb-10 ml-14 mr-16 bg-gray-800 rounded-3xl ">
      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div
            key={member.name}
            className={`team-card border-2 border-primary mx-2 my-10 md:mx-4 md:my-12 ${
              index === activeSlide ? "scale-100" : "scale-75"
            } transition-transform duration-300 sm:mx-4 sm:my-6`}
          >
            <div className="image w-[350px] bg-gray-100 h-64 mt-3 ml-3.5 mb-0.5 rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full rounded-xl"
              ></img>
            </div>
            <div className="description flex tracking-tighter flex-col mt-0 w-full p-4">
              <div className="text-[#fff] font-bold text-xl">{member.name}</div>
              <div className="text-[#e6dbdb] font-medium">{member.role}</div>
              <div className="text-[#fff] text-xl font-normal flex tracking-tighter">
                {member.specialization}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Teamlayout;
