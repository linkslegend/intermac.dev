// Client-safe: no fs/path/gray-matter — safe to import from both server and client code

export type PostCategory = "ENGINEERING" | "PRODUCT" | "FOUNDER" | "INDUSTRY";

export const CATEGORY_COLORS: Record<PostCategory, string> = {
  ENGINEERING: "rgba(251, 191, 36, 0.9)",
  PRODUCT: "rgba(244, 114, 100, 0.9)",
  FOUNDER: "rgba(167, 139, 250, 0.9)",
  INDUSTRY: "rgba(56, 189, 248, 0.9)",
};
