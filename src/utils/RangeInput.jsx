import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

const RangeInput = ({
  name,
  min,
  max,
  handleInputChange,
  title,
  placement = 'top',
  customClass = 'custom-tooltip',
}) => {
  const rangeInputRef = useRef(null);

  useEffect(() => {
    if (rangeInputRef.current) {
      new bootstrap.Tooltip(rangeInputRef.current, {
        title: title || 'This tooltip is themed via CSS variables.',
        placement,
        customClass,
      });
    }
  }, [title, placement, customClass]);

  return (
    <div className="range">
      <input
        ref={rangeInputRef}
        data-bs-toggle="tooltip"
        type="range"
        name={name}
        className="form-range"
        min={min}
        max={max}
        id="customRange1"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default RangeInput;
