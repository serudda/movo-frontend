import { IProductData } from 'app/interfaces/product-data';

export const productData = async (): Promise<Array<IProductData>> => {
  return [
    {
      "id": 1,
      "code": "TSHIRT",
      "name": "Shirt",
      "price": 20,
      "urlImg": "shirt.png",
      "discount": {
        "id": 2,
        "code": "x3",
        "name": "x3"
      },
      "stock": 230
    },
    {
      "id": 2,
      "code": "MUG",
      "name": "Mug",
      "price": 7.5,
      "urlImg": "mug.png",
      "discount": null,
      "stock": 100
    },
    {
      "id": 3,
      "code": "CAP",
      "name": "Cap",
      "price": 5,
      "urlImg": "cap.png", 
      "discount": {
        "id": 1,
        "code": "2x1",
        "name": "2x1"
      },
      "stock": 350
    }
  ];
};