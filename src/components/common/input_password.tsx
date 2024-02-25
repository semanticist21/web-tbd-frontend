import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'
import { ChangeEvent, ReactNode, forwardRef } from 'react'
import { AiTwotoneCloseCircle } from 'react-icons/ai'

interface InputProps extends IComponent {
  placeholder?: string
  value?: string
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  onClear?: () => void
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
    }: InputProps,
    ref
  ) => {
    return (
      <div
        className={cn('relative', className)}
        ref={ref}
      >
        <input
          className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600 outline-none"
          id={id}
          name={name}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          {icon}
        </div>
        {onClear && value && (
          <button className="absolute end-1 top-4 flex items-center ps-2 peer-disabled:hidden hover:opacity-50 opacity-80">
            <AiTwotoneCloseCircle />
          </button>
        )}
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'
export default InputPassword
