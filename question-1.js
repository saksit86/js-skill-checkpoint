// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
let totalValue = 0;
// update apple quantity
inventory.apple.quantity = 200;
// add orange price and quantity
inventory.orange = {price: 20, quantity: 300};
// calculate total value using price * quantity
// for...in = loop key + เก็บ key ไว้ใน productName ในแต่ละรอบ loop
// inventory[productName] = ดึงผลลัพธ์ object ของ key ออกมาใช้  
// += เอาค่าเดิมบวกกับค่าใหม่ แล้วเก็บผลลัพธ์
for(let productName in inventory) {
  totalValue += inventory[productName].price * inventory[productName].quantity;
}
console.log(`Total inventory value: ${totalValue} bath`);