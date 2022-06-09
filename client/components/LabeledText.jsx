import React from 'react';

const LabeledText = ({ label, text }) => (
  <div>
    <div>
      <p>
        <span id='label'><strong>{`${label}: `}</strong></span>
        {text}
      </p>
    </div>
  </div>
);

export default LabeledText;
