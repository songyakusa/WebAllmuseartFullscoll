import React from "react";
import "./style.scss";
import "./crad.scss";

import { Link } from "react-scroll";
import "../../ranbow.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import "react-slideshow-image/dist/styles.css";

import { Animated } from "react-animated-css";

class index extends React.Component {
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.pageYOffset > 500) {
      this.setState({ nav: true });
    } else {
      this.setState({ nav: false });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <div className="backgroud-Gruid">
       
          <div className="font-Gruid">
            <h1>
              {t("Home&gruid.1")} <br /> {t("Home&gruid.101")}{" "}
            </h1>
            <h1>
              <b>. . .</b>
            </h1>
            <br />
            <p style={{ fontSize: "20px" }}>
              <b>"{t("Home&gruid.2")}"</b>
            </p>
            <br />
            <p>
              {" "}
              {t("Home&gruid.3")}
              <br />
              {t("Home&gruid.303")}
            </p>
            {/* <Container>
          <Animated
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true.nav}
          >
            <Link to="Exhibition" spy={true} smooth={true}>
              <div className="buttoncenter">
                <div className="button">
                  <span>{t("Home&gruid.13")}</span>
                </div>
              </div>
            </Link>
            <Link to="About" spy={true} smooth={true}>
              <div className="buttoncenter">
                <div className="button">
                  <span>{t("Home&gruid.14")}</span>
                </div>
              </div>
            </Link>
            <Link to="Contact" spy={true} smooth={true}>
              <div className="buttoncenter">
                <div className="button">
                  <span>{t("Home&gruid.15")}</span>
                </div>
              </div>
            </Link>
          </Animated>
        </Container>
  */}
   <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={this.state.nav}
        >
            <div className="container paddinggruid">
              <div className="row">
                <div className="col-12 col-lg-4 mobilmt">
                  <div className="person">
                    <div className="personimg">
                      <img src="Picture/Home/gruid1.jpg" alt />
                    </div>
                    <div className="persondetail"></div>
                    <div className="personcontact">
                      <Link to="Exhibition" spy={true} smooth={true}>
                        <p className="personCV">
                          <a href className="btn" src>
                            {t("Home&gruid.13")}
                          </a>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mobilmt">
                  <div className="person">
                    <div className="personimg">
                      <img src="Picture/Home/gruid2.jpg" alt />
                    </div>
                    <div className="persondetail"></div>
                    <div className="personcontact">
                      <Link to="About" spy={true} smooth={true}>
                        <p className="personCV">
                          <a href className="btn" src>
                            {t("Home&gruid.14")}
                          </a>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mobilmt">
                  <div className="person">
                    <div className="personimg">
                      <img src="Picture/Home/gruid3.jpg" alt />
                    </div>
                    <div className="persondetail"></div>
                    <div className="personcontact">
                      <Link to="Contact" spy={true} smooth={true}>
                        <p className="personCV">
                          <a href className="btn" src>
                            {t("Home&gruid.15")}
                          </a>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Animated>
          </div>            
      </div>
    );
  }
}
export default withTranslation()(index);
