"use client";

import { FC } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface MesageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: FC<MesageInputProps> = ({
  id,
  placeholder,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={id}
        {...register(id, { required })}
        className="text-black font-light py-2 px-4 bg-neutral-200 w-full rounded-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
