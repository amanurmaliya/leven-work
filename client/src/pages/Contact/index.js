import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [flagUrl, setFlagUrl] = useState("https://flagcdn.com/w320/in.png");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    services: "Digital Marketing", // Default selected value
    location: "",
    description: "",
  });

  
  const navigate = useNavigate();

  const closeForm = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryCodeChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountryCode(countryCode);

    const country = countries.find(
      (country) =>
        country.idd &&
        country.idd.root &&
        countryCode ===
          country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : "")
    );

    if (country && country.flags && country.flags.png) {
      setFlagUrl(country.flags.png);
    } else {
      setFlagUrl("");
    }
  };

  const handlePhoneChange = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, "");
    if (phoneNumber.length > 10) {
      setErrorMsg("Please enter a 10-digit phone number");
    } else {
      setErrorMsg("");
    }
    setPhone(phoneNumber);

    const allFieldsFilled = Object.values({
      ...formData,
      phone: phoneNumber,
    }).every((value) => value.trim() !== "");

    setIsFormComplete(allFieldsFilled && phoneNumber.length === 10);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const allFieldsFilled = Object.values({
      ...formData,
      [e.target.name]: e.target.value,
    }).every((value) => value.trim() !== "");

    setIsFormComplete(allFieldsFilled && phone.trim().length === 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullPhoneNumber = selectedCountryCode + phone;

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhoneNumber,
        }),
      });

      if (response.ok) {
        alert("Your details have been successfully submitted!");
        setFormData({
          name: "",
          email: "",
          business: "",
          services: "Digital Marketing",
          location: "",
          description: "",
        });
        setPhone("");
        setSelectedCountryCode("+91");
        setFlagUrl("https://flagcdn.com/w320/in.png");
        setIsFormComplete(false);
      } else {
        alert("Failed to submit your details. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert(
        "An error occurred while submitting your details. Please try again."
      );
    }
  };

  return (
    <>
      <Layout>
        <div
          className={`contact-page ${isFormComplete ? "completed-form" : ""}`}
        >
          <section className="container bg-white">
            <header>Contact Us</header>
            <span className="close-btn" onClick={closeForm}>
              ×
            </span>
            <form onSubmit={handleSubmit} className="form">
              {/* Full Name */}
              <div className="input-box">
                <label htmlFor="Name">
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="input-box">
                <label htmlFor="Email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email-id"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="input-box">
                <label>
                  Mobile Number<span>*</span>
                </label>
                <div className="phone-input flex">
                  <select
                    id="country-code"
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="text-black"
                  >
                    <option value="">Select Country Code</option>
                    {countries.map((country, index) =>
                      country.idd && country.idd.root ? (
                        <option
                          key={index}
                          value={
                            country.idd.root + (country.idd.suffixes[0] || "")
                          }
                        >
                          {country.idd.root + (country.idd.suffixes[0] || "")}
                        </option>
                      ) : null
                    )}
                  </select>
                  {flagUrl && (
                    <img
                      src={flagUrl}
                      alt="Country flag"
                      style={{
                        width: "50px",
                        height: "40px",
                        marginLeft: "5px",
                      }}
                    />
                  )}
                </div>
                <input
                  className="inline"
                  type="tel"
                  id="phone"
                  placeholder="Enter Mobile no."
                  required
                  inputMode="numeric"
                  minLength="10"
                  maxLength="10"
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="[0-9]*"
                />
                <p id="error-msg">{errorMsg}</p>
              </div>

              {/* Business */}
              <div className="input-box">
                <label htmlFor="business">Business</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  placeholder="What Business do you have? (Optional)"
                />
              </div>

              {/* Services */}
              <div className="dropdown">
                <label htmlFor="Services">Services</label>
                <select
                  name="Services"
                  id="Services"
                  value={formData.Services}
                  onChange={handleInputChange}
                  required
                >
                  <optgroup label="Services">
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Creative Services">Creative Services</option>
                    <option value="Content Services">Content Services</option>
                  </optgroup>
                </select>
              </div>

              {/* Location */}
              <div className="input-box">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your Location (Optional)"
                />
              </div>

              {/* Description */}
              <div className="input-box">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add a Description (Optional)"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Contact;
