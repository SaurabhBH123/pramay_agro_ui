import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaFilter, FaPlus, FaMinus } from 'react-icons/fa';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    categories: false,
    size: false,
    segment: false,
    specialtyCrops: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-full md:w-64  mt-20">
      <div className="flex items-center mb-4">
        <FaFilter className="text-xl mr-2" />
        <h2 className="text-xl">Filters</h2>
      </div>

      {/* Categories */}
      <div className="mb-4 border border-gray-300 p-2 rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('categories')}
          aria-expanded={openSections.categories}
        >
          <h3 className="">Categories</h3>
          {openSections.categories ? <FaMinus /> : <FaPlus />}
        </div>
        {openSections.categories && (
          <div className="mt-2">
            {filters.categories.map((category, index) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  value={category}
                  onChange={onFilterChange}
                  className="mr-2"
                />
                <label htmlFor={`category-${index}`}>{category}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="mb-4 border border-gray-300 p-2 rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('size')}
          aria-expanded={openSections.size}
        >
          <h3 className="">Size</h3>
          {openSections.size ? <FaMinus /> : <FaPlus />}
        </div>
        {openSections.size && (
          <div className="mt-2">
            {filters.size.map((size, index) => (
              <div key={size} className="flex items-center">
                <input
                  type="checkbox"
                  id={`size-${index}`}
                  value={size}
                  onChange={onFilterChange}
                  className="mr-2"
                />
                <label htmlFor={`size-${index}`}>{size}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Segment */}
      <div className="mb-4 border border-gray-300 p-2 rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('segment')}
          aria-expanded={openSections.segment}
        >
          <h3 className="">Segment</h3>
          {openSections.segment ? <FaMinus /> : <FaPlus />}
        </div>
        {openSections.segment && (
          <div className="mt-2">
            {filters.segment.map((segment, index) => (
              <div key={segment} className="flex items-center">
                <input
                  type="checkbox"
                  id={`segment-${index}`}
                  value={segment}
                  onChange={onFilterChange}
                  className="mr-2"
                />
                <label htmlFor={`segment-${index}`}>{segment}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specialty Crops */}
      <div className="mb-4 border border-gray-300 p-2 rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('specialtyCrops')}
          aria-expanded={openSections.specialtyCrops}
        >
          <h3 className="">Specialty Crops</h3>
          {openSections.specialtyCrops ? <FaMinus /> : <FaPlus />}
        </div>
        {openSections.specialtyCrops && (
          <div className="mt-2">
            {filters.specialtyCrops.map((crop, index) => (
              <div key={crop} className="flex items-center">
                <input
                  type="checkbox"
                  id={`crop-${index}`}
                  value={crop}
                  onChange={onFilterChange}
                  className="mr-2"
                />
                <label htmlFor={`crop-${index}`}>{crop}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

FilterSidebar.propTypes = {
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
    segment: PropTypes.arrayOf(PropTypes.string).isRequired,
    specialtyCrops: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSidebar;
