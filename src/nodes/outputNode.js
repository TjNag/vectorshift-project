// outputNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode'; // Adjust the import path as necessary

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      leftHandles={[{ id: 'value' }]}
    >
      <div>
        <span>Output</span>
        <div>
          <label>Name:<input type="text" value={currName} onChange={handleNameChange} /></label>
          <label>Type:
            <select value={outputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
