import React from 'react';
import { render, screen } from '@testing-library/react';
import AppointmentDetail from './AppointmentDetail';

describe('AppointmentDetail básica', () => {
  test('muestra loading al inicio', () => {
    render(<AppointmentDetail />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
