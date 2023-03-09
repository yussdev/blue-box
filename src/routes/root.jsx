import React from "react";
import {  Outlet, useLoaderData, useLocation } from "react-router-dom";
import {  Container } from "react-bootstrap";
import { appApi } from "../services";
import { routes } from "../contants";
import AppHeader from "../components/Header";

export async function loader() {
  const settings = await appApi.getSettings();
  return { settings};
}



export default function Root() {
  const location = useLocation();
  const { settings } = useLoaderData();

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppHeader logo={settings.logo} />
      <Container className="d-flex flex-column flex-grow-1">
        <h3 className="d-none d-md-inline-block mb-3">
          {routes[location.pathname]}
        </h3>
        <Outlet />
      </Container>
    </div>
  );
}
