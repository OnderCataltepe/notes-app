import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './reducers/noteSlice';
import themeSlice from './reducers/themeSlice';
const store = configureStore({
  reducer: {
    note: noteSlice,
    theme: themeSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
