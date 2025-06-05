'use client';

import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { AnimatePresence, motion } from 'framer-motion';

// Define a type for errors
interface FormErrors {
  height?: string;
  weight?: string;
  age?: string;
  gender?: string;
  activityLevel?: string;
  // Add other fields as necessary
}

const FormWizard = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [animationDirection, setAnimationDirection] = useState(1);

  const nextStep = () => {
    setAnimationDirection(1);
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    setAnimationDirection(-1);
    setStep(prev => prev - 1);
  };

  const handleChange = (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [input]: e.target.value }));
    // Clear error for this field when user starts typing
    if (errors[input as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [input]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.height || Number(formData.height) <= 0) newErrors.height = 'Height must be a positive number.';
    if (!formData.weight || Number(formData.weight) <= 0) newErrors.weight = 'Weight must be a positive number.';
    if (!formData.age || Number(formData.age) <= 0 || Number(formData.age) > 120) newErrors.age = 'Age must be a positive number and realistic.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (formData.gender === 'other' && !formData.genderOther) newErrors.gender = 'Please specify your gender.';
    if (!formData.activityLevel) newErrors.activityLevel = 'Activity level is required.';
    // No specific validation for dietaryRestrictions as it's free-form
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Optionally, navigate to the first step with an error
      if (validationErrors.height || validationErrors.weight) setStep(1);
      else if (validationErrors.age || validationErrors.gender) setStep(2);
      else if (validationErrors.activityLevel) setStep(3)
      return;
    }
    setErrors({});
    console.log('Form Submitted:', formData);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} errors={errors} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} errors={errors} />;
      case 3:
        return <Step3 prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange} values={formData} errors={errors} />;
      default:
        setStep(1);
        return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} errors={errors} />;
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'white', maxWidth: '500px', margin: '20px auto', overflowX: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Bodily Makeup Form Wizard - Step {step}</h2>
        <button onClick={onClose} title="Close Wizard" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
      </div>
      <AnimatePresence mode="wait" custom={animationDirection}>
        <motion.div
          key={step}
          custom={animationDirection}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {step > 1 ? (<button onClick={prevStep} style={{ padding: '10px 15px' }}>Previous</button>) : <div />}
        {step < 3 && (<button onClick={nextStep} style={{ padding: '10px 15px' }}>Next</button>)}
        {step === 3 && (<button onClick={handleSubmit} style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white' }}>Submit</button>)}
      </div>
    </div>
  );
};

export default FormWizard;
