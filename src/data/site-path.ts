const base = import.meta.env.BASE_URL ?? "/";
const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;

export const sitePath = (path: string) => {
  if (path === "/") {
    return cleanBase ? `${cleanBase}/` : "/";
  }

  return `${cleanBase}${path.startsWith("/") ? path : `/${path}`}`;
};
