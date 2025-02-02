import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNodeColor, updateNodeFontSize } from '../store/graphSlice';
import { addToHistory } from '../store/historySlice';
import { RootState } from '../store';

interface NodeCustomizationPanelProps {
  selectedNodeId: string | null;
}

export const NodeCustomizationPanel: React.FC<NodeCustomizationPanelProps> = ({
  selectedNodeId
}) => {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state: RootState) => state.graph);
  const selectedNode = nodes.find(node => node.id === selectedNodeId);

  const handleColorChange = (color: string) => {
    if (selectedNodeId && selectedNode) {
      const updatedNodes = nodes.map(node =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, color } }
          : node
      );
      
      dispatch(updateNodeColor({ id: selectedNodeId, color }));
      dispatch(addToHistory({
        nodes: updatedNodes,
        edges
      }));
    }
  };

  const handleFontSizeChange = (fontSize: number) => {
    if (selectedNodeId && selectedNode) {
      const updatedNodes = nodes.map(node =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, fontSize } }
          : node
      );

      dispatch(updateNodeFontSize({ id: selectedNodeId, fontSize }));
      dispatch(addToHistory({
        nodes: updatedNodes,
        edges
      }));
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Node Customization</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Color</label>
          <input
            type="color"
            value={selectedNode?.data.color || '#ffffff'}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-full h-10 cursor-pointer"
            disabled={!selectedNodeId}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <input
            type="range"
            min="12"
            max="24"
            value={selectedNode?.data.fontSize || 14}
            onChange={(e) => handleFontSizeChange(Number(e.target.value))}
            className="w-full"
            disabled={!selectedNodeId}
          />
          <span className="text-sm">{selectedNode?.data.fontSize || 14}px</span>
        </div>
      </div>
    </div>
  );
};