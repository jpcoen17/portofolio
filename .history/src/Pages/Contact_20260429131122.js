import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";

function Contact() {

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, address, message } = userData;
    if (firstName && lastName && email && address && message) {
      const res = fetch("https://my-portfolio-9090c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Thanks, your message is sent successfully.");
      } else {
        alert("Please fill the data!");
      }
    } else {
      alert("Please fill the data!");
    }
  };
  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Get </span>
              in Touch
            </div>
            <div className="row">
              <div className="col col-12 border-line-v ">
               
                    <div className="map">
                      <div style={{ width: "100%" }}>
                        <iframe
                          title="map"
                          width="100%"
                          height="300"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          loading="lazy"
                          // onLoad={()=>setLoading(false)}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.0218711653451!2d111.66652277302998!3d-7.1680843316629685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e777d000ff2450b%3A0xb63fc4f1bd8e222e!2sRedaksi%20DUTA%20PERISTIWA!5e1!3m2!1sid!2sid!4v1777442996984!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        >
                          <a href="https://www.gps.ie/farm-gps/">
                            GPS Navigation
                          </a>
                        </iframe>
                      </div>
                    </div>
                  
              </div>
            </div>
            <div className="content contacts">
              <div className="title">
                <span className="first-word">Contact </span>
                Form
              </div>
              <div className="row">
                <div className="col col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post" noValidate="novalidate">
                      <div className="row">
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={userData.firstName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6 ">
                          <div className="group-val">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={userData.lastName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                              value={userData.email}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              value={userData.address}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-12">
                          <div className="group-val">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={userData.message}
                              onChange={postUserData}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <button className="button" onClick={submitData}>
                          <span className="text">Send Message</span>
                          <span className="icon">
                            <FaTelegramPlane />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }
    input,
    textarea,
    button {
      transition: all 0.3s ease 0s;
      box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
    }
    .title {
      color:  rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background:  ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
        .icon {
          font-size: 1.2rem;
          margin: 0 6px;
        }

        button {
          
          box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
          &:hover {
            background: ${({ theme }) => theme.highlight.primary};
            border: none;
            .icon {
              margin-left: 10px;
            }
          }
        }
      
    }
  }
`;
