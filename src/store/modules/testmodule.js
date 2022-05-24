export const TestMod = {
  state: {
    ages: [],
  },
  reducers: {
    addAges(state, payload) {
      state.ages = payload;
      return { ...state };
    },
  },
  effects: (dispatch) => ({
    addUserAges(payload) {
      dispatch.TestMod.addAges(payload);
    },
  }),
};
