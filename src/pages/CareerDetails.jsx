import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BaseUrl } from '../config';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerDetail = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null,
  });
  const [career,setCareer] = useState(null)
  const {id} = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    axios.get(`${BaseUrl}/api/get/singleCareer/${id}`)
    .then((res)=>{
        setCareer(res.data);
    })
    .catch((err)=>{
        console.error(err);
    })
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("fullName", formData.fullName);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("coverLetter", formData.coverLetter);
    payload.append("file", formData.cv);
    setLoading(true);
    axios.post(`${BaseUrl}/api/apply/career/${id}`, payload)
    .then((res)=>{
        toast.success(res.data.message);
    })
    .catch((err)=>{
        toast.error(err.message);
    })
    .finally(()=>{
        setLoading(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            cv: null,
          });
    })
  };

  return (
    <>
    <div className="flex justify-center p-6 mt-28">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg">
        <div className="w-full lg:w-7/10 p-6">
          <h2 className="text-2xl font-bold mb-4">{career?.Position}</h2>
          <p className="text-gray-700 mb-4">{career?.Description}</p>

          <h3 className="text-xl font-semibold mb-2">Roles & Responsibilities:</h3>
          <ul className="list-disc list-inside mb-4">
            {career?.Roles_Responsibilities.map((role, index) => (
              <li key={index} className="text-gray-600">{role}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Qualifications:</h3>
          <ul className="list-disc list-inside mb-4">
            {career?.Qualifications.map((qualification, index) => (
              <li key={index} className="text-gray-600">{qualification}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Company Overview:</h3>
          <p className="text-gray-700 mb-2">{career?.CompanyOverview}</p>

          <p className="text-gray-700 mb-2"><strong>Department:</strong> {career?.Department}</p>
          <p className="text-gray-700 mb-2"><strong>Location:</strong> {career?.State}, {career?.City.join(', ')}</p>

          
        </div>

        <div className="w-full lg:w-3/10 p-6 bg-gray-300 rounded-lg max-w-fit mt-20 mr-8 mb-6">
          <h3 className="text-xl font-semibold mb-4">Apply for this Position</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Cover Letter</label>
              <textarea 
                name="coverLetter" 
                value={formData.coverLetter} 
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Upload CV</label>
              <input 
                type="file" 
                name="cv" 
                onChange={handleFileChange}
                className="w-full mt-2 p-2 border rounded-md"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                { loading ? "Submitting..." : "Submit Application" }
            </button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default CareerDetail;
