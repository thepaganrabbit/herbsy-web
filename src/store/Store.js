import { init } from '@rematch/core';
import { TestMod } from './modules/testmodule';

const Store = init({
  models: {
    TestMod,
  },
});

export default Store;
