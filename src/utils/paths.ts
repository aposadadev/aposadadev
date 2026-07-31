/**
 * Helper to prepend BASE_URL to static asset paths for GitHub Pages subpath compatibility.
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
