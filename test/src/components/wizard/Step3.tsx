import React from 'react';

interface FormErrors {
  height?: string;
  weight?: string;
  age?: string;
  gender?: string;
  activityLevel?: string;
}

interface Step3Props {
  prevStep: () => void;
  handleSubmit: () => void;
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  values: Partial<Record<string, any>>;
  errors: FormErrors; // Added errors prop
}

const Step3: React.FC<Step3Props> = ({ prevStep, handleSubmit, handleChange, values, errors }) => {
  return (
    <div>
      <h3>Step 3: Lifestyle</h3>
      <div>
        <label htmlFor="activityLevel" style={{ display: 'block', marginBottom: '5px' }}>Activity Level:</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={values.activityLevel || ''}
          onChange={handleChange('activityLevel')}
          style={{ marginBottom: '5px', padding: '8px', width: '100%', border: errors.activityLevel ? '1px solid red' : '1px solid #ccc' }}
        >
          <option value="">Select Activity Level</option>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="extra-active">Extra active (very hard exercise/physical job)</option>
        </select>
        {errors.activityLevel && <p style={{ color: 'red', fontSize: '0.9em', margin: '0 0 10px 0' }}>{errors.activityLevel}</p>}
      </div>
      <div>
        <label htmlFor="dietaryRestrictions" style={{ display: 'block', marginBottom: '5px' }}>Dietary Restrictions (if any):</label>
        <textarea
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={values.dietaryRestrictions || ''}
          onChange={handleChange('dietaryRestrictions')}
          placeholder="e.g., vegetarian, gluten-free, allergies..."
          rows={4}
          style={{ marginBottom: '15px', padding: '8px', width: 'calc(100% - 16px)', resize: 'vertical', border: '1px solid #ccc' }} // No specific error border for this optional field
        />
        {/* No error message display for dietaryRestrictions as it's optional */}
      </div>
    </div>
  );
};

export default Step3;
