/** Copy placeholders are written as `[like this]` and must be replaced before they count as real content. */
const PLACEHOLDER_PATTERN = /\[[^\]]+\]/

export function hasPlaceholder(text: string): boolean {
  return PLACEHOLDER_PATTERN.test(text)
}
