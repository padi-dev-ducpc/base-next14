'use client';

export interface IInputProps {
  label?: string;
  type: string;
  register_conditions?: any;
  errors?: any;
  className?: string;
  containerClass?: string;
  value?: string;
  placeholder?: string;
  isDisabledAutoFill?: boolean;
}

export default function InputForm({
  label,
  type,
  register_conditions = {},
  errors,
  className = 'text-black p-2.5 h-10 rounded-md border-2 focus:border-[#A5FECB] focus:outline-none',
  containerClass,
  value,
  placeholder,
  isDisabledAutoFill,
}: IInputProps) {
  return (
    <div className={`${containerClass ? containerClass : `flex flex-col`}`}>
      {label && <label className='text-lg font-medium'>{label}</label>}
      <input
        type={type}
        {...register_conditions}
        className={className}
        placeholder={placeholder}
        autoComplete={isDisabledAutoFill ? 'new-password' : ''}
        defaultValue={value}
      />
      <div className='h-7'>
        {errors && <p className='text-red-600 text-sm'>{errors.message}</p>}
      </div>
    </div>
  );
}
