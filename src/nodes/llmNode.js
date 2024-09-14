// llmNode.js
import React from 'react';
import BaseNode from './BaseNode'; // Adjust the import path as necessary

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      leftHandles={[
        { id: 'system', style: { top: `${100/3}%` } },
        { id: 'prompt', style: { top: `${200/3}%` } }
      ]}
      rightHandles={[{ id: 'response' }]}
    >
      <div>
        <span>LLM</span>
        <div>
          <span>This is a LLM.</span>
        </div>
      </div>
    </BaseNode>
  );
};
