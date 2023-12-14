import { render } from '@testing-library/react';
import { MovieHeader } from '../../components';

describe('component test', () => {
  test('should render movie header', () => {
    const { container } = render(<MovieHeader title='🎥 Movie Catalogue' />);
    expect(container.getElementsByClassName('header'));
  });
});
