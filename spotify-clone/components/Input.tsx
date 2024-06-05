import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `first-letter:
        flex 
        w-full
        rounded-md
        bg-neutral-700
        border
        border-transparent
        px-3
        py-3
        text-sm
        file:bg-rose-500
        file:border-none
        file:text-black
        file:px-2
        file:text-sm
        file:font-medium
        file:rounded-md
        file:cursor-pointer
        file:hover:opacity-75

        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none
        `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
