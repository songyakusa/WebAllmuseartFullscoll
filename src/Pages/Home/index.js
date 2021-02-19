import "./sad.scss";
import { Container, Row, Col } from "react-bootstrap";
import "../ranbow.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import Gruid from "./gruid/index.js";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div id="Home">
      <div className="img-cotainer">
        <div className="video-cotainer">
          <video autoPlay muted loop>
            <source src="Picture/Home/video.mp4" type="video/mp4" />
          </video>
          <div className="welcome">
            <h1>
              WELCOME
              <br />
              <h2>ALLMUSEART</h2>
            </h1>
          </div>
        </div>
      </div>

      <div className="front ">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>{t("Home.1")}</h1>
            </Col>
            <Col lg={6}>
              <p className="padding ">
                {t("Home.2")}
                <br />
                {t("Home.3")}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr class="rainbow"></hr>
      <Gruid/>
      
     <hr class="rainbow"></hr>
    </div>
  );
}
