import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import "./sty.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { navExpanded: false };
  }

  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  handleToggle() {
    this.setState({
      navExpanded: !this.state.navExpanded,
    });
  }

  render() {
    const { t, location } = this.props;

    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar"
          fixed="top"
          id="navbar"
          expanded={this.state.navExpanded}
        >
          <Link to="Home"  spy={true} smooth={true}>
            <Navbar.Brand>
              <div className="logo">
                <img
                  alt="Logo"
                  src="Picture/logo/allmuseart.png"
                  alt="allmuseart"
                />{" "}
              </div>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle onClick={() => this.handleToggle()} />
          <Navbar.Collapse>
            <Nav className="ml-auto manu-padding">
              <Nav.Link>
                <Link to="Home"  spy={true} smooth={true} onClick={() => this.handleToggle()}>
                  <p className="effect-underline">{t("Naverbar.1")}</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Exhibition"   spy={true} smooth={true} onClick={() => this.handleToggle()}>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.2")}</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Technology"  spy={true} smooth={true} onClick={() => this.handleToggle()}>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.3")}</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="About"  spy={true} smooth={true} onClick={() => this.handleToggle()}>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.4")}</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Contact" spy={true} smooth={true}  onClick={() => this.handleToggle()}>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.5")}</p>
                </Link>
              </Nav.Link>
              {/* button */}
              <Nav.Link className="centerbuttom">
                <img
                  onClick={() => this.handleClick("th")}
                  style={{
                    height: "5vh",
                    paddingBottom: "0.7vw",
                    paddingRight: "0.5vw",
                  }}
                  alt="TH"
                  src="Picture/logo/th.png"
                />
                |
                <img
                  onClick={() => this.handleClick("en")}
                  style={{
                    height: "5vh",
                    paddingBottom: "0.7vw",
                    paddingLeft: "0.5vw",
                  }}
                  alt="EN"
                  src="Picture/logo/us.png"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withTranslation()(Header);
