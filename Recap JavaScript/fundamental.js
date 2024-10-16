const products = [
    { name: 'banana', type: 'fruit', quantity: 0, price: 1 },
    { name: 'cucumber', type: 'vegetable', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];



const names = products.map((product) => {
    return product.name;
}); 

console.log(names);

const prices = products.map((product) => {
    return product.price;
});

console.log(prices);

products.forEach((product) => {
    console.log(product.name);
});

const cheap = products.filter(product => product.price <= 5);
const specificName = products.filter(p => p.name.includes('c'));
console.log(specificName);
const specific = products.find(p => p.name.includes('c'));
console.log(specific);