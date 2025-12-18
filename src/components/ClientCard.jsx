import React from "react";
import { Link } from "react-router-dom";

const ClientCard = ({ appointment }) => {
  return (
    <Link
      to={`/appointments/${appointment.id}`}
      data-testid="client-card"
      className="block bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition p-4"
    >
      <h2 className="text-lg font-bold">
        {appointment.petName}
      </h2>

      <p className="text-sm text-gray-300">
        Dueño: {appointment.ownerName}
      </p>

      <p className="text-sm text-gray-300">
        Veterinario: {appointment.vet}
      </p>
    </Link>
  );
};

export default ClientCard;
