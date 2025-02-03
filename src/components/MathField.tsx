import { useEffect, useRef } from 'react'
import { MathfieldElement } from 'mathlive'

interface MathFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function MathField({ value, onChange, placeholder }: MathFieldProps) {
  const mathFieldRef = useRef<MathfieldElement | null>(null)

  useEffect(() => {
    if (!mathFieldRef.current) {
      const mathField = new MathfieldElement()
      mathField.value = value
      mathField.placeholder = placeholder || 'Enter your math solution...'
      
      // Apply styles
      mathField.style.width = '100%'
      mathField.style.minHeight = '200px'
      mathField.style.padding = '1rem'
      mathField.style.border = 'none'
      mathField.style.outline = 'none'
      mathField.style.fontSize = '1.125rem'
      mathField.style.backgroundColor = 'transparent'
      
      mathField.addEventListener('input', () => {
        onChange(mathField.value)
      })

      const container = document.getElementById('math-field-container')
      if (container) {
        container.appendChild(mathField)
        mathFieldRef.current = mathField
      }
    }

    return () => {
      mathFieldRef.current?.remove()
    }
  }, [])

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