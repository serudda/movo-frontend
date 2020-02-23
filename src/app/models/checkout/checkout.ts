import { IProductData } from 'app/interfaces/product-data';
import { IDiscountData } from 'app/interfaces/discount-data';

import {
  arrayToObject,
  calculateTotal
} from 'app/utils/utils';

import { bulkDiscount, twoForOneDiscount } from 'app/utils/discount-catalog';

export interface IPricingRules {
  products: Array<IProductData>;
  discounts:Array<IDiscountData>;
}

export interface ITotalObjectKey {
  [key: string]: number;
}


export class Checkout {

  private _scannedProducts: Array<IProductData> = [];
  private _availableProducts: Array<IProductData> = [];
  private _availableDiscounts: Array<IDiscountData> = [];

  private _totalPerProduct: ITotalObjectKey = {};
  private _totalDiscount: ITotalObjectKey = {};
  private _subtotal: number = 0;
  private _total: number = 0;

  static instance: Checkout;

  constructor(pricingRules: IPricingRules) {
    if (!Checkout.instance) {
      this._availableProducts = pricingRules ? pricingRules.products : [];
      this._availableDiscounts = pricingRules ? pricingRules.discounts : [];
      this._totalPerProduct = arrayToObject(this._availableProducts, 'code', 0); 
      this._totalDiscount = arrayToObject(this._availableProducts, 'code', 0);
      Checkout.instance = this;
    }

    return Checkout.instance;
  }

  get availableDiscounts(): Array<IDiscountData> {
    return this._availableDiscounts;
  }

  get availableProducts(): Array<IProductData> {
    return this._availableProducts;
  }

  get scannedProducts(): Array<IProductData> {
    return this._scannedProducts;
  }

  get totalPerProduct(): ITotalObjectKey {
    return this._totalPerProduct;
  }

  get totalDiscount(): ITotalObjectKey {
    return this._totalDiscount;
  }

  public hasDiscounts(productCode: string): boolean {
    return !!(this._availableDiscounts.find((discount) => discount.product_code === productCode));
  }

  public scan(productCode: string): void {
    const product = this._availableProducts.find(product => product.code === productCode);
    if(product) {
      this._scannedProducts = [...this._scannedProducts, product];
    }
  }

  public remove(productCode: string): void {
    const product = this._availableProducts.find(product => product.code === productCode);
    if(product) {
      const idx = this._scannedProducts.indexOf(product);
      if (idx >= 0) { this._scannedProducts.splice(idx, 1); }
    }
  }

  public removeAllProductsByCode(productCode: string): void {
    this._scannedProducts = this._scannedProducts.filter((product) => product.code !== productCode);
  }

  public numberOfScannedProducts(): number {
    return this._scannedProducts.length;
  }
  
  public subtotal(): number {
    this._subtotal = calculateTotal(this._scannedProducts, 'price', 0);
    return this._subtotal;
  }

  public total(): number {
    this._total = this._subtotal - this._sumTotalDiscount();
    return this._total;
  }

  public calculateDiscount(productCode: string) {
    const discount = this._availableDiscounts.find((discount) => discount.product_code === productCode);
    const products = this._scannedProducts.filter((product) => product.code === discount?.product_code);

    this._totalDiscount[productCode] = this._applyDiscount(products, discount as IDiscountData);
  }

  public calculateTotalPerProduct(product: IProductData, amount: number) {
    this._totalPerProduct[product.code] = product.price * amount;
  }

  private _sumTotalDiscount(): number {
    let total = 0;
    for (const key in this._totalDiscount) {
      total = total + this._totalDiscount[key];
    }
    return total;
  }

  private _applyDiscount(products: Array<IProductData>, discount: IDiscountData) {
    switch (discount.tag) {
      case '2x1':
        return twoForOneDiscount(products, discount);
      case 'x3':
        return bulkDiscount(products, discount);
      default:
        return 0;
    }
  }

}