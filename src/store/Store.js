import { init } from '@rematch/core';

import { TestMod } from './modules/testmodule';
import { userMod } from './modules/usermodule';

const Store = init({
  models: {
    TestMod,
    userMod
  },
});

export default Store;
