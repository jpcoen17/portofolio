import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { Link, Outlet } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCloudDownloadAlt
} from "react-icons/fa";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <section className="card-section home-card">
        <div className="profile">
          <div className="slide"></div>

          <div className="image">
            <img
              src="/assets/profile(1).jpg"
              alt="profile"
              loading="lazy"
            />
          </div>

          <div className="title" data-aos="fade-up">
            <h1>Muhammad Iklil Yaumal Fithroh</h1>
          </div>

          <div className="subtitle subtitle-typed">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#78cc6d",
                fontWeight: 500,
                fontSize: "16px",
              }}
              startDelay={2000}
              cursorColor="#78cc6d"
              multiText={[
                "Community Manager",
                "Moderator",
                "Ambassador",
                "Web3 Enthusiast"
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
              multiTextLoop
            />
          </div>

          {/* ✅ SOCIAL */}
          <div className="social">
            <a
              className="link facebook"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              className="link instagram"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="link twitter"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>

          {/* ✅ LINKS */}
          <div className="links">
            <a
              href="/assets/Resume.pdf"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text">Download CV</span>
              <FaCloudDownloadAlt className="icon d-icon" />
            </a>

            <Link to="/contact" className="link">
              <span className="text">Contact Me</span>
            </Link>
          </div>
        </div>
      </section>

      <Outlet />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  .card-section {
    position: relative;
    border-radius: 4px;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
    }

    &:after {
      content: "";
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient.gradient1};
    }

    .profile {
      padding: 50px;
      background-color: ${({ theme }) => theme.bg.primary};
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .image {
      margin: 80px 0 20px 0;
      width: 140px;

      img {
        width: 100%;
        border-radius: 50%;
        border: 3px solid ${({ theme }) => theme.colors.white};
      }
    }

    .title h1 {
      font-size: 2rem;
    }

    /* ✅ SOCIAL FIX */
    .social {
      margin-top: 15px;

      a {
        margin: 0 8px;
        font-size: 1.2rem;
        transition: 0.2s;
        color: ${({ theme }) => theme.title.primary};
      }

      a:hover {
        transform: translateY(-3px);
      }

      .facebook:hover {
        color: #1877f2;
      }

      .instagram:hover {
        color: #e4405f;
      }

      .twitter:hover {
        color: #1da1f2;
      }
    }

    .links {
      margin-top: 20px;

      .link {
        margin: 5px;
        display: inline-flex;
        align-items: center;
      }

      .d-icon {
        margin-left: 6px;
      }
    }
  }
`;