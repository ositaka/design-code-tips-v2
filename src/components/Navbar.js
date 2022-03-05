import React from "react";
import { Link } from "gatsby";
import github from "../media/github-icon.svg";
import logo from "../media/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };

  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <nav
        id="header"
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/design" activeClassName="active" partiallyActive={true}>
                Design
              </Link>
              <Link className="navbar-item" to="/code" activeClassName="active" partiallyActive={true}>
                Code
              </Link>
              <Link className="navbar-item" to="/inspiration" activeClassName="active" partiallyActive={true}>
                Inspiration
              </Link>
              <Link className="navbar-item" to="/tools" activeClassName="active" partiallyActive={true}>
                Tools
              </Link>
              <Link className="navbar-item" to="/podcasts" activeClassName="active" partiallyActive={true}>
                Podcasts
              </Link>
              <Link className="navbar-item" to="/about" activeClassName="active">
                About
              </Link>
              <Link className="navbar-item" to="/subscribe" activeClassName="active">
                Subscribe
              </Link>
              <Link className="navbar-item" to="/disclaimer" activeClassName="active">
                Disclaimer
              </Link>
              ---
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
