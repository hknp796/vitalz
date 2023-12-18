import React, { useState } from 'react';

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  const handleTabClick = (index) => {
    setActiveTab(index); // Set the active tab index
  };

  return (
    <div>
      <div className="text-right flex justify-end items-center border-gray-200 p-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? 'bg-blue-300 p-2 rounded-lg' : 'p-2'}
            
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default CustomTabs;
