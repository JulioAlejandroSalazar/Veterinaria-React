import { http, HttpResponse, graphql } from 'msw';
import clients from './clients.json';

export const handlers = [
  http.get("/api/appointments", () => {
    return HttpResponse.json(clients);
  }),

  http.get("/api/appointments/:id", ({ params }) => {
    const appointment = clients.find(a => a.id == params.id);
    if (!appointment) return HttpResponse.status(404);
    return HttpResponse.json(appointment);
  }),

  graphql.query("GetAppointmentDetail", ({ variables }) => {
    const { id } = variables;
    const appointment = clients.find(a => a.id == id) ?? {};
    return HttpResponse.json({
      data: {
        appointment: {
          id,
          pet: appointment.pet ?? "Desconocido",
          owner: appointment.owner ?? "Desconocido",
          phone: appointment.phone ?? "",
          address: appointment.address ?? "",
          species: appointment.species ?? "",
          breed: appointment.breed ?? "",
          age: appointment.age ?? null,
          medicalHistory: appointment.medicalHistory ?? "",
          date: appointment.date ?? "",
          type: appointment.type ?? "N/A",
          veterinarian: appointment.veterinarian ?? "N/A",
        },
      },
    });
  }),
];
