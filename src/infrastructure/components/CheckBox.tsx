import React from 'react';

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="container flex items-center gap-x-2 ">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
        className="container_checkbox"
      />
      {label && (
        <label htmlFor={id} className="text-sm container__label">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;