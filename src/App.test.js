// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiSphere title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiSphere/i);
    expect(titleElement).toBeInTheDocument();
});
