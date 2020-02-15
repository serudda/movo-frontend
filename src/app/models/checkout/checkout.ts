import { ProductData } from 'app/interfaces/product-data';
import { DiscountData } from 'app/interfaces/discount-data';

export interface PricingRules {
  products: Array<ProductData>;
  discounts: Array<DiscountData>;
}

export class Checkout {

  private _scannedProducts: Array<ProductData>;
  private _availableProducts: Array<ProductData>;
  private _availableDiscounts: Array<DiscountData>;

  constructor(pricingRules: PricingRules) {
    this._availableProducts = pricingRules ? pricingRules.products : [];
    this._availableDiscounts = pricingRules ? pricingRules.discounts : [];
    this._scannedProducts = [];
  }

  get availableDiscounts(): Array<DiscountData> {
    return this._availableDiscounts;
  }

  get availableProducts(): Array<ProductData> {
    return this._availableProducts;
  }

  get scannedProducts(): Array<ProductData> {
    return this._scannedProducts;
  }

  public scan(productCode: string): void {
    const product = this._availableProducts.find(product => product.code === productCode);
    if(product) {
      this._scannedProducts.push(product);
    }
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
