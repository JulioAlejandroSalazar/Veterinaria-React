import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AppointmentDetail() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/appointments/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Cita no encontrada");
        return res.json();
      })
      .then(data => {
        setAppointment(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900">
      <div className="max-w-xl mx-auto p-6 flex-grow">
        <div className="bg-gray-800 text-white border border-gray-700 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Cita de {appointment.pet}</h2>

          <div className="mb-2"><strong>Propietario:</strong> {appointment.owner}</div>
          <div className="mb-2"><strong>Teléfono:</strong> {appointment.phone}</div>
          <div className="mb-2"><strong>Dirección:</strong> {appointment.address}</div>
          <div className="mb-2"><strong>Especie:</strong> {appointment.species}</div>
          <div className="mb-2"><strong>Raza:</strong> {appointment.breed}</div>
          <div className="mb-2"><strong>Edad:</strong> {appointment.age}</div>
          <div className="mb-2"><strong>Historial médico:</strong> {appointment.medicalHistory}</div>
          <div className="mb-2"><strong>Veterinario:</strong> {appointment.veterinarian}</div>
          <div className="mb-2"><strong>Fecha:</strong> {appointment.date}</div>
          <div className="mb-2"><strong>Tipo de atención:</strong> {appointment.type}</div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-400 text-center p-4 mt-8">
        © 2025 Veterinaria Cuidado Animal. Todos los derechos reservados.
      </footer>
    </div>
  );
}
