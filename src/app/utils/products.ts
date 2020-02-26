import { IProductData } from 'app/interfaces/product-data';

export const productData: Array<IProductData> = [
    {
      "id": 1,
      "code": "TSHIRT",
      "name": "Shirt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.",
      "price": 20,
      "thumbnail_url": "shirt.png",
      "img_url": "tshirt@2x-crop.jpg",
      "stock": 230
    },
    {
      "id": 2,
      "code": "MUG",
      "name": "Mug",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius.",
      "price": 5,
      "thumbnail_url": "mug.png",
      "img_url": "mug@2x-crop.jpg",
      "stock": 100
    },
    {
      "id": 3,
      "code": "CAP",
      "name": "Cap",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur.",
      "price": 10,
      "thumbnail_url": "cap.png",
      "img_url": "cap@2x-crop.jpg",
      "stock": 350
    }
  ];