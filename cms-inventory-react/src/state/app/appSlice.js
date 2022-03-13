import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUser: (state, { payload }) => {
      state.user = payload
    }
  }
});

export const { setLoading, setUser } = appSlice.actions;

export default appSlice.reducer;