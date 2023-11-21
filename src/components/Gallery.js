import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/potrait/IMG_3181.JPG";
import projImg2 from "../assets/img/potrait/IMG_3245.JPG";
import projImg3 from "../assets/img/potrait/IMG_3143.JPG";
import projImg4 from "../assets/img/potrait/IMG_2445.JPG";
import projImg5 from "../assets/img/potrait/IMG_2503.JPG";
import projImg6 from "../assets/img/potrait/IMG_2542.JPG";
import projImg7 from "../assets/img/potrait/1.JPG";
import projImg8 from "../assets/img/potrait/2.JPG";
import projImg9 from "../assets/img/potrait/3.JPG";

import projImg10 from "../assets/img/design/Desain_0.jpg";
import projImg11 from "../assets/img/design/Desain_1.png";
import projImg12 from "../assets/img/design/Desain_3.jpg";
import projImg13 from "../assets/img/design/Desain_4.jpg";
import projImg14 from "../assets/img/design/Desain_5.jpg";
import projImg15 from "../assets/img/design/Desain_6.jpg";

import projImg16 from "../assets/img/landscape/Landscape (1).JPG";
import projImg17 from "../assets/img/landscape/Landscape (2).JPG";
import projImg18 from "../assets/img/landscape/Landscape (3).jpg";
import projImg19 from "../assets/img/landscape/Landscape (4).JPG";
import projImg20 from "../assets/img/landscape/Landscape (5).JPG";
import projImg21 from "../assets/img/landscape/Landscape (6).JPG";
import projImg22 from "../assets/img/landscape/Landscape (7).JPG";
import projImg23 from "../assets/img/landscape/Landscape (8).JPG";
import projImg24 from "../assets/img/landscape/Landscape (9).JPG";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Gallery = () => {

  const projects = [
    {
      title: "Head of KEMAKOM COMMINFO",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Staff of KEMAKOM COMMINFO",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Staff of KEMAKOM Educational and Training Division",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Ready to Begin",
      description: "KEMAKOM Community Service 2023",
      imgUrl: projImg4,
    },
    {
      title: "Happiness on Community Service",
      description: "KEMAKOM Community Service 2023",
      imgUrl: projImg5,
    },
    {
      title: "What Next?",
      description: "KEMAKOM Community Service 2023",
      imgUrl: projImg6,
    },
    {
      title: "Give me The Challenge",
      description: "Bandung Great Forest Park",
      imgUrl: projImg7,
    },
    {
      title: "Really?",
      description: "Bandung Great Forest Park",
      imgUrl: projImg8,
    },
    {
      title: "Future Ahead",
      description: "Bandung Great Forest Park",
      imgUrl: projImg9,
    }
  ];

  const projects2 = [
    {
      title: "RUN As ONE",
      description: "Creative Poster Design",
      imgUrl: projImg10,
    },
    {
      title: "Kemakom Graduation Poster",
      description: "Creative Poster Design",
      imgUrl: projImg11,
    },
    {
      title: "LIVE LOVE LAUGH",
      description: "Creative Poster Design",
      imgUrl: projImg12,
    },
    {
      title: "|HALO|",
      description: "Creative Poster Design",
      imgUrl: projImg13,
    },
    {
      title: "---",
      description: "Creative Poster Design",
      imgUrl: projImg14,
    },
    {
      title: "Behind Your Smile",
      description: "Creative Poster Design",
      imgUrl: projImg15,
    }
  ];

  const projects3 = [
    {
      title: "Deer",
      description: "Wildlife Photography",
      imgUrl: projImg16,
    },
    {
      title: "Rooftop",
      description: "Architecture Photography",
      imgUrl: projImg17,
    },
    {
      title: "Merdeka Street",
      description: "Architecture Photography",
      imgUrl: projImg18,
    },
    {
      title: "White Laser",
      description: "Long Exposure Photography",
      imgUrl: projImg19,
    },
    {
      title: "Thunder Skill",
      description: "Long Exposure Photography",
      imgUrl: projImg20,
    },
    {
      title: "Happy Face",
      description: "Close Up Photography",
      imgUrl: projImg21,
    },
    {
      title: "Teaching",
      description: "Close Up Photography",
      imgUrl: projImg22,
    },
    {
      title: "Ready to Play",
      description: "Sports Photography",
      imgUrl: projImg23,
    },
    {
      title: "Wildlife",
      description: "Close Up Photography",
      imgUrl: projImg24,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Gallery</h2>
                <p>I am delighted to share the results of my photography and graphic design endeavors. Through the lens of my camera and graphic design skills, I strive to capture the beauty and creativity inherent in every moment.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Potrait's</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design's</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Landscape's</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p> My photography seeks to celebrate the uniqueness of each subject, while my graphic design work focuses on conveying powerful messages through visual elements. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p> I hope that through these creations, I can share my experiences and perspectives, inspiring others to see the world through a more creative lens. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>May these photographs and designs touch hearts and spark positive discussions</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}