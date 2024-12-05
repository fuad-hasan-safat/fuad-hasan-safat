import React, { HTMLAttributes, ReactNode } from 'react';

interface HighlightWordsProps extends HTMLAttributes<HTMLSpanElement> {
  highlightClassName?: string; // Class for highlighted words
  highlightWords?: string[]; // List of words to highlight
}

export default function HighlightWords({
  children,
  highlightClassName = 'text-yellow-200',
  highlightWords = [],
  ...props
}: HighlightWordsProps) {
  // Normalize highlightWords to lowercase for case-insensitive comparison
  const normalizedHighlightWords = highlightWords.map((word) => word.toLowerCase());

  // Global counter to ensure unique keys
  let keyCounter = 0;

  // Process children into manageable chunks of words and ReactNodes
  const processWords = (text: string): ReactNode[] => {
    const regex = /(\b[\w'-]+\b|[^\w\s])/g; // Match words and punctuation
    const splitText = text.match(regex) || [];

    return splitText.map((word) => {
      const normalizedWord = word.toLowerCase().replace(/[^\w'-]/g, ''); // Remove punctuation for matching
      const isHighlighted = normalizedHighlightWords.includes(normalizedWord);

      return (
        <span
          key={`${keyCounter++}`} // Unique key using a global counter
          className={isHighlighted ? highlightClassName : undefined}
        >
          {word}
        </span>
      );
    });
  };

  const highlightedText = React.Children.toArray(children).flatMap((child) => {
    if (typeof child === 'string') {
      return processWords(child);
    }
    return <React.Fragment key={keyCounter++}>{child}</React.Fragment>; // Ensure unique keys for ReactNodes
  });

  return (
    <span {...props}>
      {highlightedText.reduce<ReactNode[]>((prev, curr) => (prev.length ? [...prev, ' ', curr] : [curr]), [])}
    </span>
  );
}
