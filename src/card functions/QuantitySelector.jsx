import React from "react";
import Select from "react-select";

const QuantitySelector = ({ onChange }) => {
  const options = Array.from({ length: 11 }, (_, i) => ({
    value: i,
    label: i.toString(),
  }));

  return (
    <div className="s">
      <Select className="select" onChange={onChange} options={options} />
    </div>
  );
};

export default QuantitySelector;
