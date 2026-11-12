# Vaga

Site da Vaga, marcações online para barbearias e restaurantes.

Feito com React 19, Vite 8 e TypeScript. Os estilos usam os tokens do design system Vaga (`src/styles/tokens.css`) e as fontes Inter e Manrope são servidas pelo próprio site, sem pedidos ao Google Fonts.

## Desenvolvimento

```bash
npm install
npm run dev
```

O site abre em http://localhost:5173/vaga/.

## Publicação

Cada push para `main` publica o site no GitHub Pages através do workflow em `.github/workflows/deploy.yml`.

O site fica em `https://duartecpereira.github.io/vaga/`. Se mudares o nome do repositório, muda também o `base` em `vite.config.ts`.

## Estrutura

- `src/components/`: uma secção da página por ficheiro.
- `src/styles/tokens.css`: tokens do design system (cores, letra, espaços, raios, sombras). Gerado, não editar à mão.
- `src/styles/global.css`: base e componentes do design system (`vg-btn`, `vg-card`, `vg-slot`, `vg-tag`).
- `src/styles/sections.css`: layout das secções.

## Por fazer

- Preços e número de colaboradores dos planos (`src/components/Pricing.tsx`).
- Páginas de entrada, registo, privacidade e termos (as ligações ainda são âncoras).
