# Contributing to h3/use

Thank you for your interest in contributing to h3/use! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new hook to h3/use.

## Getting Started

Fork and clone the repository.

1. **Fork this repository**  
   Click [here](https://github.com/h3rmel/h3-use/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/h3-use.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd h3-use
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a new Hook

To add a new Hook to h3/use, you will need to modify and add several files. Follow this steps.

### 1. Create Hook

Create the main hook in `registry/hooks/use-example-hook.tsx`

```typescript
import React from 'react';

export function useExampleHook(initialState: string) {
  const [dummyState, setDummyState] = React.useState(initialState);

  return [dummyState, setDummyState];
}
```

### 2. Create Hook Demo

Provide a basic example to showcase your hook in `registry/example/use-example.hook.tsx`

```typescript
import { useExampleHook } from '@registry/hooks/use-example-hook';

export function useExampleHookDemo() {
  const { dummyState, handleClick } = useExampleHook();

  return (
    <div>
      <p>{dummyState}</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
```

### 3. Update Sidebar

Update the `config/docs.ts` wity your new hook in the correct category.

```typescript
{
  title: 'Example Hook',
  href: '/docs/hooks/use-example-hook',
  items: [],
  label: 'New',
}
```

### 4. Create Docs

Create an MDX file for documenting your component in `content/docs/hooks/use-example-hook.mdx`

````md
---
title: Example Hook
date: 2025-04-23
description: Example hook for h3/use
author: h3rmel
published: true
---

<HookPreview name="use-example-hook-demo" />

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add "https://h3-use.com/r/use-example-hook"
```

```

</TabsContent>
<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<HookSource name="use-example-hook" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Props

| Prop           | Type     | Default | Description                           |
| -------------- | -------- | ------- | ------------------------------------- |
| `initialState` | `string` | `""`    | The initial state of the dummy state. |

```
````

### 5. Update Registry

Export you hook and example in the registry files:

#### In `registry/registry-hooks.ts`:

```typescript
export const hooks: Registry['items'] = [
  // ... existing hooks ...
  {
    name: 'use-example-hook',
    type: 'registry:hook',
    title: 'UseExampleHook',
    description:
      'An hook to explain in step-by-step how to add a hook to h3/use.',
    files: [
      {
        path: 'registry/hooks/use-example-hook.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-example-hook.tsx',
      },
    ],
  },
  // ... existing hooks ...
];
```

#### In `registry/registry-examples.ts`:

````typescript
import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
   // ... existing examples ...
  {
    name: 'use-example-hook-demo',
    type: 'registry:example',
    title: 'UseExampleSize Demo',
    description: "use-example-hook's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-example-hook.json'],
    files: [
      {
        path: 'registry/example/use-example-hook-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-example-hook-demo.tsx',
      },
    ],
  },
     // ... existing examples ...

];

```
````

Make sure to add any necessary dependencies, configurations or other properties as needed for your specific hook.

### 5. Build Registry

```bash
pnpm build:registry
```

### 6. Format and fix linting before committing

```bash
pnpm format:write
```

```bash
pnpm lint:fix
```

Make sure to run these two commands before committing your changes.

## Ask for Help

For any help or questions, please open a new GitHub issue.
