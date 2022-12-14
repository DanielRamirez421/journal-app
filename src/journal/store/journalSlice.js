import { createSlice } from '@reduxjs/toolkit';

export const journalSliceName = 'journal';

const initialState = {
  isSaving: true,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  //   id: 'ABC123',
  //   title: '',
  //   body: '',
  //   date: 123455,
  //   imagesUrls: [],
  // }
};


export const journalSlice = createSlice({
  name: journalSliceName,
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state, action) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;