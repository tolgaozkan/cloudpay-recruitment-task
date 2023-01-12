import React, { useState, useEffect } from "react";

const MultiSelectDropdown: React.FC<{
  options: string[];
  onSelectedChange: (selected: string[]) => void;
}> = ({ options, onSelectedChange }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const onSelect = (option: string, checked: boolean) => {
    if (checked) {
      selected.add(option);
    } else {
      selected.delete(option);
    }

    if (onSelectedChange) {
      onSelectedChange(Array.from(selected));
    }

    setSelected(new Set(selected));
  };

  return (
    <>
      <form>
        <div className="multiselect">
          <div className="selectBox" onClick={() => setExpanded(!expanded)}>
            <select>
              <option>Select an option</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div id="checkboxes" style={{ display: expanded ? "block" : "none" }}>
            {options.map((option, index) => (
              <label key={index} htmlFor={`chk-${index}`}>
                <input
                  type="checkbox"
                  id={`chk-${index}`}
                  onClick={(event) =>
                    onSelect(option, (event.target as any).checked)
                  }
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default MultiSelectDropdown;
