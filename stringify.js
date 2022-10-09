// JSON => JavaScript Object Notation 
// p:01
const shop = {
    name: 'programmer King',
    address: {
        street: 'kocukhet Vooter goli',
        city:'Dhaka',
        country: 'BD',
    },
    products : ['laptop', 'keyboard', 'mouse', 'all product for programming'],
    isOpen: true,
    isNew : false
}
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);
const shopParse = JSON.parse(shopStringify);
console.log(shopParse);
// p:02
const shop1 = {
    name: 'programmer King',
    address: {
        street: 'kocukhet Vooter goli',
        city:'Dhaka',
        country: 'BD',
    },
    products : ['laptop', 'keyboard', 'mouse', 'all product for programming'],
    isOpen: true,
    isNew : false
}
