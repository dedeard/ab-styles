import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export function createEmotionCache(key: string = 'ab-styles') {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key, insertionPoint });
}
