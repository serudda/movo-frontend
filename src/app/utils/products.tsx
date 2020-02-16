export const productsData = async () => {
  return [
    {
      "id": 1,
      "code": "CAP",
      "name": "Cap",
      "price": 20,
      "discount": {
        "id": 1,
        "code": "2x1",
        "label": "2x1"
      }
    },
    {
      "id": 2,
      "code": "SHIRT",
      "name": "Shirt",
      "price": 5,
      "discount": {
        "id": 2,
        "code": "x3",
        "label": "x3"
      }
    }
  ];
};