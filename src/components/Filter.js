import React from "react";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}

Filter.defaultProps = {
  value: ""
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};
