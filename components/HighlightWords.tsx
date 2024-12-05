import React, { HTMLAttributes } from 'react'

interface HighlightWordsProps extends HTMLAttributes<HTMLSpanElement> {
  highlightClassName?: string;
  searchWords?: string[];
}

export default function HighlightWords({
  children,
  highlightClassName = 'text-yellow-200',
  searchWords = [],
  ...props
}: HighlightWordsProps) {
  return (
    <span {...props} className={highlightClassName}>
      {children}
    </span>
  )
}
