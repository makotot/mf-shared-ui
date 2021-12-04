import React, { forwardRef } from 'react'

type Props = JSX.IntrinsicElements['button'] & {
  variant: 'primary' | 'secondary'
}

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  )
})
