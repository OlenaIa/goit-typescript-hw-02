// Завдання 2
// Використовуючи TS, створіть наступну функцію, яка розраховує вартість
// морозива: Магазин пропонує 2 розміри морозива:
// • Маленький стаканчик (10грн)
// • Великий стаканчик (25грн)
// • Морозиво доповнюється однією або декількома начинками (мінімум – однією):
// -шоколад (+5грн)
// -карамель (+6грн)
// -ягоди (+10грн)
//  Додатково морозиво (не обов'язково) можна посипати маршмелоу (+5грн).
// Вхідні параметри користувач вводить через prompt.

enum SizePrice {
    Small = 10,
    Big = 25
};

enum TastePrice {
    Chocolate = 5,
    Caramel = 6,
    Berry = 10,
    Marshmallow = 5
}

type IceCreamChoose = string;

const size: IceCreamChoose = prompt('Сhoose an ice-cream size: "s" - small or "b" - big', 's')?.toLowerCase() || 's';
let sizePrice: SizePrice;
switch (size) {
    case 's':
        console.log('Small ice-cream');
        sizePrice = SizePrice.Small;
        break;
    case 'b':
        console.log('Big ice-cream');
        sizePrice = SizePrice.Big;
        break;
    default:
        break;
};
console.log(`You choose ${size} = ${sizePrice}hrn`);

const adds: IceCreamChoose = prompt('Сhoose one or more ice-cream adds: "ch" - Chocolate + "c" - Caramel + "b" - Berry', 'b')?.toLowerCase() || 'b';
const addsArr: string[] = adds?.split('+') || [];
console.log(`You add ${addsArr.join(' and ')}`);

const addsPrice: TastePrice[] = [];
for (let index = 0; index < addsArr.length; index++) {
    switch (addsArr[index]) { 
    case 'ch':
        console.log('Add chocolate');
        addsPrice.push(TastePrice.Chocolate);
    break;
    case 'c':
        console.log('Add caramel');
        addsPrice.push(TastePrice.Caramel);
    break;
    case 'b':
        console.log('Add berry');
        addsPrice.push(TastePrice.Berry);
    break;
    default:
    break;
};
};
console.log(`Adds price = ${addsPrice.join('+')}`);

const addMarshmallow: IceCreamChoose = prompt('Add Marshmallow?: "yes" or "no"', 'no')?.toLowerCase() || 'no';
addMarshmallow === 'yes' && addsPrice.push(TastePrice.Marshmallow);

console.log(`Do you add Marshmallow? ${addMarshmallow}`);


function iceCreamCost(sizePrice: SizePrice, addsPrice: TastePrice[]): number {
    return sizePrice + addsPrice.reduce((sumAdds, item)=> sumAdds += item, 0)
};

alert(`You choose ${size} = ${sizePrice}hrn. You add ${addsArr.join(' and ')}. Marshmallow? ${addMarshmallow}. Your Ice-cream cost ${iceCreamCost(sizePrice, addsPrice)}`);

