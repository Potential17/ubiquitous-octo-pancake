import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { GraphContainer } from './components/GraphContainer';
import { NodeCustomizationPanel } from './components/NodeCustomizationPanel';
import { UndoRedoControls } from './components/UndoRedoControls';

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };

  return (
    <Provider store={store}>
      <div className="relative w-full h-screen">
        <div className="absolute top-4 right-4 z-10 space-y-4">
          <UndoRedoControls />
          <NodeCustomizationPanel selectedNodeId={selectedNodeId} />
        </div>
        <div 
          className="absolute top-4 left-4 z-10 p-4 bg-white rounded shadow-lg"
          onClick={() => setSelectedNodeId(null)}
        >
          <h2 className="text-lg font-semibold">Instructions From Shashwat</h2>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Click on a node to select it</li>
            <li>• Drag nodes to reposition them</li>
            <li>• Use the panel on the right to customize selected node</li>
            <li>• Use undo/redo buttons to manage changes</li>
          </ul>
        </div>
        <GraphContainer onNodeClick={handleNodeClick} />
      </div>
    </Provider>
  );
}

export default App;