import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'
import { ChangeEventHandler, MouseEventHandler, forwardRef, useId } from 'react'

interface checkBoxProps extends IComponent {
  onClick?: MouseEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
  disabled?: boolean
  checked?: boolean
}

/**
 * @link https://preline.co/docs/input.html
 */
const CheckBox = forwardRef<HTMLDivElement, checkBoxProps>(
  (
    {
      id,
      name,
      className,
      onClick,
      onChange,
      label,
      disabled,
      checked,
    }: checkBoxProps,
    ref
  ) => {
    const cid = useId()
    id ??= cid

    return (
      <div
        className={cn('flex', disabled && 'opacity-70', className)}
        role="checkbox"
        aria-checked={checked}
        ref={ref}
      >
        <input
          className={cn(
            'shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800',
            className
          )}
          name={name}
          id={id}
          type="checkbox"
          disabled={disabled}
          onClick={onClick}
          onChange={onChange}
          checked={checked}
        />
        <label
          className="text-gray-500 ms-3 dark:text-gray-400 text-xs"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    )
  }
)

CheckBox.displayName = 'CheckBox'
export default CheckBox
