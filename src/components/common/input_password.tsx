import InputPartialClearButton from './partial/input_partial_clear'
import { IComponent } from '@/interface/i_component'
import { IInput } from '@/interface/i_input'
import { cn } from '@/util/cn'
import { ReactNode, forwardRef } from 'react'

interface InputProps extends IComponent, IInput {
  icon?: ReactNode
}

/**
 * @link https://preline.co/docs/input.html
 */
const InputPassword = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      id,
      name,
      className,
      placeholder,
      value,
      onChange,
      icon,
      onClear,
      invalid,
      disabled,
    }: InputProps,
    ref
  ) => {
    return (
      <div
        className={cn('relative', className)}
        ref={ref}
      >
        <input
          className={cn(
            'peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600 outline-none',
            invalid && 'border-b-red-500'
          )}
          id={id}
          name={name}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="current-password"
          required
          disabled={disabled}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          {icon}
        </div>
        <InputPartialClearButton
          name={name}
          onClear={onClear}
          visible={!!value}
        />
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'
export default InputPassword
