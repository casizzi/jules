import React from 'react';

interface FormErrors {
  height?: string;
  weight?: string;
  age?: string;
  gender?: string;
  activityLevel?: string;
}

interface Step1Props {
  nextStep: () => void;
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: Partial<Record<string, any>>;
  errors: FormErrors; // Added errors prop
}

const Step1: React.FC<Step1Props> = ({ nextStep, handleChange, values, errors }) => {
  return (
    <div>
      <h3>Step 1: Basic Information</h3>
      <div>
        <label htmlFor="height" style={{ display: 'block', marginBottom: '5px' }}>Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={values.height || ''}
          onChange={handleChange('height')}
          placeholder="Enter your height"
          style={{ marginBottom: '5px', padding: '8px', width: 'calc(100% - 16px)', border: errors.height ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.height && <p style={{ color: 'red', fontSize: '0.9em', margin: '0 0 10px 0' }}>{errors.height}</p>}
      </div>
      <div>
        <label htmlFor="weight" style={{ display: 'block', marginBottom: '5px' }}>Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={values.weight || ''}
          onChange={handleChange('weight')}
          placeholder="Enter your weight"
          style={{ marginBottom: '5px', padding: '8px', width: 'calc(100% - 16px)', border: errors.weight ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.weight && <p style={{ color: 'red', fontSize: '0.9em', margin: '0 0 10px 0' }}>{errors.weight}</p>}
      </div>
    </div>
  );
};

export default Step1;
