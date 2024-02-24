import { IComponent } from '@/interface/IComponent'
import { cn } from '@/util/cn'
import { ClassValue } from 'clsx'
import { PropsWithChildren, forwardRef } from 'react'

interface ButtonProps extends PropsWithChildren, IComponent {
  onClick?: () => void
}

/**
 * @link https://preline.co/docs/buttons.html
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className: classNames, children, onClick }: ButtonProps, ref) => {
    return (
      <button
        className={cn(
          'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
          classNames
        )}
        type="button"
        ref={ref}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
