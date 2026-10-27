import { expect, test } from 'bun:test';

import { isMobileResourceMonitorFrame, MOBILE_FRAME_NAME, portPresentation } from './client.ts';
import { PANEL_STYLE } from './style.ts';

test('mobile Resource Monitor ports are information, while other surfaces keep the preview link', () => {
  expect(isMobileResourceMonitorFrame(MOBILE_FRAME_NAME)).toBe(true);
  expect(isMobileResourceMonitorFrame('resource-monitor')).toBe(false);
  expect(portPresentation(5173, true)).toEqual({ kind: 'info', label: ':5173' });
  expect(portPresentation(5173, false)).toEqual({ kind: 'link', label: ':5173', href: 'http://localhost:5173' });
});

test('touch styles keep Stop, Stop all, and expandable rows reachable', () => {
  expect(PANEL_STYLE).toContain('@media (any-pointer: coarse)');
  expect(PANEL_STYLE).toContain('.stop { min-width: 44px; min-height: 44px;');
  expect(PANEL_STYLE).toContain('.job.foldable, .group-head.foldable { min-height: 44px; }');
});
