import { render, screen } from '@testing-library/react';
import { BrowserRouter } from'react-router-dom';
import App from '../App';

test('renders NavBar on every page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const songsNav = screen.getByRole("link", { name: /Songs/i });
  expect(songsNav).toBeInTheDocument();
  const booksNav = screen.getByRole("link", { name: /Books/i });
  expect(booksNav).toBeInTheDocument();
  const tvMoviesNav = screen.getByRole("link", { name: /TV & Movies/i });
  expect(tvMoviesNav).toBeInTheDocument();
});

test('renders h1 element on every page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByRole("heading", { name: /Koby's Current Favs/i });
  expect(linkElement).toBeInTheDocument();
})