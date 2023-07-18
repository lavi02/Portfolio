import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hw from "../../Assets/Projects/hw.png";
import tms from "../../Assets/Projects/tms.png";
import dshs from "../../Assets/Projects/dshs.png";
import q from "../../Assets/Projects/q.png";
import scento from "../../Assets/Projects/scento.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hw}
              isBlog={false}
              title="HealthWatch"
              description="Over the past six years, performance has continued at an annual average of about 39% in various indicators such as sales, manpower, employment, investment, and export income. It is expected to continue to grow high in the future, which is a view of the healthcare sector
              This means that the demand for heart and soul is increasing. The idea is
              to develop a digital healthcare application based on artificial intelligence. The main purpose of this project is to
              It is to provide services that improve the health of people."
              ghLink="https://github.com/ACT-HealthWatch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tms}
              isBlog={false}
              title="TooMuchSpeaker"
              description="It is a customized schedule management and study helper service for students based on artificial intelligence and NUGU platform. It was developed using Python Flask, Native html5/CSS3, and jquery, and developed as an app using Android studio."
              ghLink="https://github.com/lavi02/TMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dshs}
              isBlog={false}
              title="Cafeteria Management System"
              description="It is a solution for checking the number of people in School Restaurant based on facial recognition using RaspberriPi and artificial intelligence. It was developed using Rust Rocket, React.js, and Tensorflow.js, and was developed in real time using Python Tensorflow in RaspberryPi."
              ghLink="https://github.com/lavi02/OryangBot-Cafeteria-Checker"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={q}
              isBlog={false}
              title="Quantum NVGate Algorithm"
              description="A structure of trandional SWAP Gate is made by Qubit 13C in the NV-center quantum computer cannot be controlled directly, so we have to indirectly reset it using NV electron. we're going to think about the idea from karnaugh map and make a circuit that can be controlled by NV electron and create gate using a microwave pulse. The code is written for change the state of nuclear qubit, substituting Rz Gates and Rx Gates to arbitrary gate and apply random microwave to check whether it can replace between Rz Gates and Rx Gates."
              ghLink="https://github.com/zorocrit/qhackathon-2023"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scento}
              isBlog={false}
              title="Freelance Works"
              description="Until now, I have been doing various freelance work, including developing corporate backend, and recently, I am studying frontend and trying to make freelance work possible with full stack development. I am currently studying Rust and working as a backend developer for a software development company."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
