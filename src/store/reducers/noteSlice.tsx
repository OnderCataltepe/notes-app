import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NoteData {
  id: string;
  title: string;
  body: string;
  createdDate: string;
  modifiedDate: string;
}

export interface NoteState {
  values: NoteData[];
}

export const initialState: NoteState = {
  values: []
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteData>) => {
      state.values = [...state.values, action.payload];
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const newValues = state.values.filter((item) => item.id !== action.payload);
      state.values = newValues;
    },
    updateNote: (state, action: PayloadAction<NoteData>) => {
      const index = state.values.findIndex((item) => item.id === action.payload.id);
      state.values[index] = action.payload;
    }
  }
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
