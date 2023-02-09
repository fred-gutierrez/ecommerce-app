import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <Nav className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              Home
            </NavLink>
            <NavLink to="/store" className="nav-link px-2 text-muted">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link px-2 text-muted">
              About
            </NavLink>
          </Nav>
        </ul>
        <p className="text-center text-muted">
          {" "}
          2023,{" "}
          <a
            href="https://freddavidsolisgutierrez.netlify.app/"
            target={"_blank"}
            className="link-secondary"
          >
            Fred David Solis Gutierrez
          </a>
        </p>
      </footer>
    </div>
  );
}
