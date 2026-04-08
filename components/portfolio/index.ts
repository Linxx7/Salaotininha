// components/portfolio/index.ts
// Barrel export — consumers import from "@/components/portfolio", not from
// individual files. This shields them from internal restructuring (OCP).

export { PortfolioSection } from "./PortfolioSection";
export { PortfolioCard } from "./PortfolioCard";
