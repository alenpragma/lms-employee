export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
  locale?: string
): string {
  if (!date) return "";

  const d = typeof date === "string" ? new Date(date) : date;

  return d.toLocaleDateString(locale || undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

/**
 * Format a date-time string to local date and time
 * @param date - ISO date string or Date object
 * @param options - Intl.DateTimeFormat options
 * @param locale - locale string
 */
export function formatDateTime(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
  locale?: string
): string {
  if (!date) return "";

  const d = typeof date === "string" ? new Date(date) : date;

  return d.toLocaleString(locale || undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    ...options,
  });
}
