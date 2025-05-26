# Plano de Implementação: CLI para Gerenciamento de Componentes UI

## Análise Detalhada do @shadcn CLI

### Visão Geral

O @shadcn é uma CLI sofisticada para gerenciamento de componentes UI que permite:

- Inicializar projetos com configurações padrão (`init`)
- Adicionar componentes individuais ou múltiplos (`add`)
- Comparar diferenças entre versões (`diff`)
- Migrar componentes entre versões (`migrate`)
- Exibir informações do projeto (`info`)
- Construir componentes (`build`)

### Arquitetura Principal

#### 1. **Estrutura de Arquivos**

```
src/
├── index.ts              # Ponto de entrada da CLI
├── commands/              # Comandos principais
│   ├── init.ts           # Inicialização de projetos
│   ├── add.ts            # Adição de componentes
│   ├── diff.ts           # Comparação de versões
│   ├── migrate.ts        # Migração de componentes
│   ├── info.ts           # Informações do projeto
│   └── build.ts          # Build de componentes
├── registry/             # Sistema de registry
│   ├── api.ts           # API para acessar registry
│   ├── schema.ts        # Schemas de validação
│   └── index.ts         # Exports públicos
├── utils/               # Utilitários
│   ├── get-config.ts    # Gerenciamento de configuração
│   ├── add-components.ts # Lógica de adição de componentes
│   ├── get-project-info.ts # Detecção de projetos
│   ├── transformers/    # Transformadores de código
│   └── updaters/        # Atualizadores de arquivos
├── preflights/          # Validações pré-execução
└── migrations/          # Scripts de migração
```

#### 2. **Tecnologias Utilizadas**

- **Commander.js**: Framework para CLI
- **Zod**: Validação de schemas
- **ts-morph**: Manipulação de AST TypeScript
- **cosmiconfig**: Configuração flexível
- **prompts**: Interação com usuário
- **ora**: Spinners de carregamento
- **fast-glob**: Busca de arquivos
- **node-fetch**: Requisições HTTP
- **recast**: Transformação de código

#### 3. **Sistema de Registry**

- Registry remoto centralizado (JSON APIs)
- Cache local para performance
- Sistema de dependências entre componentes
- Suporte a múltiplos estilos/temas
- Versionamento de componentes

#### 4. **Configuração (components.json)**

