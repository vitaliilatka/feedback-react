import React from "react";

const Controls = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onGoodFeedback}>
      Good
    </button>
    <button type="button" onClick={onNeutralFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);

export default Controls;
