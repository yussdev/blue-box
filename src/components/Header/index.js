import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { routes } from "../../contants";
import AppNav from "../AppNav";

export default function AppHeader({ logo }) {
  const location = useLocation();
  return (
    <header className="app-header d-flex flex-wrap align-items-center justify-content-center py-1 px-3 mb-2 border-bottom bg-white">
      <Col md="3" xs="12" className="d-flex me-sm-auto justify-content-center">
        <img src={logo} alt="App Logo" width={192} height={50}></img>
      </Col>
      <h3 className="d-inline d-md-none mb-0 me-auto">
        {routes[location.pathname]}
      </h3>
      <AppNav />
    </header>
  );
}
