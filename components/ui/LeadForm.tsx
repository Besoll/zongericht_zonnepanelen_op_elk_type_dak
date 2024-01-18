"use client"

import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    address: '',
    lead_bron_URL: '', // This could be dynamically set based on the current page URL
    lead_bron_ID: '', // Set this based on the current page or context
    opdrachtgever: '', // Set this based on your requirements
    zc_gad: '', // Set this based on your requirements
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: '', success: '' });



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: '', success: '' });

    try {
      const response = await axios.post('/api/submit-lead', formData);
      setSubmitStatus({ loading: false, error: '', success: 'Form submitted successfully!' });
      // Additional logic on success (e.g., clear form)
    } catch (error) {
      console.error('Form Submission Error:', error);
      setSubmitStatus({ loading: false, error: 'Failed to submit form.', success: '' });
      // Additional error handling logic
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Voor en achternaam" className="border p-2 rounded text-primary px-2 py-3 shadow-inner bg-white focus:border-2 mb-2 mt-2" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded text-primary px-2 py-3 shadow-inner bg-white focus:border-2 mb-2" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefoonnummer" className="border p-2 rounded text-primary px-2 py-3 shadow-inner bg-white focus:border-2 mb-2" />
      <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode" className="border p-2 rounded text-primary px-2 py-3 shadow-inner bg-white focus:border-2 mb-2" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Huisnummer" className="border p-2 rounded text-primary px-2 py-3 shadow-inner bg-white focus:border-2 mb-2" />
      {/* Hidden fields */}
      <input type="hidden" name="opdrachtgever" value="Zongericht" />
      <input type="hidden" name="lead_bron_URL" value="https://zonnepanelen.zongericht.nl" />
      <input type="hidden" name="lead_bron_ID" value="Next.js application Zongericht" />
      <input type="hidden" name="zc_gad" value="" />

      {/* Display submission status */}
      {submitStatus.loading && <p>Submitting...</p>}
      {submitStatus.error && <p className="text-red-500">{submitStatus.error}</p>}
      {submitStatus.success && <p className="text-green-500">{submitStatus.success}</p>}
      <button type="submit" className="gradient_orange text-white px-2 py-3 shadow-lg hover:scale-105 rounded mt-2">Vrag aan schouwing een</button>
    </form>
  );
};

export default LeadForm;

