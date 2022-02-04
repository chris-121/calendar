import React, { useState } from 'react';
import {GoChevronDown} from 'react-icons/go'
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='flex items-center px-3 py-4 border-b-2'>{title} <GoChevronDown className='ml-2' /> </div>
        
      </div>
      {isActive && <div className="accordion-content px-3 py-4 transition">{content}</div>}
    </div>
  );
};

export default Accordion;