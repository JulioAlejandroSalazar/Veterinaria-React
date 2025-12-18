import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, expect } from "vitest";
import Layout from "./Layout";

test("Layout renderiza header y children", () => {
  render(
    <BrowserRouter>
      <Layout>
        <div>Contenido de prueba</div>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getByText("Veterinaria Cuidado Animal")).toBeInTheDocument();
  expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
});
