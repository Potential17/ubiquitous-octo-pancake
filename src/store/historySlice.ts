import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryState, GraphState } from '../types';
import { generateInitialGraph } from '../utils/graphUtils';

const initialState: HistoryState = {
  past: [],
  present: generateInitialGraph(),
  future: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length === 0) return;
      
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      
      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    },
    redo: (state) => {
      if (state.future.length === 0) return;
      
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      
      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    },
    addToHistory: (state, action: PayloadAction<GraphState>) => {
      return {
        past: [...state.past, state.present],
        present: action.payload,
        future: [],
      };
    },
  },
});

export const { undo, redo, addToHistory } = historySlice.actions;
export default historySlice.reducer;