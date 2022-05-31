import { fireEvent, render } from '@testing-library/react';
import SideNav from '../SideMenu/SideMenu';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));
describe('Sidenav Tests', () => {
  const exec = () => {
    return render(<BrowserRouter><SideNav /></BrowserRouter>);
  };
  beforeEach(() => {
    console.error = jest.fn()
    jest.clearAllMocks();
  })
  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('should render more than one button', async () => {
    const button = await exec().container.querySelectorAll('button');
    expect(button.length).toBeGreaterThan(2);
  });
  // route tests
  it('should call home "/"', async () => {
    const button = await exec().findByTestId('Home button');
    expect(button).toBeDefined();
    await fireEvent.click(button);
    expect(mockedNavigator).toHaveBeenCalled()
    expect(mockedNavigator).toHaveBeenCalledWith('/')
  });
  it('should call /cabinet', async () => {
    const button = await exec().findByTestId('Cabinet button');
    expect(button).toBeDefined();
    await fireEvent.click(button);
    expect(mockedNavigator).toHaveBeenCalled()
    expect(mockedNavigator).toHaveBeenCalledWith('/cabinet')
  });
  it('should call /cabinet', async () => {
    const button = await exec().findByTestId('Settings button');
    expect(button).toBeDefined();
    await fireEvent.click(button);
    expect(mockedNavigator).toHaveBeenCalled()
    expect(mockedNavigator).toHaveBeenCalledWith('/settings')
  });
});
