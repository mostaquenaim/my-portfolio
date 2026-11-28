'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return matches;
}

// True on devices with a mouse/trackpad: cursor-driven effects only make sense there.
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)');
