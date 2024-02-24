import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'
import { PropsWithChildren, ReactNode, forwardRef } from 'react'

interface ButtonProps extends PropsWithChildren, IComponent {
  onClick?: () => void
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
      className,
      children,
      onClick,
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
        type="button"
        ref={ref}
        onClick={onClick}
        disabled={isLoading || disabled}
      >
        {prefixIcon && (
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
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
