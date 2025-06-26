# Plano de Implementação para use-better-auth

Este documento descreve as etapas para completar e padronizar a implementação do hook `use-better-auth`, seguindo o padrão de qualidade dos outros hooks do projeto.

## Análise do Hook Atual

O hook `use-better-auth` já possui uma implementação robusta com:

- ✅ Generics bem definidos (`<TUser, TCredentials>`)
- ✅ Interfaces completas (`UseBetterAuthReturn`, `UseBetterAuthOptions`, `BetterAuthResponse`)
- ✅ Callbacks memoizados com `useCallback`
- ✅ Storage customizável (localStorage por padrão)
- ✅ Fetcher customizável para diferentes APIs
- ✅ Funcionalidades avançadas (refresh automático, logout com API call)
- ✅ Tratamento de SSR (verificação de `window`)
- ⚠️ JSDoc ausente
- ⚠️ Sem registro no sistema de hooks
- ⚠️ Sem exemplo de uso
- ⚠️ Sem documentação

## Etapas de Melhoria

1. **Melhorar o hook** em `registry/hooks/use-better-auth.tsx`

   - ✅ Generics já implementados
   - ✅ Callbacks já memoizados
   - ➕ Adicionar JSDoc completo com exemplos de uso e detalhes da API
   - ➕ Adicionar debug logging em desenvolvimento
   - ➕ Melhorar tratamento de erros com tipos específicos

2. **Registrar o hook** em `registry/registry-hooks.ts`

   - Adicionar item `use-better-auth` com descrição destacando funcionalidades (storage customizável, fetcher customizável, refresh automático, suporte a diferentes APIs)

3. **Criar exemplo** em `registry/example/use-better-auth-demo.tsx`

   - Construir demo com login/logout personalizado
   - Exibir informações do usuário e token
   - Demonstrar refresh manual e automático
   - Mostrar storage customizado (localStorage vs sessionStorage)
   - Demonstrar fetcher customizado
   - Mostrar tratamento de erros com feedback visual
   - Usar `toast` para feedback de ações

4. **Registrar o exemplo** em `registry/registry-examples.ts`

   - Adicionar item `use-better-auth-demo` com `registryDependencies` adequadas (card, button, badge, avatar, input, sonner e JSON do hook)
   - Apontar `files` de `registry/example/use-better-auth-demo.tsx` para `components/example/use-better-auth-demo.tsx`

5. **Criar documentação** em `content/docs/hooks/use-better-auth.mdx`

   - Incluir `<HookPreview name="use-better-auth-demo" />`
   - Adicionar seção **Installation** (CLI e manual)
   - Documentar seções **Props** e **Data** com tabelas detalhadas
   - Documentar `UseBetterAuthOptions` (storageKey, storage, loginUrl, refreshUrl, logoutUrl, refreshInterval, onAuthChange, fetcher)
   - Documentar `UseBetterAuthReturn` (token, user, loading, error, isAuthenticated, login, logout, refresh, updateUser, clearError)
   - Documentar interfaces auxiliares (`BetterAuthResponse`, `StorageLike`, `DefaultCredentials`)
   - Adicionar seções **Key Features & Details** e **Common Use Cases**
   - Incluir exemplos: básico, com storage customizado, com fetcher customizado, com refresh automático, tratamento de erros
   - Adicionar seção **Related** com links para Better Auth e outras bibliotecas de autenticação

6. **Executar builds** para verificar todas as alterações:

```bash
pnpm build:registry
pnpm build:docs
```

## Funcionalidades Únicas do Hook

- **Storage Customizável**: Suporte a localStorage, sessionStorage ou implementação customizada
- **Fetcher Customizável**: Permite customizar como as requisições de autenticação são feitas
- **Refresh Automático**: Refresh automático do token em intervalos configuráveis
- **Logout com API**: Suporte a logout com chamada para API
- **Update User**: Função para atualizar dados do usuário mantendo a sessão
- **Error Handling**: Tratamento robusto de erros com clear error
- **SSR Safe**: Verificação de ambiente para compatibilidade com SSR
- **Type Safety**: Generics para tipagem customizada de usuário e credenciais
- **Event Callbacks**: Callback para mudanças no estado de autenticação

## Status: ✅ COMPLETO

Etapas implementadas:

- ✅ Adicionar JSDoc completo ao hook
- ✅ Adicionar debug logging
- ✅ Registrar hook no sistema
- ✅ Criar demo interativo completo
- ✅ Registrar exemplo no registry
- ✅ Criar documentação completa
- ⏳ Executar builds de validação
