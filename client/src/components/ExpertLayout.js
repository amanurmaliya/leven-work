import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ExpertLayout() {
  const works = [
    {
      title: "Step 1: Strategy and Planning",
      image:
        "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: `
        ● In-depth client consultation to understand business goals and target audience.<br/>
        ● Market research and competitor analysis.<br/>
        ● Development of a comprehensive marketing strategy.
      `,
      linkTitle: "Check Strategy",
      path: "/contact", // Use path for Link
    },
    {
      title: "Step 2: Creative Development",
      image:
        "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: `
        ● Brainstorming innovative ideas and concepts.<br/>
        ● Design and development of creative assets (visuals, copy, etc.).<br/>
        ● Building a strong brand identity.
      `,
      linkTitle: "Explore Creative Solutions",
      path: "/contact", // Use path for Link
    },
    {
      title: "Step 3: Campaign Execution",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: `
        ● Implementation of marketing campaigns across various channels.<br/>
        ● Monitoring and analysis of campaign performance.<br/>
        ● Optimization for maximum impact.
      `,
      linkTitle: "Learn About Our Campaigns",
      path: "/contact", // Use path for Link
    },
    {
      title: "Step 4: Measurement and Optimization",
      image:
        "https://images.pexels.com/photos/3782226/pexels-photo-3782226.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: `
        ● Tracking key performance indicators (KPIs) and ROI.<br/>
        ● Regular reporting and analysis.<br/>
        ● Continuous optimization of campaigns.
      `,
      linkTitle: "Optimize Your Results",
      path: "/contact", // Use path for Link
    },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-[#D6EFFF] text-white p-10 rounded-xl gap-8 mb-0">
      <div className="w-full text-center mb-8">
        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Proven Methodology That Brings
          <br className="sm:hidden" />
          <strong className="text-[#0b7676]"> Intense Growth</strong>
        </h1>
      </div>
      {works.map((work, index) => (
        <div
          key={index}
          className="w-full sm:w-80 md:w-[500px] lg:w-[500px] h-[800px] m-4 p-4 bg-[#000] rounded-2xl flex flex-col relative"
        >
          <div className="w-full h-[500px] mb-4">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full flex flex-col p-4 flex-grow">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {work.title}
            </h1>
            <p
              className="text-base md:text-xl text-white mb-8"
              dangerouslySetInnerHTML={{ __html: work.description }}
            />
            <Link
              to={work.path} // Use Link with to attribute
              className="absolute bottom-4 right-4 text-2xl text-blue-400 border-red-600"
            >
              {work.linkTitle}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpertLayout;
