// lib/domain/sanity-types.ts
// Tipos TypeScript espelhando os schemas do Sanity.io.
// SRP: cada interface representa um documento Sanity.

export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

/** Schema: servico */
export interface SanityServico {
  _id: string;
  _type: "servico";
  name: string;
  slug: { current: string };
  /** "alisamentos" | "corte-finalizacao" | "coloracao" | "tratamentos" */
  categoria: string;
  descricao: string;
  /** Preço em centavos — null = "sob consulta" */
  preco?: number | null;
  duracaoMinutos?: number;
  imagem?: SanityImageAsset;
  destaque: boolean;
}

/** Schema: produto */
export interface SanityProduto {
  _id: string;
  _type: "produto";
  name: string;
  slug: { current: string };
  descricao: string;
  preco: number;
  imagem?: SanityImageAsset;
}

/** Schema: profissional */
export interface SanityProfissional {
  _id: string;
  _type: "profissional";
  nome: string;
  funcao: string;
  foto?: SanityImageAsset;
  bio?: string;
}
