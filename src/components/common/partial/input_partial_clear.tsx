import { forwardRef } from 'react'
import { AiTwotoneCloseCircle } from 'react-icons/ai'

interface InputPartialClearProps {
  name?: string
  onClear?: (name?: string) => void
  visible?: boolean
}

const InputPartialClearButton = forwardRef<
  HTMLButtonElement,
  InputPartialClearProps
>(({ name, onClear, visible }, ref) => {
  if (!visible) return false

  return (
    <button
      className="absolute end-1 top-4 flex items-center peer-disabled:hidden hover:opacity-50 opacity-80 rounded-full"
      ref={ref}
      tabIndex={-1}
      onClick={() => onClear?.(name)}
    >
      <AiTwotoneCloseCircle />
    </button>
  )
})

InputPartialClearButton.displayName = 'InputPartialClear'
export default InputPartialClearButton
