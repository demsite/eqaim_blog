import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.handleNavbarCollapse = this.handleNavbarCollapse.bind(this);
  }

  // Update navbar component when user logs in, to display "Login" or "Logout"
  componentDidMount() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      this.setState((prevState) => {
        if (!prevState.isLoggedIn) {
          return { isLoggedIn: true };
        }
      });
    }
    if (sessionStorage.getItem("isLoggedIn") === "false") {
      this.setState((prevState) => {
        if (prevState.isLoggedIn) {
          return { isLoggedIn: false };
        }
      });
    }
  }

  // Collapse navabr after clicked on mobile screens
  handleNavbarCollapse() {
    document.querySelector("#navbarTogglerDemo01").classList.remove("show");
  }

  render() {
    return (
      <div className="eqaim_nav_wrapper">
        <nav>
          <div className="container nav-wrapper">
            <Link to="/" className="navbar-brand">
              Eqaim Blog
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/posts/new">
                  <span>Create Post </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="fixed-action-btn">
          <Link to="/posts/new">
            <button className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
