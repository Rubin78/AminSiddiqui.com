// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// class Second extends Component {
//     render() {
//         console.log(this.props);
//         return (



            
//             <div>
//                 <Link to="/third" >Go to the third page</Link>

//         <div>{this.props.location.state}</div>
//             </div>
//         );
//     }
// }

// export default Second;








import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody

} from 'reactstrap';
import Particles from 'react-particles-js';
import { AnimationWrapper } from 'react-hover-animation'
import { Container, Row, Col,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import styles  from '../components/Second.css'
import blue from '../assests/blue.jpg';
import reactjs1 from '../assests/reactjs1.gif';
import Modelling1 from "../assests/Modelling1.png";
import two from "../assests/two.png";
import three from "../assests/three.png";
import four from "../assests/four.png";
import five from "../assests/five.png";
import six from "../assests/six.png";
import seven from "../assests/seven.png";
import nine from "../assests/nine.png";
import ten from "../assests/ten.png";



import CAM from "../assests/CAM.png";
import article from '../assests/article.png';
import Gymlog from '../assests/Gymlog.png';
import testing from '../assests/testing.gif';
import flex from '../assests/flex.gif';
import css31 from '../assests/css31.gif';
import snoop from '../assests/snoop.png';
import profile11 from '../assests/profile11.png';
import { shadows } from '@material-ui/system';

import Aos from "aos";
// import Modal from 'react-modal';
import Typed from 'react-typed';
import  { Carousel} from "react-bootstrap";

import 'aos/dist/aos.css'; // You can also use <link> for styles

import download from '../assests/download.png';
import unnamed from '../assests/unnamed.png';
import bitbucket from '../assests/bitbucket.gif';
import github from '../assests/github.gif';
import boostrap from '../assests/boostrap.gif';
import hcl from '../assests/hcl.png'
import hero1 from '../assests/hero1.jpg';
import car from '../assests/car.jpeg';
import bc from '../assests/bc.jpg';
import color from '../assests/color.jpg';
import logo1 from '../assests/logo1.png';
import tosee2 from '../assests/tosee2.webp';
import port3 from "../assests/port3.jpg";

import freepic from '../assests/freepic.jpg';
import { Hidden, Icon } from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer,FaFontAwesome ,} from 'react-icons/fa';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

import { Wave ,Random} from 'react-animated-text';
import { AccessibilityTwoTone } from '@material-ui/icons';




