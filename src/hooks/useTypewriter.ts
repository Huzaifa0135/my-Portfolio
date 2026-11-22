import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

export function useTypewriter(
  words: string[],
  { typeSpeed = 75, deleteSpeed = 42, pauseMs = 1500 }: UseTypewriterOptions = {}
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && displayText === currentWord) {
      delay = pauseMs;
    } else if (isDeleting && displayText === '') {
      delay = 280;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const nextLength = isDeleting
        ? displayText.length - 1
        : displayText.length + 1;

      setDisplayText(currentWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [words, wordIndex, displayText, isDeleting, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}
