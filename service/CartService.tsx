const cart: any = [];
const quantityArray: any = [];
var index: number;

export const AddToCart = (item: object) => {
  var flag: boolean = false;
  if (cart.length == 0) {
    cart.push(item as never);
    quantityArray.push({
      id: Object(item)["id"],
      quantity: 1,
    });
  } else if (cart.length > 0) {
    for (var i: number = 0; i < cart.length; i++) {
      if (Object(item)["id"] == cart[i].id) {
        flag = true;
        index = i;
      }
    }
    if (flag == true) {
      quantityArray[index] = {
        id: Object(item)["id"],
        quantity: +Object(quantityArray[index])["quantity"] + 1,
      };
    } else if (flag == false) {
      cart.push(item as never);
      quantityArray.push({
        id: Object(item)["id"],
        quantity: 1,
      });
    }
  }
  return { cart, quantityArray };
};

export function GetCart() {
  return cart;
}

export function GetQuantityArray() {
  return quantityArray;
}
