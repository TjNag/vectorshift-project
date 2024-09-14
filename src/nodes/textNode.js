// textNode.js
import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode'; // Adjust the import path as necessary
import { useStore } from '../store';  // Adjust the path as needed based on your folder structure


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => setCurrText(e.target.value);

  const extractVariables = (text) => {
    const pattern = /{{\s*([\w]+)\s*}}/g;
    let match;
    const variables = new Set();
    
    while ((match = pattern.exec(text)) !== null) {
        variables.add(match[1]);
    }

    return [...variables];
};

const updateNodeField = useStore(state => state.updateNodeField);

useEffect(() => {
    const variables = extractVariables(currText);
    updateNodeField(id, 'leftHandles', variables.map(varName => ({ id: varName, style: { top: '50%' } })));
}, [currText, id, updateNodeField]);



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
