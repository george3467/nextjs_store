'use client';

import { useFormStatus } from 'react-dom';    // Hook to track form submission status

type SubmitButtonProps = {
  label: string;                              // Text shown when the button is not submitting       
  pendingLabel?: string;                      // Text shown when the button is submitting      
  variant?: 'primary' | 'success';
};

export default function SubmitButton({
  label,
  pendingLabel,
  variant = 'primary',
}: SubmitButtonProps) {

  // Destructure the 'pending' state from useFormStatus (true if the form is submitting)
  const { pending } = useFormStatus();

  // Define styling classes based on variant
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    success: 'bg-green-600 hover:bg-green-700',
  };

  return (
    <button
      type="submit"
      disabled={pending}
      className={`text-white px-4 py-2 rounded-md transition ${
        styles[variant]
      } ${pending ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {/* Show pending label if submitting, otherwise show regular label */}
      {pending ? pendingLabel || 'Submitting...' : label}
    </button>
  );
}