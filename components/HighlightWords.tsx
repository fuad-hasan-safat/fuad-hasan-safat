import React, { HTMLAttributes } from 'react'

interface HighlightWordsProps extends HTMLAttributes<HTMLSpanElement> {
  highlightClassName?: string;
}

export default function HighlightWords({
  children,
  highlightClassName = 'text-yellow-200',
  ...props
}: HighlightWordsProps) {
  return (
    <span {...props} className={highlightClassName}>
      {children}
    </span>
  )
}
