import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import './Clients.css'; // Ensure the path to the CSS file is correct

function Clients() {
  const [imageSrc, setImageSrc] = useState("images/handshake.png");
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setImageSrc("images/hand1-unscreen.gif");
    setHover(true);
  };

  const handleMouseLeave = () => {
    setImageSrc("images/handshake.png");
    setHover(false);
  };

  const handleButtonClick = () => {
    navigate("/team");
  };

  return (
    <div className='main-container'>
      <Layout>
        <div className="heading-container bg-[#f51e1e]">
          <h1 id="mainheading">Our Clients</h1>
          <img src="images/client_logo.png" alt="Client Image" />
        </div>

        <div className="content">
          <br />
          <h1 className='text-4xl animated-text relative text-color-change mb-4 sm:mb-6 md:mb-8'>
  "Your Vision,
</h1><h1 className='text-4xl animated-text relative text-color-change mb-4 sm:mb-6 md:mb-8'>
  Our Mission"
</h1>

          <br />
          <p style={{ fontSize: '25px' }}> "Welcome to <b className='text-[#0b7676]'>Leven Work!</b>"</p>
          <br />
          <h2 className='text-xl'>"Partnering with us will propel your brand to its peak potential and set new standards of Excellence."</h2>
          <br />
          <p>
            <b style={{ color: '#000' }} className='text-3xl'>Ready to unleash your brand's full potential?</b> Let's embark on this exciting journey together.
          </p>
          <br />
          <div className='image-container'>
            <img 
              id="image" 
              className={`justify-center align-middle ${hover ? 'butterfly' : ''}`} 
              src={imageSrc} 
              alt="Image" 
              onMouseEnter={handleMouseEnter}   
              onMouseLeave={handleMouseLeave} 
            />
          </div>
          <br /><br />
          <p className='p-10 text-xl'>
            {`We're excited to work with forward-thinking businesses
            to elevate their digital presence. While we're a new agency, our team is equipped with the skills,
            creativity, and passion to deliver outstanding results.`}
          </p>
          <p className='text-[#0b7676] text-3xl'><b>Want to see the Minds Behind Your Success...</b></p>
          <br />
          <button id="team" style={{ fontSize: '20px' }} onClick={handleButtonClick}><b>See Brilliant Minds</b></button>
          <br /><br />

          <div className="only-images flex">
            <div className="image-row">
              <img src="images/grp1.png" alt="Image 1" className="imgdiv" />
              <img src="images/grp2.png" alt="Image 2" className="imgdiv" />
            </div>
            <div className="image-row">
              <img src="images/grp3.png" alt="Image 3" className="imgdiv" />
              <img src="images/grp4.png" alt="Image 4" className="imgdiv" />
            </div>
          </div>
          <br /><br /><br />
          <div className='bg-slate-800 px-0 pt-10 pb-5 '>
          <p className='text-3xl text-[#fff] mb-0 pb-0'>
  <b className='mb-0 pb-0 text-[#fff]'>Are You Ready to Take Your Brand to New Heights....!!! If Yes Then 
    <a 
      className='font-bold bg-gradient-to-r from-[#ADD8E6] via-[#FFFFFF] to-[#E0FFFF] transition-all border-solid border-4 border-gray-100 p-2 ml-4 rounded-full text-black shadow-lg hover:bg-gradient-to-r hover:from-[#BFEFFF] hover:via-[#FFFFFF] hover:to-[#E0FFFF] hover:shadow-xl text-lg sm:text-base md:text-sm lg:text-xs' 
      href='tel:+918120665322'
    >
      Join Us
    </a>
  </b>
</p>

            <br /><br />
            <h2 className='text-3xl text-[#fff] mt-0'>We Will be happy to be part of one more success story.</h2>
          </div>
          <br />
          <div className='bg-[#]  px-5 py-9 pt-0 mt-0 text-xl flex justify-center '>

            <p>{`At Leven Work,
            our team is a dynamic group of passionate strategists, creative thinkers, and tech enthusiasts 
            dedicated to making your brand shine. Each member brings unique skills and experience, 
            all united by a shared goal: to elevate your business and drive lasting impact.`}
            </p>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default Clients;
