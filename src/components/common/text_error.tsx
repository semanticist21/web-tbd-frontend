import { IComponent } from '@/interface/i_component'
import { cn } from '@/util/cn'

interface TextErrorProps extends IComponent {
  errMsg?: string
}

const TextError = ({ className, id, errMsg }: TextErrorProps) => {
  return (
    <p
      className={cn(
        'text-red-500 text-xs text-center mt-2 font-semibold',
        errMsg ? 'block' : 'hidden',
        className
      )}
      id={id}
    >
      {errMsg}
    </p>
  )
}

export default TextError
