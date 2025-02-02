import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Undo2, Redo2 } from 'lucide-react';
import { undo, redo } from '../store/historySlice';
import { setGraphState } from '../store/graphSlice';
import { RootState } from '../store';

export const UndoRedoControls: React.FC = () => {
  const dispatch = useDispatch();
  const { past, present, future } = useSelector((state: RootState) => state.history);

  const handleUndo = () => {
    dispatch(undo());
    
    dispatch(setGraphState(past[past.length - 1]));
  };

  const handleRedo = () => {
    dispatch(redo());
   
    dispatch(setGraphState(future[0]));
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleUndo}
        disabled={past.length === 0}
        className="p-2 bg-white rounded shadow hover:bg-gray-50 disabled:opacity-50"
        title="Undo"
      >
        <Undo2 className="w-5 h-5" />
      </button>
      <button
        onClick={handleRedo}
        disabled={future.length === 0}
        className="p-2 bg-white rounded shadow hover:bg-gray-50 disabled:opacity-50"
        title="Redo"
      >
        <Redo2 className="w-5 h-5" />
      </button>
    </div>
  );
};