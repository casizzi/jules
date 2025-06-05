import React from 'react';

interface FormErrors {
  height?: string;
  weight?: string;
  age?: string;
  gender?: string;
  activityLevel?: string;
}

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: Partial<Record<string, any>>;
  errors: FormErrors; // Added errors prop
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep, handleChange, values, errors }) => {
  return (
    <div>
      <h3>Step 2: Personal Details</h3>
      <div>
        <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={values.age || ''}
          onChange={handleChange('age')}
          placeholder="Enter your age"
          style={{ marginBottom: '5px', padding: '8px', width: 'calc(100% - 16px)', border: errors.age ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.age && <p style={{ color: 'red', fontSize: '0.9em', margin: '0 0 10px 0' }}>{errors.age}</p>}
      </div>
      <div>
        <label htmlFor="gender" style={{ display: 'block', marginBottom: '5px' }}>Gender:</label>
        <select
          id="gender"
          name="gender"
          value={values.gender || ''}
          onChange={handleChange('gender')}
          style={{ marginBottom: '5px', padding: '8px', width: '100%', border: errors.gender ? '1px solid red' : '1px solid #ccc' }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
          <option value="other">Other</option>
        </select>
        {values.gender === 'other' && (
          <input
            type="text"
            name="genderOther"
            value={values.genderOther || ''}
            onChange={handleChange('genderOther')}
            placeholder="Please specify"
            style={{ marginTop: '5px', marginBottom: '5px', padding: '8px', width: 'calc(100% - 16px)', border: errors.gender && !values.genderOther ? '1px solid red' : '1px solid #ccc' }}
          />
        )}
        {errors.gender && <p style={{ color: 'red', fontSize: '0.9em', margin: '0 0 10px 0' }}>{errors.gender}</p>}
      </div>
    </div>
  );
};

export default Step2;
