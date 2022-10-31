/* eslint-disable no-duplicate-imports */
import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import noteReducer from '../../store/reducers/noteSlice';
import themeReducer from '../../store/reducers/themeSlice';
import type { NoteState } from '../../store/reducers/noteSlice';

export function renderWithProviders(
  ui: JSX.Element,
  {
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { note: noteReducer, theme: themeReducer } }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
