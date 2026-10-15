# Template de landing page multi-cliente

Template de landing page construido com Next.js, React, TypeScript e Tailwind CSS v4. O conteudo da pagina, metadados e paleta de cores sao centralizados em `config/site.ts`.

## Requisitos

- Node.js compativel com a versao de Next.js definida no projeto
- pnpm 12.3.4 (versao declarada em `package.json`)

## Comecar

Instale as dependencias e inicie o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Personalizar o template

Edite `config/site.ts` para adaptar o template a cada cliente. O arquivo contem:

- Identidade, contactos e endereco da empresa
- SEO (`seo.title`, `seo.description` e `seo.keywords`)
- Cores da marca (`colors.primary`, `secondary`, `accent`, `background` e `text`)
- Navegacao, conteudo do hero e estatisticas
- Servicos, informacoes sobre a empresa, testemunhos, perguntas frequentes e CTA
- Conteudo e rotulo da acao do WhatsApp

O objeto e validado pelo schema Zod no proprio `config/site.ts`. Campos obrigatorios, formato do e-mail e chaves de icones sao verificados durante a inicializacao da configuracao.

As cores definidas em `siteConfig.colors` sao injetadas como variaveis CSS em `app/layout.tsx` e mapeadas para classes semanticas no tema Tailwind em `app/globals.css`. Use os tokens `brand-*` nos componentes para manter a paleta configuravel.

O registro enxuto de icones esta em `components/icon-registry.tsx`. As chaves suportadas estao em `siteIconKeys`, no arquivo de configuracao. Ao adicionar um icone, atualize o registro e a lista para manter a validacao sincronizada.

A imagem principal e definida por `siteConfig.hero.backgroundImage`. Coloque o arquivo correspondente dentro de `public/` e indique o caminho publico, por exemplo `/images/hero-legal.png`.

## Estrutura do projeto

```text
app/
  globals.css       # Tailwind v4, tokens de cor e estilos globais
  layout.tsx        # Layout raiz, SEO e injecao das cores
  page.tsx          # Composicao da pagina inicial
components/
  landing.tsx       # Secoes apresentacionais (Server Components)
  landing-interactions.tsx # Menu, testemunhos e FAQ interativos
  icon-registry.tsx # Registro de icones Lucide permitidos
  ui/               # Componentes de interface reutilizaveis
config/
  site.ts           # Dados do cliente, schema Zod e URLs derivadas
public/             # Imagens e outros ficheiros publicos
```

## Verificar e gerar a versao de producao

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

`pnpm build` gera a versao otimizada do Next.js. `pnpm start` inicia essa versao localmente depois do build.

## Tecnologias

- Next.js 16 e React 19
- TypeScript
- Tailwind CSS v4
- Zod
- Lucide React
- Vercel Analytics (carregado em producao)
