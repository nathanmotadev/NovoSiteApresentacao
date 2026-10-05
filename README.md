# Site de apresentação — Nathan Mota

Site estático (HTML + CSS + JS puro, sem build e sem dependências).

## Estrutura
- `index.html`: conteúdo e marcação
- `css/style.css`: estilos (papel quadriculado, títulos 3D, tira de filme)
- `js/script.js`: lightbox da galeria (setas e Esc funcionam) e arrastar a tira de filme com o mouse
- `assets/`: fontes (Anton, Caveat, Hanken Grotesk) e imagens

## Publicar no GitHub Pages
1. Coloque o conteúdo desta pasta na raiz do repositório (o `index.html` precisa ficar na raiz).
2. No GitHub: Settings → Pages → Source: Deploy from a branch → branch `main` e pasta `/ (root)`.
3. Aguarde alguns minutos e acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Para editar
- Textos: `index.html`. Cores: variáveis `--ink`, `--org`, `--red`, `--pink`, `--sun` em `css/style.css`.
- Os botões "ver o projeto" e "ver o site" (seção Projetos) apontam hoje para github.com/nathanmotadev; troque pelo endereço de cada projeto quando publicar.
