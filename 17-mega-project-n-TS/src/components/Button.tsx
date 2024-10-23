import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset"; // optional
    bgColor?: string; // optional
    textColor?: string; // optional
    className?: string; // optional
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
