/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { Controller } from 'react-hook-form';

type InputProps = {
  name: string;
  className?: string;
  placeholder?: string;
  control: any;
  [key: string]: any;
};

const Input: React.FC<InputProps> = ({
  name,
  control,
  className,
  placeholder,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default Input;
