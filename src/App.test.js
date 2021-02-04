import { render } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  const app = render(<App />);

  expect(app).toMatchSnapshot();
});
