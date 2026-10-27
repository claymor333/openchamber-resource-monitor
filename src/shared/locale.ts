export type TextDirection = 'ltr' | 'rtl';

const RTL_LANGUAGE_SUBTAGS: ReadonlySet<string> = new Set(['ar', 'he']);

/** Keep this in sync with OpenChamber's supported RTL base locales. */
export const directionForLocale = (locale: string): TextDirection => {
  const language = locale.trim().split(/[-_]/, 1)[0]?.toLowerCase() ?? '';
  return RTL_LANGUAGE_SUBTAGS.has(language) ? 'rtl' : 'ltr';
};

/** Apply both language metadata and layout direction whenever the host locale changes. */
export const applyHostLocale = (
  locale: string,
  root: Pick<HTMLElement, 'lang' | 'dir'>,
): TextDirection => {
  root.lang = locale;
  const direction = directionForLocale(locale);
  root.dir = direction;
  return direction;
};