```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

---

## Plano de Implementação: CLI Personalizada

### Fase 1: Fundação e Estrutura Base (Semana 1-2)

#### 1.1 **Setup Inicial do Projeto**

- [ ] Criar estrutura de diretórios
- [ ] Configurar TypeScript + tsup para build
- [ ] Setup ESLint + Prettier
- [ ] Configurar testes com Vitest
- [ ] Configurar CI/CD básico

#### 1.2 **CLI Framework Base**

- [ ] Implementar ponto de entrada (`src/index.ts`)
- [ ] Configurar Commander.js
- [ ] Criar sistema de logging (`utils/logger.ts`)
- [ ] Implementar spinner de carregamento (`utils/spinner.ts`)
- [ ] Sistema de tratamento de erros (`utils/handle-error.ts`)

#### 1.3 **Sistema de Configuração**

- [ ] Schema de configuração com Zod (`schemas/config.ts`)
- [ ] Leitor de configuração (`utils/get-config.ts`)
- [ ] Resolver paths de aliases
- [ ] Suporte a TypeScript/JavaScript
- [ ] Detecção automática de framework

### Fase 2: Registry e API (Semana 3-4)

#### 2.1 **Sistema de Registry**

- [ ] Definir schemas do registry (`registry/schema.ts`)
- [ ] API client para registry (`registry/api.ts`)
- [ ] Sistema de cache local
- [ ] Resolução de dependências entre componentes
- [ ] Suporte a URLs personalizadas

#### 2.2 **Estrutura de Componentes**

- [ ] Schema para tipos de componentes:
  - `registry:component` - Componentes UI
  - `registry:hook` - Custom hooks
  - `registry:util` - Utilitários
  - `registry:theme` - Temas/estilos
  - `registry:block` - Blocos de código
- [ ] Metadados (dependências, versão, autor)
- [ ] Suporte a múltiplos arquivos por componente

#### 2.3 **Registry Local/Remoto**

- [ ] Implementar servidor registry local (opcional)
- [ ] API endpoints para listagem e busca
- [ ] Sistema de versionamento
- [ ] Validação de componentes

### Fase 3: Comando Init (Semana 5)

#### 3.1 **Detecção de Projetos**

- [ ] Detector de frameworks (`utils/detect-framework.ts`)
  - Next.js, React, Vue, Svelte, Angular
- [ ] Detecção de package manager (npm, yarn, pnpm, bun)
- [ ] Análise de estrutura de diretórios
- [ ] Detecção de TypeScript/JavaScript

#### 3.2 **Comando Init**

- [ ] Prompts interativos para configuração
- [ ] Geração de `components.json`
- [ ] Setup de dependências base
- [ ] Configuração de Tailwind CSS
- [ ] Criação de utilitários base (cn function)
- [ ] Setup de CSS variables

#### 3.3 **Templates de Projeto**

- [ ] Template Next.js
- [ ] Template React + Vite
- [ ] Template Vue + Vite
- [ ] Monorepo templates

### Fase 4: Comando Add (Semana 6-7)

#### 4.1 **Resolução de Componentes**

- [ ] Busca no registry
- [ ] Resolução de dependências
- [ ] Validação de compatibilidade
- [ ] Preview de mudanças

#### 4.2 **Instalação de Componentes**

- [ ] Download de arquivos
- [ ] Transformação de código (imports, paths)
- [ ] Instalação de dependências NPM
- [ ] Atualização de arquivos CSS
- [ ] Merge de configurações Tailwind

#### 4.3 **Updaters Especializados**

- [ ] `updaters/update-files.ts` - Criação/atualização de arquivos
- [ ] `updaters/update-dependencies.ts` - Gerenciamento de deps
- [ ] `updaters/update-tailwind.ts` - Config Tailwind
- [ ] `updaters/update-css-vars.ts` - Variáveis CSS
- [ ] `updaters/update-imports.ts` - Ajuste de imports

### Fase 5: Transformadores de Código (Semana 8)

#### 5.1 **AST Transformers**

- [ ] Transformer para imports (`transformers/transform-import.ts`)
- [ ] Transformer para TypeScript/JavaScript
- [ ] Transformer para paths aliases
- [ ] Transformer para JSX/TSX

#### 5.2 **Code Generation**

- [ ] Templates para diferentes frameworks
- [ ] Geração de tipos TypeScript
- [ ] Geração de exports/re-exports
- [ ] Formatação automática

### Fase 6: Comandos Avançados (Semana 9-10)

#### 6.1 **Comando Diff**

- [ ] Comparação entre versões
- [ ] Diff visual no terminal
- [ ] Aplicação seletiva de mudanças

#### 6.2 **Comando Update**

- [ ] Detecção de componentes desatualizados
- [ ] Update automático/manual
- [ ] Backup antes de updates
- [ ] Changelog integration

#### 6.3 **Comando Remove**

- [ ] Remoção segura de componentes
- [ ] Análise de dependências
- [ ] Cleanup de arquivos não utilizados

#### 6.4 **Comando List**

- [ ] Listagem de componentes instalados
- [ ] Listagem de componentes disponíveis
- [ ] Status de updates
- [ ] Filtros e busca

### Fase 7: Workspace e Monorepo (Semana 11)

#### 7.1 **Suporte a Monorepos**

- [ ] Detecção de workspace
- [ ] Configuração por package
- [ ] Shared components
- [ ] Resolução de paths complexos

#### 7.2 **Multi-framework Support**

- [ ] Adaptação automática por framework
- [ ] Templates específicos
- [ ] Transformações personalizadas

### Fase 8: Qualidade e Performance (Semana 12)

#### 8.1 **Testes Abrangentes**

- [ ] Testes unitários (90%+ coverage)
- [ ] Testes de integração
- [ ] Testes E2E com projetos reais
- [ ] Performance benchmarks

#### 8.2 **DevEx Improvements**

- [ ] Progress bars detalhados
- [ ] Mensagens de erro claras
- [ ] Documentação inline
- [ ] Autocompletion

#### 8.3 **Performance**

- [ ] Cache inteligente
- [ ] Paralelização de operações
- [ ] Lazy loading de módulos
- [ ] Otimização de network requests

### Fase 9: Extensibilidade (Semana 13-14)

#### 9.1 **Plugin System**

- [ ] API para plugins
- [ ] Hooks de lifecycle
- [ ] Custom transformers
- [ ] Registry privados

#### 9.2 **Custom Registries**

- [ ] Suporte a múltiplos registries
- [ ] Registry privados
- [ ] Autenticação
- [ ] Mirroring

### Fase 10: Documentação e Deploy (Semana 15-16)

#### 10.1 **Documentação**

- [ ] README detalhado
- [ ] API documentation
- [ ] Guias de uso
- [ ] Exemplos práticos
- [ ] Migration guides

#### 10.2 **Distribuição**

- [ ] NPM package
- [ ] Binários standalone
- [ ] Docker images
- [ ] CI/CD automático

---

## Tecnologias e Dependências Recomendadas

### Core Dependencies

```json
{
  "commander": "^11.0.0",
  "zod": "^3.22.0",
  "cosmiconfig": "^8.3.0",
  "prompts": "^2.4.2",
  "ora": "^7.0.0",
  "kleur": "^4.1.5",
  "node-fetch": "^3.3.0",
  "fast-glob": "^3.3.0",
  "fs-extra": "^11.1.0",
  "execa": "^8.0.0"
}
```

### Code Transformation

```json
{
  "ts-morph": "^20.0.0",
  "recast": "^0.23.0",
  "@babel/parser": "^7.23.0",
  "@babel/traverse": "^7.23.0",
  "@babel/generator": "^7.23.0"
}
```

### Development

```json
{
  "typescript": "^5.2.0",
  "tsup": "^7.2.0",
  "vitest": "^0.34.0",
  "eslint": "^8.50.0",
  "prettier": "^3.0.0"
}
```

---

## Estrutura Final do Projeto

```
my-ui-cli/
├── src/
│   ├── index.ts                 # Entry point
│   ├── commands/                # CLI commands
│   │   ├── init.ts
│   │   ├── add.ts
│   │   ├── remove.ts
│   │   ├── update.ts
│   │   ├── list.ts
│   │   └── diff.ts
│   ├── registry/                # Registry system
│   │   ├── api.ts
│   │   ├── schema.ts
│   │   ├── cache.ts
│   │   └── index.ts
│   ├── utils/                   # Utilities
│   │   ├── config.ts
│   │   ├── project-info.ts
│   │   ├── logger.ts
│   │   ├── spinner.ts
│   │   └── errors.ts
│   ├── transformers/            # Code transformers
│   │   ├── imports.ts
│   │   ├── paths.ts
│   │   └── framework.ts
│   ├── updaters/                # File updaters
│   │   ├── files.ts
│   │   ├── dependencies.ts
│   │   ├── tailwind.ts
│   │   └── css.ts
│   └── templates/               # Project templates
├── tests/                       # Test suites
├── docs/                        # Documentation
├── examples/                    # Usage examples
└── registry/                    # Local registry (optional)
```

---

## Considerações de Implementação

### 1. **Arquitetura Modular**

- Cada comando deve ser independente
- Utilitários reutilizáveis
- Sistema de plugins extensível

### 2. **Error Handling Robusto**

- Validação em todas as etapas
- Rollback em caso de falha
- Mensagens de erro claras

### 3. **Performance**

- Cache agressivo
- Operações paralelas
- Lazy loading

### 4. **Compatibilidade**

- Múltiplos frameworks
- Diferentes estruturas de projeto
- Backward compatibility

### 5. **User Experience**

- Feedback constante ao usuário
- Prompts intuitivos
- Documentação inline

---

Este plano fornece um roadmap completo para implementação de uma CLI robusta e extensível nos moldes da shadcn CLI, adaptada para necessidades específicas e com foco em qualidade, performance e experiência do desenvolvedor.
