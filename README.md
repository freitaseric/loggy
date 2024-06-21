# MightLog

> A simple logging library for Node.js and Bun projects.

This library was created to improve the way you communicate with your console.

## Instalation

```bash
  $ npm install might-log

  $ yarn add might-log

  $ pnpm add might-log

  $ bun add might-log
```

## Utilization

Basic example:
```typescript
import might from 'might-log'

//console.log("Hello World!")
might.info("Hello World!")
```

Advanced example:
```typescript
import { MightLogger } from 'might-log'

const console = new MightLogger({
  verbosity: 3,
  pretty: true,
  locale: 'es-es',
})

console.debug("Program crashed!!!")
```

## License

This project is [Apache 2.0 licensed](./LICENSE).