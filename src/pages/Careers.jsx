import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../config'
import axios from 'axios'
import CareerCard from './CareerCard'

const Careers = () => {
    const [careers, setCareers] = useState([])
    const [departmentFilter, setDepartmentFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');

    useEffect(()=>{
        axios.get(`${BaseUrl}/api/get/career`)
        .then((res)=>{
            setCareers(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
    return (
        <div className="max-w-5xl mx-auto my-8 mt-28">
      <div className="mb-8">
        <img
          src="https://kaybeebio.com/wp-content/themes/kaybeebio/assets/img/career-banner.jpg" // Replace with your career image URL
          alt="Careers"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <div className="flex justify-end gap-5 items-center mb-8">
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Departments</option>
          {/* Add options dynamically based on available departments */}
        </select>

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All States</option>
          {/* Add options dynamically based on available states */}
        </select>

        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Cities</option>
          {/* Add options dynamically based on available cities */}
        </select>
      </div>

      {careers?.map((career, index) => (
        <CareerCard key={index} career={career} />
      ))}
    </div>
      );
}

export default Careers