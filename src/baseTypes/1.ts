// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
type age = number;
type name = string;
type toggle = boolean;
type empty = null;
type notInitialize = undefined;

let age: age = 50;
let name: name = 'Max';
let toggle: toggle = true;
let empty: empty = null;
let notInitialize: notInitialize;
let callback = (a: number): number => { return 100 + a };

const result = callback(100);

export {};
