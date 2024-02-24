import { IComponent } from '@/interface/IComponent'
import { cn } from '@/util/cn'
import Link from 'next/link'
import { forwardRef } from 'react'

interface linkSmallProps extends IComponent {
  href: string
  preDescription?: string
  content: string
}

const LinkSmall = forwardRef<HTMLParagraphElement, linkSmallProps>(
  ({ className, href, preDescription, content }: linkSmallProps, ref) => {
    return (
      <p className={cn('text-xs mt-2', className)}>
        <span>{preDescription}</span>
        <Link href={href}>
          <span className="text-blue-500 hover:opacity-75">
            &nbsp; {content}
          </span>
        </Link>
      </p>
    )
  }
)

LinkSmall.displayName = 'LinkSmall'
export default LinkSmall
