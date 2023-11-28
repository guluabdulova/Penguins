import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Team from "./Team";
import Home from "./Home";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Penguins
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="team">
                    Our team
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" element={<Home />}>
            {" "}
            <Home />{" "}
          </Route>
          <Route path="/about" element={<AboutPage />}>
            {" "}
            <AboutPage />{" "}
          </Route>
          <Route path="/contacts" element={<ContactsPage />}>
            {" "}
            <ContactsPage />{" "}
          </Route>
          <Route path="/team" element={<Team />}>
            <Team />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
