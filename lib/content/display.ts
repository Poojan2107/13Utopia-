/** Strip CMS placeholder markers from UI-facing strings */
const PLACEHOLDER_RE =
  /^\[(CONTENT NEEDED|FOUNDER INPUT REQUIRED|FOUNDER STORY REQUIRED|VERIFIED METRIC REQUIRED)\]\s*/i;

export function isPlaceholderText(value: string | undefined | null): boolean {
  if (!value) return true;
  return PLACEHOLDER_RE.test(value.trim()) || value.trim() === "[CONTENT NEEDED]";
}

export function displayText(
  value: string | undefined | null,
  fallback = "",
): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (isPlaceholderText(trimmed)) {
    const rest = trimmed.replace(PLACEHOLDER_RE, "").trim();
    return rest || fallback;
  }
  return trimmed;
}

export function displayOrHide(value: string | undefined | null): string | null {
  const text = displayText(value, "");
  return text || null;
}
