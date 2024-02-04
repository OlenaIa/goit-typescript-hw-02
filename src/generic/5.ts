/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair <T, V>{
  key: T;
  value: V;
}

const pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };

export {};