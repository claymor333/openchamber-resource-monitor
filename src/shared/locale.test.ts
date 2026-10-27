import { describe, expect, test } from 'bun:test';

import { applyHostLocale, directionForLocale } from './locale.ts';
import { BASE_STYLE, PANEL_STYLE, STATUS_STYLE } from './style.ts';

describe('host locale direction', () => {
  test('mirrors the supported RTL base locales, including language subtags', () => {
    expect(directionForLocale('ar')).toBe('rtl');
    expect(directionForLocale('ar-SA')).toBe('rtl');
    expect(directionForLocale('he')).toBe('rtl');
    expect(directionForLocale('he-IL')).toBe('rtl');
  });

  test('resets the document to LTR when the host switches back to English', () => {
    const root = { lang: '', dir: '' };

    expect(applyHostLocale('ar-SA', root)).toBe('rtl');
    expect(root).toEqual({ lang: 'ar-SA', dir: 'rtl' });

    expect(applyHostLocale('en-US', root)).toBe('ltr');
    expect(root).toEqual({ lang: 'en-US', dir: 'ltr' });
  });
});

describe('panel direction styles', () => {
  test('uses logical indentation, end alignment, and mirrored fold chevrons', () => {
    expect(PANEL_STYLE).toContain('margin-inline-start: 4px');
    expect(PANEL_STYLE).toContain('padding-inline-start: 12px');
    expect(PANEL_STYLE).toContain('border-inline-start: 2px');
    expect(PANEL_STYLE).toContain('text-align: end');
    expect(PANEL_STYLE).toContain('border-inline-start: 4px solid var(--oc-muted)');
    expect(PANEL_STYLE).toContain('transform: rotate(var(--resource-monitor-chevron-open-angle, 90deg))');
    expect(PANEL_STYLE).not.toMatch(/(?:margin|padding|border)-(?:left|right)\s*:/);
  });

  test('keeps time-series charts LTR and anchors status meters to the logical start', () => {
    expect(BASE_STYLE).toContain('.chart { position: relative; width: 100%; overflow: hidden; direction: ltr;');
    expect(STATUS_STYLE).toContain('inset-inline-start: 0');
  });
});
