import { it, describe } from "node:test";
import assert, { deepStrictEqual } from "node:assert";

import "./index";

type Disposable = {
  [Symbol.dispose]: () => void;
};

type TestFunc = (cls: {
  prototype: Disposable;
  from: (arr: Array<number>) => Disposable;
}) => void;

const genCheckTest: TestFunc = (cls) =>
  assert(typeof cls.prototype[Symbol.dispose] === "function");

const genDisposeTest: TestFunc = (cls) => {
  const input = cls.from([1, 2, 3]);
  input[Symbol.dispose]();
  deepStrictEqual(input, cls.from([0, 0, 0]));
};

const typedArrays = [
  Uint8Array,
  Int8Array,
  Uint8ClampedArray,
  Uint16Array,
  Int16Array,
  Uint32Array,
  Int32Array,
  Buffer,
];

describe("nullize", () => {
  it("check dispose function", () => typedArrays.forEach(genCheckTest));
  it("call dispose function", () => typedArrays.forEach(genDisposeTest));
});
