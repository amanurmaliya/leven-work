import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import "./about.css";
import PopUpForm from "../Contact/PopUpForm";

function About() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      // Show the popup after 10 seconds
      const timer = setTimeout(() => {
        setShowPopUp(true);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, []);

  const handleClosePopUp = () => {
    setShowPopUp(false);
    sessionStorage.setItem("hasShownPopup", "true");
  };

  return (
    <div className="about-page">
      <Layout />
      <div className="top"></div>
      <div className="middle text-[#000] font-semibold justify-center pt-24 align-middle mb-0 pb-0">
        <h1 className="text-6xl text-[#0b7676] justify-center text-center pb-0 font-semibold">
          LevenWork: Your Marketing Mavericks
        </h1>

        <div className="para text-[backcolor] text-[20px] p-5 text-2xl justify-center align-middle text-center">
          <p>
            We're{" "}
            <b className="text-[#0b7676] text-[28px]">Marketing Mavericks</b>, a
            fearless squad of creative strategists redefining the marketing
            landscape. With a perfect blend of artistry and analytics, we craft
            campaigns that captivate, convert, and create lasting impact.
          </p>
          <br />
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#d1f3f4] via-[#a4ecf1] to-[#66d5f7]">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
          </div>
        </div>
      </section>

      <div className="faqs w-full align-middle justify-center p-10 text-2xl text-[#000] rounded-3xl m-10">
        <h3 className="text-5xl justify-center text-center text-[#0b7676]">
          Mind Blowing Facts About Us🤯
        </h3>
        <details>
          <summary className="text-[#000]">How to Reach Us?</summary>
          <div className="ml-10">
            You won't <em>be-leaf</em> it's soo <strong>easy</strong>. Just go
            to Contact Page, fill in the <em>Details & sit & relax</em> like{" "}
            <em>PANDA</em>😁 and we will reach You..
            <br />
            <br />
            <img
              className="panda-image panda-container w-60 h-60 ml-96 border-4 rounded-xl"
              src="./images/pandaEat.gif"
              alt="Panda Eating"
            />
            <br />
          </div>
        </details>
        <details>
          <summary className="text-[#000]">
            How expert😎 we are at our work?
          </summary>
          <div className="ml-10 pt-2">
            Totally <strong>Great!</strong> As Like the{" "}
            <strong>Panda Climbing Tree</strong>
            <br />
            <br />
            <img
              className="panda-image panda-container w-60 h-50 ml-96 border-4 rounded-xl"
              src="./images/panda-hye.gif"
              alt="Panda Climbing"
            />
            <br />
          </div>
        </details>
        <details>
          <summary className="text-[#000]">
            Should we need to care once we give marketing to You?😱
          </summary>
          <div className="ml-10">
            A BIG <strong>NOOOOOOOOO....</strong>
            <br />
            Just take a <em>Chill Pill</em> Like this <em>PANDA</em>😁 and rest
            we will <strong>MANAGE</strong>
            <br />
            <br />
            <img
              className="panda-image panda-container w-60 h-50 ml-96 border-4 rounded-xl"
              src="./images/panda.gif"
              alt="Cute Panda"
            />
            <br />
          </div>
        </details>
      </div>

      <Footer />
      {showPopUp && <PopUpForm onClose={handleClosePopUp} />}
    </div>
  );
}

export default About;
