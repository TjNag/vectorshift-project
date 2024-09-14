// textNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode'; // Adjust the import path as necessary

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => setCurrText(e.target.value);

  return (
    <BaseNode
      id={id}
      rightHandles={[{ id: 'output' }]}
    >
      <div>
        <span>Text</span>
        <div>
          <label>Text:<input type="text" value={currText} onChange={handleTextChange} /></label>
        </div>
      </div>
    </BaseNode>
  );
};
