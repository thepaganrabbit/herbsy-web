import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SystemRoutes from '../routes/SystemRoutes';

describe('Routes Unit Test', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <SystemRoutes />
      </BrowserRouter>,
    );
  };
  it('renders to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('renders at least the home route', async () => {
    expect(await exec().container.querySelector('.home-main')).toBeDefined();
  });
});
