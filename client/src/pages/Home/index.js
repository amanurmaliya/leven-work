import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import "./Services.css"; // Import your CSS file

// Importing the Expert Layout
import ExpertLayout from "../../components/ExpertLayout";

// Define the Home component
function Home() {
  // Define the initial state for image index for each section
  const [imageIndex, setImageIndex] = useState({
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
  });

  // Function to handle image switching
  const switchImage = (section, imagesLength) => {
    setImageIndex((prevState) => ({
      ...prevState,
      [section]:
        prevState[section] + 1 >= imagesLength ? 0 : prevState[section] + 1,
    }));
  };

  // Effect for switching images when hovering
  useEffect(() => {
    const imageContainers = document.querySelectorAll(".b-image");

    imageContainers.forEach((imageContainer, index) => {
      const images = imageContainer.querySelectorAll("img");
      const section = `section${index + 1}`;

      let hoverCount = 0;

      const handleMouseOver = () => {
        hoverCount++;
        switchImage(section, images.length);
      };

      imageContainer.addEventListener("mouseover", handleMouseOver);

      return () => {
        imageContainer.removeEventListener("mouseover", handleMouseOver);
      };
    });
  }, []);

  // Render the Home component
  return (
    <>
      <Layout />
      <div className="main-container mt-0 h-fit">
        <div className="top-container">
          <div className="left-section">
            <h1
              style={{ fontSize: "65px", fontWeight: "bold", color: "#0b7676" }}
            >
              Our <br />
              Ser<span className="black">vi</span>ces
            </h1>
          </div>
          <div className="right-section">
            <div className="curved-shape" style={{ fontSize: "20px" }}>
              Welcome to our <b style={{ fontSize: "25px" }}>digital agency</b>,
              where innovation meets execution to elevate your brand. We craft
              impactful strategies, stunning visuals, and seamless online
              experiences that resonate. Partner with us to turn your vision
              into powerful digital realities.
            </div>
          </div>
        </div>
        <div className="main">
          <div className="step-1" id="steps">
            <div id="image-container" data-hover-text="Digital Marketing">
              <img src="images/Creation.jpg" alt="" className="b-image" />
            </div>

            <div id="text">
              <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                Digital Marketing :
              </h1>
              <br />
              <p>
                - SEO (Search Engine Optimization) <br />
                - PPC (Pay-Per-Click) Advertising <br />
                - Social Media Marketing <br />
                - Email Marketing <br />
                - Content Marketing <br />
                - Influencer Marketing <br />- PR Marketing
              </p>
            </div>
          </div>

          <div className="step-2" id="steps">
            <div id="text">
              <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                Creative Services:
              </h1>
              <p>
                - Graphic Design <br />
                - Logo Design <br />
                - Branding <br />
                - Video Production <br />- Photography
              </p>
            </div>

            <div id="image-container" data-hover-text="Creative Services">
              <img
                src="images/ContentCreation.jpg"
                alt=""
                className="b-image"
              />
            </div>
          </div>

          <div className="step-3" id="steps">
            <div id="image-container" data-hover-text="Web Development">
              <img src="images/WebDevelopment.jpg" alt="" class="b-image" />
            </div>

            <div id="text">
              {" "}
              <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                Web Development:
              </h1>
              <p>
                - Website Design <br />
                - Website Development <br />
                - E-commerce Solutions <br />
                - Web Maintenance <br />- Web Analytics
              </p>
            </div>
          </div>

          <div class="step-4" id="steps">
            <div id="text">
              {" "}
              <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                Content Creation:
              </h1>
              <p>
                - Blog Writing <br />
                - Content Writing <br />
                - Social Media Content Creation <br />- Podcasting
              </p>
            </div>

            <div id="image-container" data-hover-text="Content Creation">
              <img src="images/Branding.jpg" alt="" class="b-image" />
            </div>
          </div>
        </div>{" "}
        {/* div of main */}
      </div>{" "}
      {/* DIV OF MAIN-CONTAINER*/}
      <ExpertLayout></ExpertLayout>
      <Footer></Footer>
    </>
  );
}

export default Home;
