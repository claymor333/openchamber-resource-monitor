export const MOBILE_FRAME_NAME = 'openchamber-resource-monitor-mobile';

export const isMobileResourceMonitorFrame = (frameName: string): boolean => frameName === MOBILE_FRAME_NAME;

export type PortPresentation =
  | { kind: 'info'; label: string }
  | { kind: 'link'; label: string; href: string };

export const portPresentation = (port: number, mobileSurface: boolean): PortPresentation => {
  const label = `:${port}`;
  return mobileSurface
    ? { kind: 'info', label }
    : { kind: 'link', label, href: `http://localhost:${port}` };
};
