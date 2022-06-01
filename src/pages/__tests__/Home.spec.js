import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';

describe('Home Page Unit Tests', () => {
    const exec = () => {
        return render(<BrowserRouter><Home/></BrowserRouter>);
    }
    it('renders to screen', async () => {
        expect(await exec()).toBeDefined();
    });
    it('renders the Side Navigation', async () => {
        const nav = await exec().getByTestId('Side Navigation Menu');
        expect(nav).toBeDefined();
    });
});