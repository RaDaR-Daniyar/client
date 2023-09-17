import { makeAutoObservable } from 'mobx'

class BasketStore {
    _products = []

    constructor() {
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }

    get count() {

        const productCount = this._products.reduce((sum, item) => sum + item.quantity, 0);

        return productCount;
    }

    get sum() {
        return this._products.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

    set products(products) {
        this._products = products;

    }
}

export default BasketStore