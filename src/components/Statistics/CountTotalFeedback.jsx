import React from "react";
import CountBadFeedback from "./CountBadFeedback";
import CountGoodFeedback from "./CountGoodFeedback";
import CountNeutralFeedback from "./CountNeutralFeedback";

const CountTotalFeedback = ({ value }) => (
  <p className="Counter__GoodValue">
    {CountGoodFeedback + CountNeutralFeedback + CountBadFeedback}
  </p>
);

export default CountTotalFeedback;
