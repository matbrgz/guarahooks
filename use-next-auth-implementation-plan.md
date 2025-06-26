# Plano de Implementação para use-next-auth

Este documento descreve as etapas para melhorar e completar a implementação do hook `use-next-auth`, seguindo o padrão de qualidade dos outros hooks do projeto.

## Análise do Hook Atual

O hook `use-next-auth` já possui uma implementação robusta com:

- ✅ Generic padrão (`<T extends Session = Session>`)
- ✅ Interfaces bem definidas (`UseNextAuthReturn`, `UseNextAuthOptions`)
- ✅ Callbacks memoizados com `useCallback`
- ✅ JSDoc parcial
- ✅ Tratamento de erros com `onError`
- ✅ Funcionalidades avançadas (refresh automático, session change callbacks)

## Etapas de Melhoria

1. **Melhorar o hook** em `registry/hooks/use-next-auth.tsx`

   - ✅ Generic já implementado
   - ✅ Callbacks já memoizados
   - ➕ Adicionar debug logging de `session` e `status` em `useEffect` (somente em desenvolvimento)
   - ➕ Expandir JSDoc com exemplos de uso e detalhes da API

2. **Atualizar registro** em `registry/registry-hooks.ts`

   - Expandir a descrição do item `use-next-auth` para destacar funcionalidades avançadas (error handling, auto-refresh, session callbacks)

3. **Criar exemplo** em `registry/example/use-next-auth-demo.tsx`

   - Construir demo com login/logout
   - Exibir informações da sessão (user, email, status)
   - Demonstrar refresh manual e callbacks
   - Mostrar tratamento de erros
   - Usar `toast` para feedback de ações

4. **Registrar o exemplo** em `registry/registry-examples.ts`

   - Adicionar item `use-next-auth-demo` com `registryDependencies` adequadas (card, button, badge, avatar, sonner e JSON do hook)
   - Apontar `files` de `registry/example/use-next-auth-demo.tsx` para `components/example/use-next-auth-demo.tsx`

5. **Atualizar documentação** em `content/docs/hooks/use-next-auth.mdx`

   - Inserir `<HookPreview name="use-next-auth-demo" />`
   - Adicionar seção **Installation** (CLI e manual)
   - Preencher seções **Props** e **Data** com tabelas detalhadas
   - Documentar `UseNextAuthOptions` (onSessionChange, refreshInterval, onError)
   - Documentar `UseNextAuthReturn` (session, status, isAuthenticated, signIn, signOut, refresh)
   - Incluir links para documentação oficial do NextAuth (ex.: https://next-auth.js.org/getting-started/introduction)
   - Adicionar seções **Key Features & Details** e **Common Use Cases**
   - Incluir exemplos: básico, com callbacks, com auto-refresh, tratamento de erros
   - Adicionar seção **Related** com links para NextAuth

6. **Executar builds** para verificar todas as alterações:

```bash
pnpm build:registry
pnpm build:docs
```

## Funcionalidades Únicas do Hook

- **Error Handling**: Wrapper seguro para `signIn` e `signOut` com callback de erro
- **Auto Refresh**: Refresh automático da sessão em intervalos configuráveis
- **Session Change Callbacks**: Notificação quando a sessão muda
- **Computed Properties**: `isAuthenticated` para facilitar verificações
- **Type Safety**: Generic para tipagem customizada da sessão

## Status: 🚧 PENDENTE

Etapas a implementar:

- ⏳ Adicionar debug logging ao hook
- ⏳ Melhorar JSDoc com exemplos
- ⏳ Atualizar descrição no registry
- ⏳ Criar demo interativo
- ⏳ Registrar exemplo no registry
- ⏳ Documentação completa
