/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type union = string | number;
type literal = 'enable' | 'disable';

let union: union;
union = 'string';
union = 20;

let literal: literal;
literal = 'enable';
literal = 'disable';

// Second version

enum Literal1 {
  enable = 'enable',
  disable = 'disable'
};

let literal1: Literal1 = Literal1.disable;

