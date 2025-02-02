import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
  selected: boolean;
}

const CustomNode = memo(({ data, selected }: CustomNodeProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={`px-4 py-2 rounded shadow-md transition-all duration-200 ${
          selected ? 'ring-2 ring-blue-500' : ''
        }`}
        style={{
          background: data.color,
          fontSize: `${data.fontSize}px`,
          border: '1px solid #ddd',
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
});

export { CustomNode };