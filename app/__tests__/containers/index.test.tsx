import { Provider } from 'react-redux';
import { UserProvider } from '../../providers/userContext';
import { render } from '@testing-library/react';
import HomeContainer from '../../containers';
import store from '../../redux/store';

describe('container test', () => {
  test('should render home container', () => {
    const { container } = render(
      <Provider store={store}>
        <UserProvider>
          <HomeContainer />
        </UserProvider>
      </Provider>
    );
    expect(container.getElementsByClassName('home-container'));
  });
});
