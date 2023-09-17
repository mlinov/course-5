function cart() {
    const cart = [];
    return {
        addCart(product) {
            if (!product) return;
            const indexProductSku = this.findIndexBySku(product.sku);

            if (indexProductSku !== -1) {
                this.setQty(product.sku, product.qty, indexProductSku);
            } else {
                product.id = Date.now() * ~~(Math.random() * 10);
                cart.push(product);
            }

        },
        findIndexBySku(sku) {
            return cart.map((product) => product.sku).indexOf(sku);
        },
        getCart() {
            return cart.map((product) => ({ ...product }));
        },
        setQty(sku, qty, index) {
            const indexProductSku = index ?? this.findIndexBySku(sku);
            if (indexProductSku !== -1) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + qty;
            }
        },
        getTotalQty() {
            return cart.reduce((totalQty, product) => totalQty + product.qty, 0);
        },
        getTotal() {
            return cart.reduce((totalQty, product) => totalQty + (product.qty * product.price), 0);
        },
        getProductBySku(sku) {
            return cart.find((product) => product.sku === sku);
        },
        removeProductBySku(sku) {
            const indexProductSku = this.findIndexBySku(sku);
            if (indexProductSku !== -1) {
                cart.splice(indexProductSku, 1);
            }
        },
        removeAll() {
            cart.length = 0;
        },
    };
}

const myCart = cart();

myCart.addCart({
    sku: 124,
    name: 'Product 1',
    qty: 5,
    price: 20,
});

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 3,
    price: 15,
})

myCart.addCart({
    sku: 126,
    name: 'Product 3',
    qty: 1,
    price: 10,
})

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 10,
    price: 15,
})

myCart.setQty(124, -2);

console.log(myCart.getCart());

console.log(myCart.getTotal());

console.log(myCart.getProductBySku(125));

myCart.removeProductBySku(125);

myCart.removeAll();

console.log(myCart.getCart());
