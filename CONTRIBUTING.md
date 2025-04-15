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

Create the main hook in `registry/hooks/use-example-hook`

```typescript
import React from 'react';

export function useExampleHook() {
  const [dummyState, setDummyState] = useState('dummy');

  return [dummy, setDummyState];
}
```
