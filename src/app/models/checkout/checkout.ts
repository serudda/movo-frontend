import { IProductData } from 'app/interfaces/product-data';
import { IDiscountData } from 'app/interfaces/discount-data';

import { arrayToObject, calculateTotal, getDiscountedPrice, isEven, hasMoreThanThreeEqualElements } from 'app/utils/utils';

export interface IPricingRules {
  products: Array<IProductData>;
  discounts:Array<IDiscountData>;
}


export class Checkout {

  private _scannedProducts: Array<IProductData> = [];
  private _availableProducts: Array<IProductData> = [];
  private _availableDiscounts: Array<IDiscountData> = [];
  private _subtotal: number = 0;
  private _discounted: any;
  private _saleTotal: number = 0;
  private _total: number = 0;

  static instance: Checkout;

  constructor(pricingRules: IPricingRules) {
    if (!Checkout.instance) {
      this._availableProducts = pricingRules ? pricingRules.products : [];
      this._availableDiscounts = pricingRules ? pricingRules.discounts : [];
      this._discounted = arrayToObject(this._availableProducts, 'code', 0);
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

  public scan(productCode: string): void {
    const product = this._availableProducts.find(product => product.code === productCode);
    if(product) {
      this._scannedProducts = [...this._scannedProducts, product];
    }
  }

  public numberOfScannedProducts(): number {
    return this._scannedProducts.length;
  }

  // TODO: Mejorar esta funcion para remover ese juego de if y que sea inmutable
  public remove(productCode: string): void {
    const product = this._availableProducts.find(product => product.code === productCode);
    if(product) {
      const idx = this._scannedProducts.indexOf(product);
      if (idx >= 0) {
        this._scannedProducts.splice(idx, 1);
      }
    }
  }

  public removeAllProductsByCode(productCode: string): void {
    this._scannedProducts = this._scannedProducts.filter((product) => product.code !== productCode);
  }
  
  public subtotal(): number {
    this._subtotal = calculateTotal(this._scannedProducts, 'price', 0);
    return this._subtotal;
  }

  public total(): number {
    this._total = this._subtotal - this._sumDiscounted();
    return this._total;
  }

  // TODO: Mejorar este loop
  private _sumDiscounted(): number {
    let total = 0;
    for (const key in this._discounted) {
      total = total + this._discounted[key];
    }
    return total;
  }

  public hasDiscounts(productCode: string): boolean {
    return !!(this._availableDiscounts.find((discount) => discount.product_code === productCode));
  }

  public calculateDiscountByProductCode(productCode: string) {
    const discount = this._availableDiscounts.find((discount) => discount.product_code === productCode);
    const products = this._scannedProducts.filter((product) => product.code === discount?.product_code);

    this._discounted[productCode] = this._applyDiscount(products, discount as IDiscountData);
    return this._discounted[productCode];
  }

  private _applyDiscount(products: Array<IProductData>, discount: IDiscountData) {
    switch (discount.tag) {
      // TODO: Extraer la logica de cada discount, y crear un catalogo de descuentos
      case '2x1':
        let total = 0;
        let amount = products.length;
        if(!isEven(amount)) amount = amount - 1;
        for (let i = 0; i < amount; i++) {
          total = total + getDiscountedPrice(products[i].price, discount?.value);
        }
        return total;
      
      case 'x3':
        if(hasMoreThanThreeEqualElements(products, 'code', discount.product_code)) {
          let total = 0;
          let amount = products.length;
          for (let i = 0; i < amount; i++) {
            total = total + getDiscountedPrice(products[i].price, discount?.value);
          }
          return total;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  }

}