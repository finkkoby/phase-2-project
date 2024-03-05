import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders h1 element on every page', () => {
    render(<Header />);
    const linkElement = screen.getByRole("heading", { name: /Koby's Current Favs/i });
    expect(linkElement).toBeInTheDocument();
})