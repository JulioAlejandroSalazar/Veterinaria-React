import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, beforeEach, vi, expect } from "vitest";
import Home from "./Home";

const mockAppointments = [
  {
    id: 1,
    pet: "Firulais",
    owner: "Juan Pérez",
    date: "2025-12-18",
    type: "Consulta",
    veterinarian: "Dra. Ana",
    medicalHistory: "Vacunado",
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockAppointments),
    })
  );
});

test("Home muestra las citas", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Citas agendadas/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("appointment-card").length).toBeGreaterThan(0);
  });
});
