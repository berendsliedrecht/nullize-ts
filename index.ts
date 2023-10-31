export {}

// @ts-ignore
Symbol.dispose ??= Symbol("Symbol.dispose")

declare global {
    interface Uint8Array { [Symbol.dispose](): void }
    interface Int8Array { [Symbol.dispose](): void }
    interface Uint8ClampedArray { [Symbol.dispose](): void }
    interface Uint16Array { [Symbol.dispose](): void }
    interface Int16Array { [Symbol.dispose](): void }
    interface Uint32Array { [Symbol.dispose](): void }
    interface Int32Array { [Symbol.dispose](): void }

    interface Buffer { [Symbol.dispose](): void } 
}

Uint8Array.prototype[Symbol.dispose] = function () { this.fill(0) }
Int8Array.prototype[Symbol.dispose] = function () { this.fill(0) }
Uint8ClampedArray.prototype[Symbol.dispose] = function () { this.fill(0) }
Uint16Array.prototype[Symbol.dispose] = function () { this.fill(0) }
Int16Array.prototype[Symbol.dispose] = function () { this.fill(0) }
Uint32Array.prototype[Symbol.dispose] = function () { this.fill(0) }
Int32Array.prototype[Symbol.dispose] = function () { this.fill(0) }

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  Buffer.prototype[Symbol.dispose] = function () { this.fill(0) }
}
