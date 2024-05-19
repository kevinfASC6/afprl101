import React, { useState } from 'react';
import '.././App.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(""); 

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      window.location.href = `#${selectedOption}`;
    }
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="dropdown">Select a topic:</label>
      <select className="dropdown-select" id="dropdown" value={selectedOption} onChange={handleChange}>
        <option className="dropdown-option" value="">Choose a topic</option>
        <option className="dropdown-option" value="TransatlanticSlaveTrade">Transatlantic Slave Trade</option>
        <option className="dropdown-option" value="Colonialism">Colonialism</option>
        <option className="dropdown-option" value="Policing">Policing</option>
      </select>
      <button className="submit-button" onClick={handleSubmit}>Go to Topic</button>
      {selectedOption && <p className="selected-option">You selected: {selectedOption}</p>}
    </div>
  );
}

export default Dropdown;
