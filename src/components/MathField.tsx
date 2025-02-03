import { useEffect, useRef } from 'react'
import { MathfieldElement } from 'mathlive'

// Register the MathLive web component
import 'mathlive'

interface MathFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function MathField({ value, onChange, placeholder }: MathFieldProps) {
  const mathFieldRef = useRef<MathfieldElement | null>(null)

  useEffect(() => {
    if (!mathFieldRef.current) {
      // Create the mathfield element
      const mathField = new MathfieldElement()
      
      // Set initial value
      mathField.value = value
      
      // Set attributes
      mathField.setAttribute('virtual-keyboard-mode', 'manual')
      mathField.setAttribute('smart-mode', 'true')
      mathField.setAttribute('smart-fence', 'true')
      mathField.setAttribute('smart-superscript', 'true')
      
      // Apply styles
      mathField.style.width = '100%'
      mathField.style.minHeight = '200px'
      mathField.style.padding = '1rem'
      mathField.style.border = 'none'
      mathField.style.outline = 'none'
      mathField.style.fontSize = '1.125rem'
      mathField.style.backgroundColor = 'transparent'
      
      // Add event listener for changes
      mathField.addEventListener('input', () => {
        onChange(mathField.value)
      })

      // Mount the element
      const container = document.getElementById('math-field-container')
      if (container) {
        container.appendChild(mathField)
        mathFieldRef.current = mathField
      }
    }

    return () => {
      if (mathFieldRef.current) {
        mathFieldRef.current.remove()
      }
    }
  }, [])

  // Update value when prop changes
  useEffect(() => {
    if (mathFieldRef.current && mathFieldRef.current.value !== value) {
      mathFieldRef.current.value = value
    }
  }, [value])

  return (
    <div 
      id="math-field-container" 
      className="w-full min-h-[200px] rounded-lg bg-white"
    />
  )
} 