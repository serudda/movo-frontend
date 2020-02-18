import { IProductData } from 'app/interfaces/product-data';
import { IDiscountData } from 'app/interfaces/discount-data';

export interface PricingRules {
  products: any;
  discounts:any;
}

export class Checkout {

  private _scannedProducts: Array<IProductData> = [];
  private _availableProducts: Array<IProductData> = [];
  private _availableDiscounts: Array<IDiscountData> = [];

  constructor(pricingRules: PricingRules) {
    this._availableProducts = pricingRules ? pricingRules.products : [];
    this._availableDiscounts = pricingRules ? pricingRules.discounts : [];
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
    return this._scannedProducts.length + 1;
  }

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
    this._scannedProducts = this._scannedProducts.filter((item) => item.code !== productCode);
  }

  
  public totalWithoutDiscount(): number {
    const initialTotal = 0;
    return this._scannedProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, initialTotal);
  }

  public total(): number {
    return 100;
  }
}



/*
scannedProducts: [
  {
    id: 2,
    code: 'SHIRT',
    name: 'Shirt',
    price: 5,
    discount: 1
  },

  {
    id: 2,
    code: 'SHIRT',
    name: 'Shirt',
    price: 5,
    discount: 1
  },

  {
    id: 2,
    code: 'SHIRT',
    name: 'Shirt',
    price: 5,
    discount: 1
  },

  {
    id: 1,
    code: 'CAP',
    name: 'Cap',
    price: 20,
    discount: 2
  }
];

pricingRules: 
  {
    products: [
      {
        id: 1,
        code: 'CAP',
        name: 'Cap',
        price: 20,
        discount: 1
      },
      {
        id: 2,
        code: 'SHIRT',
        name: 'Shirt',
        price: 5,
        discount: 2
      }
    ],

    discounts: [
      {
        id: 1,
        code: '2x1',
        label: '2x1'
      },
      {
        id: 2,
        code: 'x3',
        label: 'x3'
      }
    ]
  };


*/
