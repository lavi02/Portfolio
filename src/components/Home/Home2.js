import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaBlog } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love programming and I value adapting to change based on new skills and experiences. 🤷‍♂️
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Python, Typescript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Backend Technologies and Data Science </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cyber Security.
                </b> 
              </i>
              <br />
              <br />
              I was in CTF Team named <b className="purple">Team RGBSec</b> and I have also done some projects related to{" "}
              <i>
                <b className="purple">
                  Web Cyber Security and Reverse Engineering.
                </b>
              </i>
              <br />
              <br />
              and I like to learn about new technologies, what problems are they solving and How can I use them to build better and scalable products.
              I often try ToyProject  and I am currently working on a project related to{" "}
              <i>
                <b className="purple">
                  POS system for Better Client Management.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Rust</b> and
              <i>
                <b className="purple">
                  {" "}
                  Game Development and Programming
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Unity3D.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="purple">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lavi02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hoil-jeong-7b3b33276/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://velog.io/@lavi02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaBlog />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
