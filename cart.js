'use strict';

function Cart(array = []) {
    (this.goods = array),
    (this.totalPrice = 0),
    (this.count = 0);
}

Cart.prototype.calculateGoodsPrice = function (arr) {
    const sum = arr.reduce((acc, num) => acc + num);
    this.totalPrice = sum;
};

Cart.prototype.increaseCount = function (num) {
    this.count = num;
    console.log('countGoods: ', this.count);
};

Cart.prototype.addGoods = function (obj) {
    this.goods.push(obj);
};

Cart.prototype.getTotalPrice = function () {
    return this.totalPrice;
};

Cart.prototype.clear = function () {
    (this.goods = array), (this.totalPrice = 0), (this.count = 0);
};

Cart.prototype.print = function (items = this.goods) {
    let sum = [];
    let num = 0;
    items.forEach((item) => {
        num++;
        sum.push(item.price * item.goodCount);
        console.log('item: ', JSON.stringify(item));
    });

    this.increaseCount(num);
    this.calculateGoodsPrice(sum);
    console.log('TotalPrice: ', this.getTotalPrice());
};

const cart = new Cart();

function Goods(price = 0, title = '', goodCount = 0, discount = 0) {
    (this.price = price),
    (this.title = title),
    (this.goodCount = goodCount),
    (this.discount = discount);
}

const goods = new Goods();

function FoodGoods(price, title, goodCount = 0, discount, calories) {
    Goods.call(this, price, title, goodCount, discount);
    this.calories = calories;
}

const foodGoods = new FoodGoods(100, 'Apple', 20, 30, 150);
cart.addGoods(foodGoods);

function СlothingGoods(price, title, goodCount = 0, discount, material) {
    Goods.call(this, price, title, goodCount, discount);
    this.material = material;
}

const clothingGoods = new СlothingGoods(10000, 'Coat', 3, 50, 'cashmere');
cart.addGoods(clothingGoods);

function TechnicsGoods(price, title, goodCount = 0, discount, typeTechnics) {
    Goods.call(this, price, title, goodCount, discount);
    this.typeTechnics = typeTechnics;
}

const technicsGoods = new TechnicsGoods(30000, 'Laptop', 1, 40, 'iron');
cart.addGoods(technicsGoods);

cart.print();