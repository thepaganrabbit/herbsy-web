import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cabinet from '../Cabinet/Cabinet';
jest.mock('../../hooks/useUsers', () => () => ({
    isLoggedIn: true
}))
describe('Cabinet Page Unit Tests', () => {
    const exec = () => {
        return render(<BrowserRouter><Cabinet/></BrowserRouter>);
    }
    it('renders to screen', async () => {
        expect(await exec()).toBeDefined();
    });
    it('renders the Side Navigation', async () => {
        const nav = await exec().getByTestId('Side Navigation Menu');
        expect(nav).toBeDefined();
    });
});