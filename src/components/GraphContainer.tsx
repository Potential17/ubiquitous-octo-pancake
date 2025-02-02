import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateNodePosition } from '../store/graphSlice';
import { addToHistory } from '../store/historySlice';
import { CustomNode } from './CustomNode';
import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

interface GraphContainerProps {
  onNodeClick: (nodeId: string) => void;
}

export const GraphContainer: React.FC<GraphContainerProps> = ({ onNodeClick }) => {
  const dispatch = useDispatch();
  const { nodes: storeNodes, edges: storeEdges } = useSelector(
    (state: RootState) => state.graph
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(storeNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(storeEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onNodeDragStop = useCallback(
    (_: React.MouseEvent, node: Node) => {
      dispatch(
        updateNodePosition({
          id: node.id,
          position: node.position,
        })
      );
      dispatch(addToHistory({
        nodes: nodes.map(n => n.id === node.id ? { ...n, position: node.position } : n),
        edges
      }));
    },
    [dispatch, nodes, edges]
  );

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={storeNodes}
        edges={storeEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        onNodeClick={(_, node) => onNodeClick(node.id)}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};