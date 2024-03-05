import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders a welcome message', () => {
    render(<Home />);
    const linkElement = screen.getByRole("heading", { name: /welcome to my favorites!/i });
    expect(linkElement).toBeInTheDocument();
})