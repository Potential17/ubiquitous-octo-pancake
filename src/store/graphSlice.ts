import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge, GraphState } from '../types';
import { generateInitialGraph } from '../utils/graphUtils';

const initialState: GraphState = generateInitialGraph();

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateNodeColor: (
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.data.color = action.payload.color;
      }
    },
    updateNodeFontSize: (
      state,
      action: PayloadAction<{ id: string; fontSize: number }>
    ) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.data.fontSize = action.payload.fontSize;
      }
    },
    updateNodePosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>
    ) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.position = action.payload.position;
      }
    },
    setGraphState: (state, action: PayloadAction<GraphState>) => {
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
    },
  },
});

export const {
  updateNodeColor,
  updateNodeFontSize,
  updateNodePosition,
  setGraphState,
} = graphSlice.actions;
export default graphSlice.reducer;