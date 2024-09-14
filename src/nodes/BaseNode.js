// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ children, id, style, leftHandles = [], rightHandles = [] }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
      {leftHandles.map(handle => (
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style}
          key={handle.id}
        />
      ))}
      {children}
      {rightHandles.map(handle => (
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={handle.style}
          key={handle.id} />
        ))
      }
    </div>
  );
};

export default BaseNode;
