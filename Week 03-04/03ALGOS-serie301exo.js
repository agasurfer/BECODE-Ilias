function getTotalPrice(list) {
    let totalNum = []
    for (let i = 0; i < list.length; i++) {
      totalNum.push(list[i].quantity * list[i].price);
} 
console.log(totalNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,));
}

getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]);
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]);
  getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]);
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]);
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ]);