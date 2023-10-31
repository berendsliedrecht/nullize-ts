# Nullize

Inspired by [zeroize](https://github.com/RustCrypto/utils/tree/master/zeroize), but dumb.

> NOTE: this library has not been properly tested and should be seen as an experiment
> Only works with TypeScript ~5.2.2

A simple library that enables zeroing out memory when the Garbage Collector cleans it up.

## Usage

```typescript
import "nullize";

{
    using privateKey = Uint8Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    // privateKey is defined
    // ...
    // GC cleanup time
}

// Memory of privateKey is `[0,0,0,0,0,0,0,0,0,0]`
```
