import React from "react";
import "./style.scss";
import "../ranbow.scss";
import { Container, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";


export default function Technology() {
  
    const { t } = useTranslation();
    return (
      <div>
        <div id="Technology" className="backgroud ">
          <div className="technic-text">
            <h1>{t("Technology.1")}</h1>
            <p>
              {t("Technology.2")}
              <br />
              {t("Technology.3")}
            </p>
          </div>

          <div className="box1">
            <Container>
              <Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/VR.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Virtual reality (VR)</h2>
                    </div>
                    <div className="back">
                      <h2 className="cardh2">Virtual reality or VR</h2>
                      <p>
                      {t("Technology.4")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} >
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/AR.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Augmented reality (AR)</h2>
                    </div>
                    <div className="back">
                      <h2>Augmented reality or AR</h2>
                      <p>
                      {t("Technology.5")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/projector.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">
                        Projection technology
                      </h2>
                    </div>
                    <div className="back">
                      <h2>Projector360</h2>
                      <p>
                      {t("Technology.6")}
                      </p>
                    </div>
                  </div>
                </Col>
                {/* vertical */}
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/Composition.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Composition sounds light and colour</h2>
                    </div>
                    <div className="back">
                      <h2>Composition have sounds , light, colour</h2>
                      <p>
                      {t("Technology.7")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/Hologram.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Technology Hologram</h2>
                    </div>
                    <div className="back">
                      <h2>Technology Hologram</h2>
                      <p>
                      {t("Technology.8")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/modelmapping.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Projection Mapping </h2>
                    </div>
                    <div className="back">
                      <h2>Technology 3D Mapping</h2>
                      <p>
                      {t("Technology.9")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className="More" >
            <Link to="/More">
            {t("More.1")}
            </Link>
          </div> */}
        </div>

        <hr class="rainbow"></hr>
      </div>
    );
  }

