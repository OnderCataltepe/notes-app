import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface themeState {
  dark: boolean;
}

const initialState: themeState = {
  dark: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || '') : false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeToggle: (state) => {
      state.dark = !state.dark;
    }
  }
});

export const { themeToggle } = themeSlice.actions;
export const selectMode = (state: RootState) => state.theme.dark;
export default themeSlice.reducer;
