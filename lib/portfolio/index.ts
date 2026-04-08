// lib/portfolio/index.ts
// Barrel export for the portfolio domain module.
// Consumers only need: import { getPortfolioItems } from "@/lib/portfolio"

export type { PortfolioItem, PortfolioCategory } from "./portfolioTypes";
export { isPortfolioItem } from "./portfolioTypes";
export type { PortfolioReader } from "./portfolioRepository";
export {
  getPortfolioItems,
  getFeaturedPortfolioItems,
  getPortfolioItemsByCategory,
  getPortfolioItemBySlug,
} from "./portfolioService";
