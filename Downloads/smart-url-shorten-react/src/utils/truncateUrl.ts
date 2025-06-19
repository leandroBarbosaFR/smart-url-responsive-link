export function truncateUrl(url: string, maxLength = 40): string {
  try {
    const parsed = new URL(url);
    const short = `${parsed.hostname}${parsed.pathname}`;
    return short.length > maxLength ? short.slice(0, maxLength) + "..." : short;
  } catch {
    return url;
  }
}
