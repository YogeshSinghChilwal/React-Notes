import React, { useId, forwardRef, Ref } from 'react';

// Define the props interface
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: string[]; // Array of options as strings
    label?: string; // Optional label prop
    className?: string; // Optional additional classes
}

// Use forwardRef to allow ref forwarding
const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { options, label, className = "", ...props },
    ref: Ref<HTMLSelectElement>
) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;
