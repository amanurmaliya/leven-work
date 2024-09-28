import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import './Work.css'; // Assuming your styles are in the same folder do not move the css else change the path to there

// Importing the images 
import pin from './pin-icon.png'
import designer from './Designer.png';
import designer1 from './Designer(1).png';
import designer2 from './Designer(2).png';
import designer3 from './Designer (3).png';
import designer4 from './Designer(4).png';
import designer5 from './Designer(5).png';
import designer6 from './Designer(6).png';


const productsData = [
  {
    productName: "E-commerce",
    category: "E-commerce",
    image: designer,
    description: "Increased sales by Huge Amount for a fashion brand through SEO and PPC campaign.",
  },
  {
    productName: "Social Media Marketing",
    category: "SocialMediaMarketing",
    image: designer3,
    description: "Grew Instagram followers by a Significant Amount for a beauty influencer.",
  },
  {
    productName: "Branding",
    category: "Branding",
    image: designer4,
    description: "Developed a new brand identity for a tech startup that drastically boosted brand awareness.",
  },
  {
    productName: "Content Marketing",
    category: "ContentMarketing",
    image: designer5,
    description: "Generated valuable leads through a content marketing campaign for a company.",
  },
  {
    productName: "Website Design and Development",
    category: "WebsiteDesignAndDevelopment",
    image: designer2,
    description: "Increased website traffic extensively through a redesigned website.",
  },
  {
    productName: "Digital Marketing",
    category: "DigitalMarketing",
    image: designer1,
    description: "Achieved Mastery in SEO, PPC, social media, content marketing, and email marketing.",
  },
  {
    productName: "Creative Services",
    category: "CreativeServices",
    image: designer6,
    description: "Designed captivating visuals, crafted compelling copy, and produced engaging videos.",
  },
];

function Work() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    filterProduct(activeCategory);
  }, [activeCategory]);

  const filterProduct = (value) => {
    setActiveCategory(value);
  };

  return (
    <div>
      <Layout>
      </Layout>
        <div id="work-page" className="pt-10 m-0 p-0 pl-10 bg-gradient-to-r from-[#d1f3f4] via-[#a4ecf1] to-[#66d5f7]">
        <div id="our_work" className="">
        <div id="work_row">
        <div className="work_col" id="ourwork">
              <h3>Our Work</h3>
            </div>
            <div className="work_col">
              <p className="work_paragraph">
                We craft data-driven strategies that transform clicks into connections and content into
                conversations, creating dynamic digital experiences that elevate brands, amplify impact, and drive
                meaningful results.
              </p>
            </div>
          </div>

          <div className="work_wrapper">
            <div id="work_buttons">
              <button
                className={`work_button-value ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => filterProduct("all")}
              >
                All
              </button>
              <button
                className={`work_button-value ${activeCategory === "SocialMediaMarketing" ? "active" : ""}`}
                onClick={() => filterProduct("SocialMediaMarketing")}
              >
                Social Media Marketing
              </button>
              <button
                className={`work_button-value ${activeCategory === "Branding" ? "active" : ""}`}
                onClick={() => filterProduct("Branding")}
              >
                Branding
              </button>
              <button
                className={`work_button-value ${activeCategory === "E-commerce" ? "active" : ""}`}
                onClick={() => filterProduct("E-commerce")}
              >
                E-commerce
              </button>
              <button
                className={`work_button-value ${activeCategory === "ContentMarketing" ? "active" : ""}`}
                onClick={() => filterProduct("ContentMarketing")}
              >
                Content Marketing
              </button>
              <button
                className={`work_button-value ${activeCategory === "WebsiteDesignAndDevelopment" ? "active" : ""}`}
                onClick={() => filterProduct("WebsiteDesignAndDevelopment")}
              >
                Website Design and Development
              </button>
              <button
                className={`work_button-value ${activeCategory === "DigitalMarketing" ? "active" : ""}`}
                onClick={() => filterProduct("DigitalMarketing")}
              >
                Digital Marketing
              </button>
              <button
                className={`work_button-value ${activeCategory === "CreativeServices" ? "active" : ""}`}
                onClick={() => filterProduct("CreativeServices")}
              >
                Creative Services
              </button>
            </div>
            <div id="work_products">
              {productsData.map((product, index) => (
                <div
                  key={index}
                  className={`work_card ${product.category} ${
                    activeCategory === "all" || activeCategory === product.category
                      ? ""
                      : "hide"
                  }`}
                >
                  <div className="work_image-container">
                    <img src={product.image} alt={product.productName} />
                    <img src={pin} className="pin-icon" alt="Pin Icon" />
                    <div
                      className="work_description"
                      work_data-heading={product.productName + "  "}
                    >
                      {product.description}
                    </div>
                  </div>
                  <div className="work_container">
                    <h5 className="work_product-name">
                      {product.productName.toUpperCase()}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default Work;
