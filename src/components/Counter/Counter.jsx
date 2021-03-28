import PropTypes from "prop-types";

const Counter = () => {
  <div>
    <span>Please leave feedback</span>
    <div>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  </div>;
};

Counter.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Counter;
