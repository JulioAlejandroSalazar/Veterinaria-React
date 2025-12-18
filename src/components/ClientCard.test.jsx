import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, expect } from "vitest";
import ClientCard from "./ClientCard";

const appointment = {
  id: 1,
  petName: "Firulais",
  ownerName: "Juan Pérez",
  vet: "Dra. Ana"
};

test("renderiza ClientCard con la información correcta", () => {
  render(
    <BrowserRouter>
      <ClientCard appointment={appointment} />
    </BrowserRouter>
  );

  const card = screen.getByTestId("client-card");
  expect(card).toBeInTheDocument();
  expect(screen.getByText(/Firulais/)).toBeInTheDocument();
  expect(screen.getByText(/Dueño: Juan Pérez/)).toBeInTheDocument();
  expect(screen.getByText(/Veterinario: Dra. Ana/)).toBeInTheDocument();
});

test("ClientCard tiene enlace correcto", () => {
  render(
    <BrowserRouter>
      <ClientCard appointment={appointment} />
    </BrowserRouter>
  );

  const card = screen.getByTestId("client-card");
  expect(card).toHaveAttribute("href", "/appointments/1");
});
