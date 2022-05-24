import { init } from '@rematch/core';
import { TestMod } from '../modules/testmodule';

describe('Rematch Store tests', () => {
    const store = init({
        models: {TestMod},
      });
  it('should render an empty list for ages', () => {
    const state = store.getState().TestMod;
    expect(state.ages.length).toBe(0);
  });

  it('should add a list of numbers to ages', () => {
    const state = store.getState().TestMod;
    expect(state.ages.length).toBe(0);
    store.dispatch({type: 'TestMod/addUserAges', payload: [12,23,43]});
    expect(state.ages.length).toBe(3)
  });
});
