import React from 'react';
import { Control, Controller } from 'react-hook-form';

type TextareaProps = {
  className?: string;
  control: Control;
  name: string;
  value?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  [key: string]: unknown;
};

const Textarea: React.FC<TextareaProps> = ({
  className,
  control,
  name,
  rows,
  cols,
  placeholder,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <textarea
          placeholder={placeholder}
          className={className}
          rows={rows}
          cols={cols}
          {...props}
          {...field}
        />
      )}
    />
  );
};

export default Textarea;
