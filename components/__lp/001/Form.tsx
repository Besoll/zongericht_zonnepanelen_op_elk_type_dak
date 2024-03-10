"use client";

import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  address: string;
  lead_bron_URL: string;
  lead_bron_ID: string;
  opdrachtgever: string;
  zc_gad: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  postcode?: string;
  address?: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    address: '',
    lead_bron_URL: 'https://zonnepanelen.zongericht.nl',
    lead_bron_ID: 'Next.js application Zongericht',
    opdrachtgever: 'Zongericht',
    zc_gad: '',
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: '', success: '' });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value ? '' : 'Naam is verplicht.';
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Ongeldig e-mailadres.';
      case 'phone':
        return /^\d{10}$/.test(value) || /^\d{9}$/.test(value)  ? '' : 'Ongeldig telefoonnummer.';
      case 'postcode':
        return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value) ? '' : 'Ongeldige postcode.';
      case 'address':
        return value ? '' : 'Adres is verplicht.';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: error });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        isValid = false;
        newErrors[key as keyof FormErrors] = error;
      }
    });
    setFormErrors(newErrors);
    return isValid;
  };

  const [showModal, setShowModal] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    if (!validateForm()) {
      return;
    }

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

  // Automatically close modal after a delay if needed or on success/error
  React.useEffect(() => {
    if (submitStatus.success || submitStatus.error) {
      const timer = setTimeout(() => setShowModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);



  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
      <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Voor en achternaam"
        className={`file-input w-full max-w-xs px-4 mb-2 mt-2 ${formErrors.name ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
        disabled={!!submitStatus.success}
      />
      {formErrors.name && <p className="text-red-500 text-xs absolute">{formErrors.name}</p>}
    </div>

    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`file-input w-full max-w-xs px-4 mb-2 ${formErrors.email ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
        disabled={!!submitStatus.success}
      />
      {formErrors.email && <p className="text-red-500 text-xs absolute">{formErrors.email}</p>}
    </div>

    <div>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefoonnummer"
        className={`file-input w-full max-w-xs px-4 mb-2 ${formErrors.phone ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
        disabled={!!submitStatus.success}
        
      />
      {formErrors.phone && <p className="text-red-500 text-xs absolute">{formErrors.phone}</p>}
    </div>

    <div>
      <input
        type="text"
        name="postcode"
        value={formData.postcode}
        onChange={handleChange}
        placeholder="Postcode"
        className={`file-input w-full max-w-xs px-4 mb-2 ${formErrors.postcode ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
        disabled={!!submitStatus.success}
      />
      {formErrors.postcode && <p className="text-red-500 text-xs absolute">{formErrors.postcode}</p>}
    </div>

    <div>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Huisnummer"
        className={`file-input w-full max-w-xs px-4 mb-2 ${formErrors.address ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
        disabled={!!submitStatus.success}
      />
      {formErrors.address && <p className="text-red-500 text-xs absolute">{formErrors.address}</p>}
    </div>
      {/* Hidden fields */}
      <input type="hidden" name="opdrachtgever" value="Zongericht" />
      <input type="hidden" name="lead_bron_URL" value="https://zonnepanelen.zongericht.nl" />
      <input type="hidden" name="lead_bron_ID" value="Next.js application Zongericht" />
      <input type="hidden" name="zc_gad" value="" />

      {/* Display submission status */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="relative bg-white w-full max-w-md mx-auto rounded shadow-lg p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-black"
            >
              X
            </button>
            {submitStatus.loading && <p>Submitting...</p>}
            {submitStatus.error && <p className="text-red-500">{submitStatus.error}</p>}
            {submitStatus.success && <p className="text-green-500">{submitStatus.success}</p>}
          </div>
        </div>
      )}

      <button 
        type="submit" 
        disabled={!!submitStatus.error}
        className={`text-white px-2 py-3 rounded mt-2 
                  ${submitStatus.error ? 'gradient_green opacity-80' : 'gradient_orange shadow-lg hover:scale-105'}`}
      >
        {submitStatus.error ? 
        "Uw aanvraag is succesvol ingediend" : "Vrag aan schouwing een" }
      </button>

    </form>
  );
};

export default LeadForm;

