import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/appointments")
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar citas");
        return res.json();
      })
      .then(data => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900">
      <div className="max-w-5xl mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold text-center text-white mb-2">Citas agendadas</h1>
        <p className="text-center mb-6 text-gray-300">Total de citas: {appointments.length}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAppointments.map(a => (
            <Link key={a.id} to={`/appointment/${a.id}`}>
              <div
                data-testid="appointment-card"
                className="bg-gray-800 text-white border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
                title={a.medicalHistory}
              >
                <p><strong>Mascota:</strong> {a.pet}</p>
                <p><strong>Propietario:</strong> {a.owner}</p>
                <p><strong>Fecha:</strong> {a.date}</p>
                <p>
                  <strong>Tipo:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      a.type === "Consulta"
                        ? "bg-blue-500"
                        : a.type === "Vacuna"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {a.type}
                  </span>
                </p>
                <p><strong>Veterinario:</strong> {a.veterinarian}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-400 text-center p-4 mt-8">
        © 2025 Veterinaria Cuidado Animal. Todos los derechos reservados.
      </footer>
    </div>
  );
}
