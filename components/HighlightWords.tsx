import React, { HTMLAttributes, ReactNode } from 'react';

interface HighlightWordsProps extends HTMLAttributes<HTMLSpanElement> {
  highlightClassName?: string; // Class for highlighted strings
  highlightWords?: string[]; // List of strings to highlight
}

export default function HighlightWords({
  children,
  highlightClassName = 'text-yellow-200',
  highlightWords = [],
  ...props
}: HighlightWordsProps) {
  // Define a unique key counter to ensure unique keys globally
  let uniqueKey = 0;

  const processText = (text: string): ReactNode[] => {
    const regex = new RegExp(
      `(${highlightWords.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
      'gi' // Global and case-insensitive
    );

    const parts = text.split(regex);

    return parts.map((part) => {
      const isHighlighted = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );

      return isHighlighted ? (
        <span key={`highlight-${uniqueKey++}`} className={highlightClassName}>
          {part}
        </span>
      ) : (
        <span key={`text-${uniqueKey++}`}>{part}</span>
      );
    });
  };

  // Flatten children and process each string child
  const highlightedText = React.Children.toArray(children).flatMap((child) => {
    if (typeof child === 'string') {
      return processText(child);
    }
    return React.cloneElement(child as React.ReactElement, {
      key: `child-${uniqueKey++}`,
    });
  });

  return (
    <span {...props}>
      {highlightedText}
    </span>
  );
}
