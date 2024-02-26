import InputPartialClearButton from './partial/input_partial_clear'
import { IComponent } from '@/interface/i_component'
import { IInput } from '@/interface/i_input'
import { cn } from '@/util/cn'
import { ReactNode, forwardRef } from 'react'

interface InputPinProps extends IComponent, IInput {
  icon?: ReactNode
}

/**
 * @link https://preline.co/docs/input.html
 */
const InputPin = forwardRef<HTMLDivElement, InputPinProps>(
  (
    {
      id,
      className,
      placeholder,
      value,
      onChange,
      icon,
      onClear,
      invalid,
      disabled,
    }: InputPinProps,
    ref
  ) => {
    return (
      <div
        className={cn(
          'py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700',
          className
        )}
        ref={ref}
        id={id}
      >
        <div
          className="flex space-x-5"
          data-hs-pin-input
        >
          <input
            className="block size-[38px] text-center border-gray-200 rounded-md text-sm placeholder:text-gray-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            type="text"
            placeholder="○"
            data-hs-pin-input-item
            autoFocus
          />
          <input
            className="block size-[38px] text-center border-gray-200 rounded-md text-sm placeholder:text-gray-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            type="text"
            placeholder="○"
            data-hs-pin-input-item
          />
          <input
            className="block size-[38px] text-center border-gray-200 rounded-md text-sm placeholder:text-gray-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            type="text"
            placeholder="○"
            data-hs-pin-input-item
          />
          <input
            className="block size-[38px] text-center border-gray-200 rounded-md text-sm placeholder:text-gray-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            type="text"
            placeholder="○"
            data-hs-pin-input-item
          />
        </div>
      </div>
    )
  }
)

InputPin.displayName = 'Input'
export default InputPin
