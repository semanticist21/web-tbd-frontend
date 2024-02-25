import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'
import Link from 'next/link'
import { ReactNode, forwardRef } from 'react'

interface linkSmallProps extends IComponent {
  href: string
  preDescription?: ReactNode
  content: ReactNode
  preDescriptionClassName?: string
  linkTextClassName?: string
}

const LinkSmall = forwardRef<HTMLParagraphElement, linkSmallProps>(
  (
    {
      id,
      className,
      href,
      preDescription,
      content,
      preDescriptionClassName,
      linkTextClassName,
    }: linkSmallProps,
    ref
  ) => {
    return (
      <div
        className={cn('text-xs mt-2', className)}
        id={id}
        ref={ref}
      >
        <p className={cn('inline-block', preDescriptionClassName)}>
          {preDescription}
        </p>
        <Link href={href}>
          <div
            className={cn(
              'text-blue-500 hover:opacity-75 inline-block',
              linkTextClassName
            )}
          >
            &nbsp; {content}
          </div>
        </Link>
      </div>
    )
  }
)

LinkSmall.displayName = 'LinkSmall'
export default LinkSmall
