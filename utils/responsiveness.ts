import { CONFIG } from "@/config/config";

type BreakpointName = keyof typeof CONFIG.breakpoints;

/**
 * Returns the current breakpoint name based on window width.
 * Safe to call only on the client (inside useEffect or event handlers).
 */
export function getCurrentBreakpoint(): BreakpointName {
  const width = window.innerWidth;
  const { mobile, tablet, desktop } = CONFIG.breakpoints;

  if (width < tablet) return "mobile";
  if (width < desktop) return "tablet";
  if (width < CONFIG.breakpoints.large) return "desktop";
  return "large";
}

/**
 * Returns true when the viewport is at or below the given breakpoint.
 */
export function isAtMost(breakpoint: BreakpointName): boolean {
  return window.innerWidth <= CONFIG.breakpoints[breakpoint];
}

/**
 * Returns true when the viewport is at or above the given breakpoint.
 */
export function isAtLeast(breakpoint: BreakpointName): boolean {
  return window.innerWidth >= CONFIG.breakpoints[breakpoint];
}
