import { render } from '@testing-library/react';
import { MovieList } from '../../components';
import { Provider } from 'react-redux';
import store from 'redux/store';

describe('component test', () => {
  test('should render movie list', () => {
    const { container } = render(<Provider store={store}><MovieList /></Provider>);
    expect(container.getElementsByClassName('movie-list'));
  });
});
