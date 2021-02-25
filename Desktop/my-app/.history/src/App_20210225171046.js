import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Card,
} from "reactstrap";
import Particles from "react-particles-js";
import { AnimationWrapper } from "react-hover-animation";
import { Row, Col } from "reactstrap";
import blue from "./assests/blue.jpg";
import Modelling1 from "./assests/Modelling1.png";
import three from "./assests/three.png";
import four from "./assests/four.png";
import five from "./assests/five.png";
import six from "./assests/six.png";
import seven from "./assests/seven.png";
import nine from "./assests/nine.png";
import ten from "./assests/ten.png";

import amin4 from "./assests/amin4.png";

import "./App.css";
import Aos from "aos";
// import Modal from 'react-modal';
import Typed from "react-typed";
import { Carousel } from "react-bootstrap";

import "aos/dist/aos.css"; // You can also use <link> for styles

import hcl from "./assests/hcl.png";
import tosee2 from "./assests/tosee2.webp";
import port3 from "./assests/port3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        className="section1"
        id="section1"
        style={{
          backgroundImage: `url(${port3})`,
        }}
      >
        <Navbar
          data-aos="fade-right"
          color="red"
          light
          expand="md"
          className="navbar"
        >
          <NavbarBrand href="/">
            <h4 className="textheader1">Amin Siddique</h4>
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            style={{ color: "white", backgroundColor: "#F5F5F5" }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>

            <Link
              activeClass="active"
              to="container1"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="container2"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Contact
            </Link>
          </Collapse>
        </Navbar>
        <div className="particle">
          <Particles
            canvasClassName="particlesCanva"
            params={{
              particles: {
                number: {
                  value: 45,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0.5,
                    color: "tomato",
                  },
                },
                size: {
                  value: 8,
                  random: true,
                  anim: {
                    anable: true,
                    speed: 5,
                    size_min: 0.1,
                    sync: true,
                  },
                },

                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: true,
                  },
                },
              },
            }}
          />
        </div>

        {/* <========= TEXT SART====================> */}

        <Col
          md="5"
          sm="12"
          style={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "center",
            paddingLeft: 50,
          }}
        >
          <div className="top-text">
            <div data-aos="fade-down-right" className="DesignInnovation">
              {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
              CAD +<p style={{ paddingBottom: -20 }}></p>
              <Typed
                strings={["CAM DESIGNER"]}
                typeSpeed={40}
                color={"white"}
              />
              <br />
              <Typed
                strings={[
                  "SOLIDWORKS",
                  "CAMWorks",
                  "Unigraphics",
                  "CATIA",
                  "MasterCAM",
                  "I-deas ",
                ]}
                typeSpeed={40}
                backSpeed={50}
                color="red"
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: 18.5,
                    textAlign: "center",
                    borderColor: "transparent",
                  }}
                />
              </Typed>
            </div>
          </div>
        </Col>
      </div>

      {/* <========= ABOUT ME START===================> */}

      <div id="container2" style={{ backgroundImage: `url(${tosee2})` }}>
        <Row>
          <Col md="12">
            <div className="aboutmeheadertextheight">
              <h1 data-aos="fade-left" className="Aboutme">
                ABOUT ME
              </h1>
            </div>

            <Row>
              <Col
                md="6"
                sm="12"
                xs="12"
                className="container2column"
                style={{}}
              >
                <AnimationWrapper>
                  <Col
                    md="6"
                    sm="12"
                    xs="12"
                    className="photoheight"
                    classID="container2insider"
                  >
                    <img src={amin4} className="Photosize" alt="amin" />
                  </Col>
                </AnimationWrapper>
              </Col>

              <Col md="6" sm="12" xs="12" className="container2column">
                <Col sm="12" classID="container2insider">
                  <Col sm="12" className="container2insideitem">
                    <h6
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className="seondfontfamily"
                    >
                      Hi, I am Amin Siddique.
                    </h6>
                  </Col>
                  <Col
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    md="8"
                    sm="12"
                    className="mydetailsstyle"
                  >
                    I am working in HCL Technologies as Module QA Lead Engineer
                    for 12 years. I have completed my B.E in Production
                    Engineering in the year 2001. I am passionate about my work
                    which includes giving support to my customers, maintain
                    quality releases of my product-CAMWorks, conducting training
                    on CAMWorks. I always find ways to improve my work and make
                    it more efficient. I take more pride in handling support
                    cases on licensing. I make my juniors to work with full
                    energetic and give best of their ability. Technical Skills:-
                    SOLIDWORKS Modules- Modelling-8/10 Manufacturing-9/10
                  </Col>

                  <div></div>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="emptytwo"></div>

      {/* <========= ABOUTME END====================> */}

      {/* <========= experiencehosting platform====================> */}

      <div className="section3" id="section3">
        <Row>
          <Col md="12">
            <div className="techicalskills">
              <h1 data-aos="fade-up-left" className="Aboutme">
                SKILLS
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="Container2frontend">
            <h1
              contenteditable
              spellcheck="false"
              data-aos="fade-up-right"
              className="frontendfont neon"
            >
              SOLIDWORKS
            </h1>

            <div className="techskillsdescription">
              <div className="col-md-8 col-sm-12  neonn" data-aos="zoom-out">
                Currently working in HCL Technologies As a Module QA Lead since
                2008. I work as a QA for our inhouse develop CAM application
                name as CAMWorks. CAMWorks is a CAM solution with features like
                Automatic Feature Recognition (AFR), Knowledge-based machining.
                It covers modules like Mill, Turn, MillTurn and WireEDM.
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="section4">
        <Row>
          <Col md="12">
            <div className="techicalskills">
              <h1 data-aos="fade-up-left" className="Aboutme">
                WORK
              </h1>
            </div>
          </Col>
        </Row>
        <Carousel className="carousel-main">
          <Carousel.Item className="Caritem">
            <img
              className=" carouselimage"
              src={Modelling1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="carouseltext">3D Modelling</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={three} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">3D Modelling</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="carouselimage" src={four} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Assembly</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={five} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Assembly Drawing </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={six} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">CAM</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={seven} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Part Drawing</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={nine} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext"> Sheet Metal</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className=" carouselimage" src={ten} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Surfacing</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="space"></div>

      <div className="section5">
        <Row>
          <Col md="12">
            <div className="techicalskills">
              <h1 data-aos="flip-right" className="Aboutme">
                EXPERIENCE
              </h1>
            </div>
          </Col>
        </Row>
        <div className="empty"></div>
        <Row>
          <Col md="12">
            <div
              data-aos="flip-right"
              className="techicalskillimage"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 120,
              }}
            >
              <img src={hcl} style={{ backgroundColor: blue }} alt="amin" />
            </div>
          </Col>
        </Row>
        <div
          style={{
            height: "75%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Row>
            <Col md="1"></Col>
            <Col
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              md="5"
              style={{ padding: 20 }}
            >
              <div className="col-md-11 col-sm=12">
                <div className="experincedetailscenter">
                  <p className="experiencesetailinside">
                    Providing online support to our customers.
                  </p>
                  <p className="experiencesetailinside">
                    Either through mail or through online meeting.
                  </p>

                  <p className="experiencesetailinside">
                    Provide telephonic support if required.
                  </p>

                  <p className="experiencesetailinside">
                    Provide training to new users.
                  </p>
                  <p className="experiencesetailinside">
                    Solve License related issues on priority.
                  </p>

                  <div>
                    <p className="experiencesetailinside">
                      Identify bugs/enhancements in our product and enter it in
                      issuebase.
                    </p>
                  </div>

                  <p className="experiencesetailinside">
                    Analyzing the bug fixes done by the development team and
                    closing/reopening the bugs.
                  </p>
                  <p className="experiencesetailinside">
                    Running regression test system everyday and analyzing the
                    diffs for any regressions.
                  </p>
                  <p className="experiencesetailinside">
                    Modifying the regression test system to suite our purpose.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="0.9"></Col>

            <Col
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              md="5"
              style={{ padding: 20 }}
            >
              <div className="col-md-11 col-sm=12">
                <div className="experincedetailscenter">
                  <p className="experiencesetailinside">
                    Take responsibility of the upcoming new enhancements
                    (functionality) in new versions.
                  </p>
                  <p className="experiencesetailinside">
                    Discussion on specification document written by product
                    manager.
                  </p>
                  <p className="experiencesetailinside">
                    Creating System Test Plan (STP).
                  </p>
                  <p className="experiencesetailinside">
                    Executing System Test Plan.
                  </p>
                  <p className="experiencesetailinside">
                    Finding bugs/enhancements and adding in issuebase.
                  </p>
                  <p className="experiencesetailinside">
                    Suggesting any modifications in UI or in functionality to
                    product manager and approving it for the same.
                  </p>
                  <p className="experiencesetailinside">
                    Guiding the Technical writer to include the new enhancements
                    in Help files and Tutorials.
                  </p>
                  <p className="experiencesetailinside">
                    Giving sign-off of the enhancements.
                  </p>
                  <p className="experiencesetailinside">
                    Explaining the new enhancements to others in the team.
                  </p>
                  <p className="experiencesetailinside">
                    Conducting webinar on topics like Whats New in CAMWorks
                    version.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section6">
        <Row>
          <Col md="12">
            <div className="techicalskills">
              <h1 data-aos="fade-up-left" className="Aboutme">
                CONTACT
              </h1>
            </div>
          </Col>

          <Col md="12" style={{ display: "flex", justifyContent: "center" }}>
            <Card
              className="mob-logo"
              style={{
                height: 200,
                width: "70%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <div style={{ textAlign: "center", display: "flex" }}>
                <AnimationWrapper>
                  <SocialIcon url="https://www.facebook.com/amin.siddique.92" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="https://www.instagram.com/amin1490" />
                </AnimationWrapper>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Col
        md="12"
        style={{
          height: 40,
          backgroundColor: "white",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className="footertext">
          <h4 style={{ color: "black" }}>© Amin Siddique 2021</h4>.
        </div>
      </Col>
    </div>
  );
};

export default App;
