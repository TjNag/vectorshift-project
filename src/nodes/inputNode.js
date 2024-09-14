// inputNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode'; // Adjust the import path as necessary

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      id={id}
      rightHandles={[{ id: 'value' }]}
    >
      <div>
        <span>Input</span>
        <div>
          <label>Name:<input type="text" value={currName} onChange={handleNameChange} /></label>
          <label>Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
