import React, { useState } from 'react';
import '.././App.css'; // Import the CSS file for styling
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons library

const DropTable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-table-container">
      <h2 className={`drop-table-title ${isOpen ? 'active' : ''}`} onClick={toggleCollapse}>
        {title} 
        <span className="drop-table-arrow">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && <div className="drop-table-content">{children}</div>}
    </div>
  );
};

export default DropTable;
