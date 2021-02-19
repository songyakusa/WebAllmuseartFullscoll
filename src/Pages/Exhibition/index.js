import React, { useState } from "react";
import "./style.scss";
import "./Tap.scss";
import "./popupimg.scss";
import { Container, Row, Col } from "react-bootstrap";
import "../ranbow.scss";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

export default function Exhibition() {
  const { t } = useTranslation();

  // const [hidden, setHidden] = useState(false);
  return (
    <div>
      <div id="Exhibition" className="backgroud">
        <div className="Exhibition-text">
          <h1>{t("Exhibition.1")}</h1>
          <p>
            {t("Exhibition.2")}
            <br />
            {t("Exhibition.3")}
          </p>
        </div>

        {/* Munu */}
        <Container>
          <div className="tabset bodyTap">
            {/* Tab 1 */}
            <input
              type="radio"
              name="tabset"
              id="tab1"
              aria-controls="Exhibition"
              defaultChecked
            />
            <label htmlFor="tab1">
              <h1>Exhibition</h1>
            </label>
            {/* Tab 2 */}
            <input type="radio" name="tabset" id="tab2" aria-controls="Event" />
            <label htmlFor="tab2">
              <h1>Event</h1>
            </label>
            {/* Tab 3 */}
            <input
              type="radio"
              name="tabset"
              id="tab3"
              aria-controls="Interrior"
            />
            <label htmlFor="tab3">
              <h1>Interrior</h1>
            </label>
            {/* Tab 4 */}
            <input
              type="radio"
              name="tabset"
              id="tab4"
              aria-controls="Solution"
            />
            <label htmlFor="tab4">
              <h1>Solution</h1>
            </label>
            {/* Tab 5 */}
            <input type="radio" name="tabset" id="tab5" aria-controls="All" />
            <label htmlFor="tab5">
              <h1>All</h1>
            </label>

            {/* Data */}
            <div className="tab-panels">
              {/* DataTap1 */}
              <section id="Exhibition" className="tab-panel">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                  </Row>
                </Container>
                {/* {hidden ? (
                  <div
                    className="card-onclick"
                    onClick={() => setHidden(false)}
                  >
                    <img
                      src="Picture/Exhibition/col1t1.jpg"
                      alt="col1t1"
                      className="img-1"
                    />
             
                  </div>
                ) : null} */}
              </section>
              {/* DataTap2 */}
              <section id="Event" className="tab-panel">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event2.jpg"
                          alt="col1t2"
                          className="imgpadding"
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event3.jpg"
                          alt="col2t1"
                          className="imgpadding"
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event4.jpg"
                          alt="col2t2"
                          className="imgpadding"
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event5.jpg"
                          alt="col3t1"
                          className="imgpadding"
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event6.jpg"
                          alt="col4t1"
                          className="imgpadding"
                        />
                      </Animated>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* DataTap3 */}
              <section id="Interrior" className="tab-panel">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* DataTap4 */}
              <section id="Solution" className="tab-panel">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution8.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution6.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution7.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution5.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution14.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution11.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution12.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution15.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution16.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution17.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* DataTap5 */}
              <section id="All" className="tab-panel">
                {/* Photo Grid */}
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      {/* col1Exhibition */}
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      {/* col1event */}
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event2.jpg"
                          alt="col1t2"
                          className="imgpadding"
                        />
                      </Animated>
                      {/* col1interrior */}
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      {/* col1solution */}
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      {/* col2Exhibition */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col2event */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event3.jpg"
                          alt="col2t1"
                          className="imgpadding"
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event4.jpg"
                          alt="col2t2"
                          className="imgpadding"
                        />
                      </Animated>

                      {/* col2interrior */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col2solution */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution8.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution6.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution7.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution5.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      {/* col3Exhibition */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col3event */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event5.jpg"
                          alt="col3t1"
                          className="imgpadding"
                        />
                      </Animated>

                      {/* col3interrior */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t3.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t2.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col3solution */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution14.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution11.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution12.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      {/* col4Exhibition */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col1t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col2t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Exhibition/col3t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col4event */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Event/event6.jpg"
                          alt="col4t1"
                          className="imgpadding"
                        />
                      </Animated>

                      {/* col4interrior */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col3t4.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Interrior/col4t1.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>

                      {/* col4solution */}

                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution15.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution16.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                      <Animated
                        animationIn="zoomIn"
                        animationOut="zoomOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true.nav}
                      >
                        <img
                          src="Picture/Exhibition/Solution/solution17.jpg"
                          alt="col1t1"
                          className="imgpadding"
                          // onClick={() => setHidden(true)}
                        />
                      </Animated>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        </Container>
      </div>

      <hr class="rainbow"></hr>
    </div>
  );
}
