import { Node, Edge, GraphState } from '../types';

export const generateInitialGraph = (): GraphState => {
  const nodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
    id: `node-${i}`,
    type: 'custom',
    position: {
      x: 400 + 200 * Math.cos(2 * Math.PI * i / 10),
      y: 300 + 200 * Math.sin(2 * Math.PI * i / 10),
    },
    data: {
      label: `Node ${i + 1}`,
      color: '#ffffff',
      fontSize: 14,
    },
  }));

  const edges: Edge[] = nodes.reduce((acc: Edge[], node, i) => {
    if (i < nodes.length - 1) {
      acc.push({
        id: `edge-${i}`,
        source: node.id,
        target: nodes[i + 1].id,
      });
    }
    return acc;
  }, []);

  // Add closing edge to make it a circle
  edges.push({
    id: `edge-${nodes.length - 1}`,
    source: nodes[nodes.length - 1].id,
    target: nodes[0].id,
  });

  return { nodes, edges };
};