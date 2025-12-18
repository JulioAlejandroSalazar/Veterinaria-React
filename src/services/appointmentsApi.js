export const mockAppointments = [
    {
      id: 1,
      pet: "Firulais",
      owner: "Juan Pérez",
      phone: "123456789",
      address: "Calle Falsa 123",
      species: "Perro",
      breed: "Labrador",
      age: 5,
      medicalHistory: "Vacunas al día, sin alergias",
      date: "2025-12-18",
      type: "Consulta",
      veterinarian: "Dra. Ana"
    },
    {
      id: 2,
      pet: "Michi",
      owner: "María López",
      phone: "987654321",
      address: "Avenida Siempre Viva 742",
      species: "Gato",
      breed: "Siames",
      age: 3,
      medicalHistory: "Alergia a pescados",
      date: "2025-12-20",
      type: "Vacuna",
      veterinarian: "Dr. Carlos"
    },
  ];
  
  export const fetchAppointments = async (day) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (day) {
          resolve(mockAppointments.filter(a => a.date === day).slice(0, 8))
        } else {
          resolve(mockAppointments)
        }
      }, 400);
    });
  };
  