const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
useEffect(()=>{

  Aos.init({duration:2000});
},[]);





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
              to="container6"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Project
            </Link>
            <Link
              activeClass="active"
              to="container7"
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
          sm="5"
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

      {/* <Container
        fluid
        className="containerBody2"
        id="#container1"
        style={{
          backgroundImage: `url("https://sima-marmor.at/wp-content/uploads/2018/02/header.jpg")`,
        }}
      >
        {/* <========= HEADER START====================> */}

      {/* <Navbar
          data-aos="fade-right"
          color="red"
          light
          expand="md"
          className="navbar"
        >
          <NavbarBrand href="/">
            <h4 className="textheader1">Rubin Shaikh</h4>
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
              to="container3"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="container5"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="container6"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Project
            </Link>
            <Link
              activeClass="active"
              to="container7"
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
          /> */}

      {/* <========= HEADER  END====================> */}
      {/* </div> */}

      {/* <========= TEXT SART====================> */}
      {/* 
        <Col
          sm="5"
          style={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "center",
            paddingLeft: 40,
          }}
        >
          <div className="top-text">
            <div data-aos="fade-down-right" className="DesignInnovation">
              {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
      {/* DESIGN +<p style={{ paddingBottom: -20 }}></p>
              <Typed strings={["INNOVATION"]} typeSpeed={40} color={"white"} />
              <br />
              <Typed
                strings={[" Frontend Developer", "Web Designer"]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    color: "#EB5E55",
                    fontSize: 18,
                    textAlign: "center",
                    borderColor: "transparent",
                  }}
                />
              </Typed>
            </div>
          </div> */}
      {/* </Col>  */}
      {/* <========= TEXT SART====================> */}
      {/* </Container>  */}

      {/* <========= COntain ONE END====================> */}

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
                sm="6"
                xs="12"
                className="container2column"
                style={{}}
              >
                <AnimationWrapper>
                  <Col
                    sm="12"
                    className="photoheight"
                    classID="container2insider"
                  >
                    <img src={profile11} className="Photosize" />
                  </Col>
                </AnimationWrapper>
              </Col>

              <Col md="6" sm="6" xs="12" className="container2column">
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
              SOLID WORK
            </h1>

            <div className="techskillsdescription">
              <div
                className="col-md-8 col-sm-12  neonn"
                data-aos="fade-up-right"
              >
                Currently working in HCL Technologies As a Module QA Lead since
                2008. I work as a QA for our inhouse develop CAM application
                name as CAMWorks. CAMWorks is a CAM solution with features like
                Automatic Feature Recognition (AFR), Knowledge-based machining.
                It covers modules like Mill, Turn, MillTurn and WireEDM.
              </div>
            </div>

            {/* <CardDeck data-aos="fade-up-right" data-aos="flip-left">
              <Col sm="3" md="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      className="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs1}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactjs.org/"
                        >
                          React.js
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactnative.dev/"
                        >
                          React Native
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3" md="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={html5}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://www.w3schools.com/html/"
                        >
                          Html5
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3" md="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={flex}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                        >
                          Flex
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>
            </CardDeck> */}

            {/* <div className="emptyspace"></div>

            <CardDeck data-aos="fade-up-right" data-aos="flip-left">
              <Col sm="3">
                {" "}
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={boostrap}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
                        >
                          Boostrap4
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={testing}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://www.w3schools.com/js/"
                        >
                          JavaScript
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={article}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a className="linkcolor" target="_blank" href="">
                          Reactstrap
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col sm="3">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      id="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={css31}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://www.w3schools.com/css/"
                        >
                          Css3
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col> */}

            {/* 
          <Card style={{backgroundColor:'black'}}>
          </Card>
          <Card  style={{backgroundColor:'black'}}>
          </Card> */}
            {/* </CardDeck> */}
          </Col>
        </Row>
      </div>

      {/* <div className="section3" id="section3"> */}
      {/* <Row>
          <Col md="12">
            <CardDeck
              className="cardscenter"
              data-aos="fade-up-right"
              data-aos="flip-left"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col md="5" sm="10" xs="10">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      className="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs1}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactjs.org/"
                        >
                          React.js
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col md="5" sm="10" xs="10">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      className="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs1}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactjs.org/"
                        >
                          React.js
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

              <Col md="5" sm="10" xs="10">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      className="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs1}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactjs.org/"
                        >
                          React.js
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>

                      <Col md="5" sm="10" xs="10">
                <AnimationWrapper className="hoverwidthcards">
                  <Card id="Top-cards">
                    <CardImg
                      className="imgcardradius"
                      top
                      width="100%"
                      height="80%"
                      src={reactjs1}
                    />
                    <CardText className="cardinside">
                      <h5 className="Aboutme">
                        <a
                          className="linkcolor"
                          target="_blank"
                          href="https://reactjs.org/"
                        >
                          React.js
                        </a>
                      </h5>
                    </CardText>
                  </Card>
                </AnimationWrapper>
              </Col>
            </CardDeck>
          </Col>
        </Row>
      </div> */}

      {/* <========= experience  end ====================> */}

      {/* <========= experiencehosting platform start====================> */}

      {/* <div className="container4">
        <Col md="12">
          <div className="hostingtextheader">
            <h1 data-aos="fade-up-left" className="Aboutme">
              Hosting Platform
            </h1>
          </div>
          <CardDeck
            data-aos="fade-up-left"
            data-aos="flip-left"
            style={{ display: flex, justifyContent: "center" }}
          >
            <Col sm="3">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="80%"
                    src={github}
                  />
                  <CardText className="cardinside">
                    <h5 className="Aboutme">GitHub</h5>
                  </CardText>
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="3">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="80%"
                    src={download}
                  />
                  <CardText className="cardinside">
                    <h5 className="Aboutme">000webhost</h5>
                  </CardText>
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="3">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="80%"
                    src={bitbucket}
                  />
                  <CardText className="cardinside">
                    <h5 className="Aboutme">BitBucket</h5>
                  </CardText>{" "}
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="3">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="80%"
                    src={unnamed}
                  />
                  <CardText className="cardinside">
                    <Col>
                      <h5 className="Aboutme">Pythonanywhere</h5>
                    </Col>
                  </CardText>
                </Card>
              </AnimationWrapper>
            </Col>
          </CardDeck>
        </Col>
      </div> */}

      {/* <========= end experiencehosting platform====================> */}
      {/* 
      <Container
        fluid
        md="12"
        sm="12"
        className="container5"
        id="container5"
        style={{ backgroundImage: `url(${color})` }}
      >
        <Col md="12">
          <div className="experiencetextheight">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="Top-center"
              className="Aboutme"
            >
              Experience
            </h1>
          </div>

          <div md="12" className="expcard">
            <Col md="12" sm="12" className="expcardinside">
              <Col md="7" sm="12" className="expcardinsideitem">
                {/* start here */}

      {/* <Col md="12" style={{ borderRadius: 8 }}>
                  <Row style={{ justifyContent: "center", display: "flex" }}>
                    <Col
                      md="3"
                      data-aos="fade-up-left"
                      className="expimg"
                      style={{ backgroundImage: `url(${snoop})` }}
                    ></Col>
                    <Col md="7.5" data-aos="fade-left" className="expimg1">
                      <h2 className="Aboutme1">Snoop Technologies Pvt. Ltd.</h2>
                    </Col>
                  </Row>
                </Col>

                <Card
                  md="12"
                  sm="12"
                  style={{
                    height: 230,
                    padding: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                  }}
                >
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Col md="8" sm="12" className="textofdowncardsnoop">
                      <h3 className="textofdowncardsnoopinside">
                        {" "}
                        Junior Software Developer
                      </h3>
                    </Col>
                    <Col md="8" sm="12" className="textofdowncardsnoop">
                      <h6 className="textofdowncardsnoopinside">
                        <b>Domain:</b> Frontend Developer{" "}
                      </h6>
                    </Col>
                    <Col md="8" sm="12" className="textofdowncardsnoop">
                      <h6 className="textofdowncardsnoopinside">
                        <b>Description :</b>Solving real-time problems occuring
                        in production related to UI
                      </h6>
                    </Col>
                    <Col md="8" sm="12" className="textofdowncardsnoop">
                      <h6 className="textofdowncardsnoopinside">
                        <b>Technology:</b> React Native, React.js ,
                        JavaScript,html5,Css3{" "}
                      </h6>
                    </Col>
                    <Col md="8" sm="12" className="textofdowncardsnoop">
                      <h6 className="textofdowncardsnoopinside">
                        <b>Duration:</b> August 2019 - Present{" "}
                      </h6>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Col>
          </div>
        </Col>
      </Container> */}

      {/* <========= PROJECT start====================> */}

      {/* <Container
        fluid
        className="container6"
        id="container6"
        style={{ backgroundColor: "#361D2E" }}
      >
        <Col md="12">
          <div className="experiencetextheight">
            <h1 data-aos="fade-up-left" className="Aboutme">
              PROJECTS
            </h1>
          </div>
          <CardDeck data-aos="fade-up-left" data-aos="flip-up-right">
            <Col md="3">
              <Card className="cardproject">
                <AnimationWrapper className="projectcardhoverheight">
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    className="Projectcardimgheight"
                    src={logo1}
                    alt="Card image cap"
                  />
                </AnimationWrapper>
                <CardText>
                  <div>
                    <div className="textcolorbackground">
                      <AnimationWrapper className="hoverwidthcards">
                        <Button className="borderofbutttonremove">
                          {" "}
                          Project Details
                        </Button>{" "}
                      </AnimationWrapper>
                    </div>
                  
                    <div
                      className="mob-button"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 77,
                      }}
                    >
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8816722"
                          >
                            See Live
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=PyQ79mxrCq0&feature=youtu.be"
                          >
                            Source Code
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=PyQ79mxrCq0&feature=youtu.be"
                          >
                            Watch Video
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                    </div>
                  </div>
                </CardText>{" "}
              </Card>
            </Col>

            <Col md="3">
              <Card
                className="cardproject"
                style={{ backgroundColor: "#246A73" }}
              >
                <AnimationWrapper className="projectcardhoverheight">
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    className="Projectcardimgheight"
                    src={logo1}
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    alt="Card image cap"
                  />
                </AnimationWrapper>
                <CardText>
                  <div>
                    <div className="textcolorbackground">
                      <AnimationWrapper>
                        <Button className="borderofbutttonremove">
                          {" "}
                          Project Details
                        </Button>{" "}
                      </AnimationWrapper>{" "}
                    </div>
            
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 77,
                      }}
                    >
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            See Live
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            Source Code
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=N6rglB2ud_4&feature=youtu.be"
                          >
                            Watch Video
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>{" "}
                    </div>
                  </div>
                </CardText>{" "}
              </Card>
            </Col>
            <Col md="3" sm="4">
              <Card className="cardproject">
                <AnimationWrapper className="projectcardhoverheight">
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    className="Projectcardimgheight"
                    src={Gymlog}
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    alt="Card image cap"
                  />
                </AnimationWrapper>
                <CardText>
                  <div>
                    <div className="textcolorbackground">
                      <AnimationWrapper>
                        <Button className="borderofbutttonremove">
                          {" "}
                          Project Details
                        </Button>{" "}
                      </AnimationWrapper>{" "}
                    </div>
                
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 77,
                      }}
                    >
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            See Live
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            Source Code
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            Watch Video
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                    </div>
                  </div>
                </CardText>{" "}
              </Card>
            </Col>

            <Col md="3">
              <Card
                className="cardproject"
                style={{ backgroundColor: "#246A73" }}
              >
                <AnimationWrapper className="projectcardhoverheight">
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    className="Projectcardimgheight"
                    src={logo1}
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    alt="Card image cap"
                  />
                </AnimationWrapper>
                <CardText>
                  <div>
                    <div className="textcolorbackground">
                      <AnimationWrapper>
                        <Button className="borderofbutttonremove">
                          {" "}
                          Project Details
                        </Button>{" "}
                      </AnimationWrapper>{" "}
                    </div>
                
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 77,
                      }}
                    >
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            See Live
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            Source Code
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                      <AnimationWrapper>
                        <Button color="success">
                          <a
                            className="linkcolor mob-sizefont"
                            target="_blank"
                            href="https://apkpure.com/u/12647160/post/8817223"
                          >
                            Watch Video
                          </a>
                        </Button>{" "}
                      </AnimationWrapper>
                    </div>
                  </div>
                </CardText>{" "}
              </Card>
            </Col>
          </CardDeck>

          <div id="container7" className="Freesapceofconatiner7">
            <h1 className="Aboutme">Contact</h1>
          </div>

          <Col md="12" style={{ display: "flex", justifyContent: "center" }}>
            <Card
              className="mob-logo"
              style={{
                height: 110,
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
                  <SocialIcon url="http://twitter.com/jaketrent" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="http://facebook.com/rubin.shaikh1" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="https://github.com/Rubin78" />
                </AnimationWrapper>
              </div>
            </Card>
          </Col>
          <Col
            md="12"
            style={{
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "white" }}>© RUBIN SHAIKH 2020 </h4>.
          </Col>
        </Col>
      // </Container> */}


      
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
        <Carousel
          style={{
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={Modelling1} alt="First slide" />
            <Carousel.Caption>
              <div className="carouseltext">3D Modelling</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={three} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">3D Modelling</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={four} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Assembly</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={five} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Assembly Drawing </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={six} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">CAM</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={seven} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext">Part Drawing</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={nine} alt="Third slide" />

            <Carousel.Caption>
              <div className="carouseltext"> Sheet Metal</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Caritem">
            <img className="d-block w-50" src={ten} alt="Third slide" />

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
              <h1 data-aos="fade-up-left" className="Aboutme">
                EXPERIENCE
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div
              data-aos="fade-up-right"
              className="techicalskillimage"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: 180,
              }}
            >
              <img src={hcl}  style={{backgroundColor:blue}} />
            </div>
          </Col>
        </Row>
        <div
          style={{
            height: "70%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Row>
            <Col md="1"></Col>
            <Col md="5" style={{ padding: 20 }}>
              <div className="col-sm=10">
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

            <Col md="5" style={{ padding: 20 ,}}>
              {/* <Col sm="11" style={{ backgroundColor: "" }}> */}
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
            </Col>


            
            {/* </Col> */}
          </Row>
        </div>
      </div>
      <div
 <div id="container7" className="Freesapceofconatiner7">
            <h1 className="Aboutme">Contact</h1>
          </div>

          <Col md="12" style={{ display: "flex", justifyContent: "center" }}>
            <Card
              className="mob-logo"
              style={{
                height: 110,
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
                  <SocialIcon url="http://twitter.com/jaketrent" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="http://facebook.com/rubin.shaikh1" />
                </AnimationWrapper>
                <AnimationWrapper>
                  <SocialIcon url="https://github.com/Rubin78" />
                </AnimationWrapper>
              </div>
            </Card>
          </Col>
          <Col
            md="12"
            style={{
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "white" }}>© RUBIN SHAIKH 2020 </h4>.
          </Col>
        
<div>
      
    </div>
  );
}

export default Example;