import { render } from '@testing-library/react';
import { MovieDetail } from '../../components';
import { MovieType } from 'interfaces/movie';

const data: MovieType = {
  "title": "Kung Fu Panda",
  "year": "2008",
  "id": "tt0441773",
  "poster": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  "director": "Mark Osborne",
  "casts": "Jack Black, Jackie Chen",
  "genre": "Action, Comedy"
};

describe('component test', () => {
  test('should render movie detail', () => {
    const { container } = render(<MovieDetail {...data} />);
    expect(container.getElementsByClassName('movie-detail'));
  });
});
