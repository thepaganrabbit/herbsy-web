import {render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Unit Test', () => { 
    it('renders to screen', () => {
        expect(render(<BrowserRouter><App /></BrowserRouter>)).toBeDefined();
    });

 })