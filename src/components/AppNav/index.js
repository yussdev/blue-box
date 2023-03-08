import React from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { List, PersonCircle } from "react-bootstrap-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../contants";
import { authApi } from "../../services";

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <div
    className="ms-5"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <PersonCircle className="d-none d-md-inline" size={40} href="" />
    <List
      className="d-inline d-md-none"
      size={40}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  </div>
));

export default function AppNav() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Nav variant="pills">
      <Nav.Item className="d-md-block d-none">
        <Nav.Link as={Link} to="/" active={location.pathname === routes.Home}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="d-md-block d-none">
        <Nav.Link
          as={Link}
          to="/report"
          active={location.pathname === routes.Report}
        >
          Report
        </Nav.Link>
      </Nav.Item>
      <Dropdown id="nav-dropdown">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Custom toggle
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            className="d-block d-md-none"
            as={Link}
            to={routes.Home}
          >
            Home
          </Dropdown.Item>
          <Dropdown.Item
            className="d-block d-md-none"
            as={Link}
            to={routes.Report}
          >
            Report
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              authApi.logout().then(() => {
                navigate(routes.SignIn);
              })
            }
          >
            Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}
