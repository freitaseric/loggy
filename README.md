# Loggy

> A simple logging library for Node.js and Bun projects.

This library was created to improve the way you communicate with your console.

## Instalation

```bash
  $ npm install loggy

  $ yarn add loggy

  $ pnpm add loggy

  $ bun add loggy
```

## Utilization

Basic example:
```typescript
import loggy from 'loggy'

//console.log("Hello World!")
loggy.info("Hello World!")
```

Advanced example:
```typescript
import { Loggy } from 'loggy'

const console = new Loggy({
  verbosity: 3,
  pretty: true,
  locale: 'es-es',
})

console.debug("Program crashed!!!")
```

## License

This project is [Apache 2.0 licensed](./LICENSE).