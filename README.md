# Manual do Servidor · UFERSA Angicos

React + TypeScript + Vite, Tailwind CSS e componentes oficiais shadcn/ui. Ícones da biblioteca Lucide; sem SVGs desenhados manualmente.

## Executar

Use Node.js 22 e npm:

```sh
npm ci
npm run dev
```

Abra a URL exibida pelo Vite. O projeto agora precisa do servidor de desenvolvimento; não abra `index.html` diretamente.

## Validar e visualizar a publicação

```sh
npm run build
npm run preview
```

O build verifica TypeScript e gera `dist/`. Caminhos relativos e navegação por hash permitem hospedar em um subdiretório do GitHub Pages.

## GitHub Pages

Em Settings → Pages, selecione **GitHub Actions** como origem. O workflow `.github/workflows/pages.yml` compila e publica a branch `main`; ajuste o nome da branch se necessário. Também pode ser executado manualmente. Repositório: https://github.com/leandromarques-ufersa/manual-do-servidor

Endereço público: https://leandromarques-ufersa.github.io/manual-do-servidor/

## Manutenção

- `src/App.tsx`: telas e navegação por perfil.
- `src/content.ts`: seções e links do rascunho original.
- `src/components/ui/`: componentes instalados pelo CLI oficial shadcn/ui.
- `src/index.css`: Tailwind e tokens de identidade.
- `components.json`: configuração do shadcn/ui; novos componentes com `npx shadcn@latest add nome`.
- `init.md`: histórico de decisões; decisões mais recentes prevalecem.
- `tecnico/Seções`: rascunho original preservado.

Referências: [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite), [shadcn/ui](https://ui.shadcn.com/docs/installation/vite), [Lucide](https://lucide.dev/).
