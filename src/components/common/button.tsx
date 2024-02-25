import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'
import {
  FormEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react'

interface ButtonProps extends PropsWithChildren, IComponent {
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  onSubmit?: FormEventHandler<HTMLButtonElement>
  prefixIcon?: ReactNode
  isLoading?: boolean
  disabled?: boolean
}

/**
 * @link https://preline.co/docs/buttons.html
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      name,
      className,
      type,
      children,
      onClick,
      onSubmit,
      isLoading,
      prefixIcon,
      disabled,
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        className={cn(
          'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
          className
        )}
        id={id}
        name={name}
        type={type}
        ref={ref}
        onClick={onClick}
        onSubmit={onSubmit}
        disabled={isLoading || disabled}
      >
        {isLoading ||
          (prefixIcon && (
            <div className="mr-2">
              {isLoading ? (
                <span
                  className="animate-spin inline-block size-4 border-2 border-current border-t-transparent text-white rounded-full top-0.5 relative"
                  role="status"
                  aria-label="loading"
                />
              ) : (
                prefixIcon
              )}
            </div>
          ))}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
