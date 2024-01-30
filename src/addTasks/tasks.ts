// Завдання для студентів:

// 1. Створення словника:

// Створіть інтерфейс для словника, де ключем є рядок, а значенням — число.
// Створіть кілька об'єктів цього типу, наприклад, для зберігання кількості товарів різних категорій.
type Dictionary = {
    [key: string]: number
};

const store: Dictionary = {
    milk: 40,
    shirt: 5,
};
const school: Dictionary = {
    desk: 45,
    pen: 60
}

// 2. Словник із змішаними значеннями:

// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число.
// Створіть декілька об'єктів цього типу.

interface Mix {
    [key: string]: number | string
}

const fruit: Mix = {
    banana: 50,
    sort: 'Manana'
};

const pet: Mix = {
    pet: 'dog',
    age: 10
}



// function getPromise(): Promise<(string | number)[]> {
//   return new Promise<(string | number)[]>((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// interface

// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   speed: number;

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   move() {
//     console.log(`Car is moving at ${this.speed} km/h.`);
//   }
// }

// interface Example {
//   mandatoryProp: string;
//   optionalProp?: string;
// }

// interface Example {
//   readonly fixedProp: string;
// }

// interface Parent {
//   prop1: string;
// }

// interface Child extends Parent {
//   prop2: string;
// }

// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.
type User = {
    name: string,
    age: number,
    weight: number,
}

type Refresh = Partial<User>

function change(user:User, newInfo: Refresh): User {
    return {...user, ...newInfo}
}

const John: User = {
    name: 'John',
    age: 5,
    weight: 10
}

const newJohn = change(John, {age: 10})

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

type ArrOfNumbers = number[]

function returnArr(arr: ArrOfNumbers): Readonly<ArrOfNumbers> {
    return arr
}

const arr1: ArrOfNumbers = [1, 2, 3];
const arr2 = returnArr(arr1)

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

type Config = {
    [key: string]: number | string
}

const config: Readonly<Config> = {
    a: 5,
    b: 'afaf'
}

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
type User1 = {
    name: string,
    age: number,
    email: string
}

function returnShort(user: User1): Pick<User1, 'name' | 'email'> {
    return {
        name: user.name,
        email: user.email
    }
};


// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

type Api = {
    a: number,
    b: string,
    c: boolean
}

type Short = Pick<Api, 'b' | 'c'>

const respons: Api = {
    a: 1,
    b: 'f',
    c: true
}

function shortRespons(resp: Api): Short {
    return {
        b: resp.b,
        c: resp.c
    }
};

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

type List = Record<string, string>;

const list: List = {
    man1: 'ron',
    girl1: 'bi'
};

list.man2 = 'bob';

// Задача 2: Мапа з іменами місяців до кількості днів у них.

type Year = Record<string, number>

const year: Year = {
    march: 30,
    may: 28,
};

year.june = 29;

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

type User2 = {
    a: string,
    b: number,
    password: string
}

type privateUser = Omit<User2, 'password'>

const user2: User2 = {
    a: 'f',
    b: 5,
    password: 'fdf'
}

const privatUser2: privateUser = {
    a: 'f',
    b: 5,
};

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.