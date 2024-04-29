"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormFields {
  SingleLine: string;
  Email: string;
  PhoneNumber_countrycode: string;
  SingleLine1: string; // Zipcode
  SingleLine2: string; // Housenummer
}

interface FormErrors {
  [key: string]: string;
}

const initialFormValues = {
  SingleLine: '',
  Email: '',
  PhoneNumber_countrycode: '',
  SingleLine1: '',
  SingleLine2: '',
};


const ZofoForm: React.FC = () => {

  const [formValues, setFormValues] = useState<FormFields>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // useEffect(() => {
  //   // This will now handle client-specific initializations
  // }, []);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'SingleLine':
        error = value ? '' : 'Naam is verplicht';
        break;
      case 'Email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = emailRegex.test(value) ? '' : 'Voer een geldig e-mailadres in';
        break;
      case 'PhoneNumber_countrycode':
        const phoneRegex = /^\d{9,10}$/;
        error = phoneRegex.test(value) ? '' : 'Telefoonnummer moet 9 tot 10 cijfers zijn';
        break;
      case 'SingleLine1':
        const zipcodeRegex = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;
        error = zipcodeRegex.test(value) ? '' : 'Voer een geldige Nederlandse postcode in';
        break;
      case 'SingleLine2':
        error = value ? '' : 'Huisnummer is verplicht';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setFormValues(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const hasErrors = Object.values(formErrors).some(error => error !== '');
    if (hasErrors) return;
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const isFormValid = Object.values(formErrors).every((error) => error === '') && Object.values(formValues).every(value => value !== '');




  return (
    <div className="font-sans text-lg w-full">
      <form 
        action="https://forms.zohopublic.eu/zongeschikt/form/LP002ZG84858966Flatroof/formperma/OL6urq_PIZl8yzemoMUPb_o5h2rPR_TeyGpR65gPKYM/htmlRecords/submit" 
        method="POST" 
        acceptCharset="UTF-8" 
        encType="multipart/form-data" 
        className="flex flex-col items-center justify-center gap-4 mx-auto w-full"
        onSubmit={handleSubmit}
        
      >
        {/* Hidden Inputs */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="https://zonnepanelen.zongericht.nl/bedankt-pagina/" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="SingleLine7" value="[channel]" />
        <input type="hidden" name="SingleLine8" value="[channeldrilldown1]" />
        <input type="hidden" name="SingleLine9" value="[channeldrilldown2]" />
        <input type="hidden" name="SingleLine10" value="[channeldrilldown3]" />
        <input type="hidden" name="SingleLine11" value="[landingpage]" />
        <input type="hidden" name="SingleLine12" value="[landingpagegroup]" />
        <input type="hidden" name="PhoneNumber_countrycodeval" value="+31" />
        <input type="hidden" name="SingleLine3" value="Zongericht" />
        <input type="hidden" name="SingleLine5" value="https://zonnepanelen.zongericht.nl/zinken-dak" />
        <input type="hidden" name="SingleLine6" value="Next.JS LP-004 - New technology - Zinken Dak" />
        <input type="hidden" name="SingleLine4" value="" />

        <div className="flex flex-col items-center justify-center w-full gap-1 md:gap-2 text-black">
          {/* Text Inputs */}
          <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="SingleLine"
                        value={formValues.SingleLine}
                        onChange={handleChange}
                        className={`file-input bg-qoqu_Light_Orange/10 rounded-full w-full border-none px-4 mb-2 mt-2 ${formErrors.SingleLine ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Voor en achternaam"
                        disabled={isSubmitted}
                    />
                    {formErrors.SingleLine && <p className="text-red-500 text-xs">{formErrors.SingleLine}</p>}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="PhoneNumber_countrycode"
                        value={formValues.PhoneNumber_countrycode}
                        onChange={handleChange}
                        className={`file-input bg-qoqu_Light_Orange/10 rounded-full w-full border-none px-4 mb-2 mt-2 ${formErrors.PhoneNumber_countrycode ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Telefoonnummer"
                        disabled={isSubmitted}
                    />
                    {formErrors.PhoneNumber_countrycode && <p className="text-red-500 text-xs">{formErrors.PhoneNumber_countrycode}</p>}
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="Email"
                        value={formValues.Email}
                        onChange={handleChange}
                        className={`file-input bg-qoqu_Light_Orange/10 rounded-full w-full border-none px-4 mb-2 mt-2 ${formErrors.Email ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Email"
                        disabled={isSubmitted}
                    />
                    {formErrors.Email && <p className="text-red-500 text-xs">{formErrors.Email}</p>}
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="SingleLine1"
                        value={formValues.SingleLine1}
                        onChange={handleChange}
                        className={`file-input bg-qoqu_Light_Orange/10 rounded-full w-full border-none px-4 mb-2 mt-2 ${formErrors.SingleLine1 ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Postcode"
                        disabled={isSubmitted}
                    />
                    {formErrors.SingleLine1 && <p className="text-red-500 text-xs">{formErrors.SingleLine1}</p>}
                </div>

                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="SingleLine2"
                        value={formValues.SingleLine2}
                        onChange={handleChange}
                        className={`file-input bg-qoqu_Light_Orange/10 rounded-full w-full border-none px-4 mb-2 mt-2 ${formErrors.SingleLine2 ? 'border-red-500' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Huisnummer"
                        disabled={isSubmitted}
                    />
                    {formErrors.SingleLine2 && <p className="text-red-500 text-xs">{formErrors.SingleLine2}</p>}
                </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitted}
            className={`submit-button mt-5 md:mt-4 py-4 md:py-3 px-3 md:px-3 md:min-w-[250px] w-full rounded-full  drop-shadow-md leading-tight border-none ${isFormValid && !isSubmitted ? 'bg-qoqu_Light_Green hover:bg-brand_original_main3' : 'bg-qoqu_Light_Orange cursor-not-allowed'} text-white font-bold text-xl transition-colors duration-300`}
          > 
          <span className="drop-shadow-md">
            {isSubmitted ? 
              "Uw aanvraag is succesvol ingediend" : "Schouwing aanvragen" }
          </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZofoForm;
