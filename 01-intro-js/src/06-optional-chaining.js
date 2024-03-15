const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
    },
    items: [
        {
            roduct: 'Teclado',
            price: 399,
            quantity: 2.
        },
        {
            product: 'Mouse',
            price: 200,
            quantity: 1,
        },
        {
            product: 'paper',
            price: 100,
            quantity: 10,
        },
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola ${this.client.name}`;
    }
};

console.log(invoice.company?.name);
console.log(invoice.client?.addres.street)
if(invoice.company?.name){
    console.log('Perfecto');
} else {
    console.log('No viene la empresa');
}

