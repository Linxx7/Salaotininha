// lib/validation/sanitize.ts
// Single Responsibility: input sanitization only

/**
 * Strips HTML tags and trims whitespace from a string.
 * Prevents basic XSS via form inputs.
 */
export function sanitizeString(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/**
 * Recursively sanitizes all string values in an object.
 */
export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T,
): T {
  const result = { ...obj };
  for (const key of Object.keys(result)) {
    const value = result[key];
    if (typeof value === "string") {
      (result as Record<string, unknown>)[key] = sanitizeString(value);
    }
  }
  return result;
}
