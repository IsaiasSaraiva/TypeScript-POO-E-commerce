import { Cart } from "./models/Cart"
import { Category } from "./models/Category"
import { Product } from "./models/Product"

const electronics: Category = {
  id: 1,
  name: "Electronics"
}

const phone: Product = {
  id: 1,
  name: "Smartphone",
  price: 2000,
  category: electronics
}

const notebook: Product = {
  id: 2,
  name: "Notebook",
  price: 5000,
  category: electronics
}

const cart = new Cart()

cart.addItem(phone, 1)
cart.addItem(phone, 2)
cart.addItem(notebook, 1)

console.log("Total de itens:", cart.getTotalItems())
console.log("Valor final:", cart.getFinalPrice())