const products = [
  // Phones
  { name: "Xiaomi Redmi Note 9 Pro 5G", price: 11000, image: "gallery/phone1.jpg" },
  { name: "Oppo F21 Pro 4G", price: 21000, image: "gallery/phone_2.jpg" },
  { name: "Poco F5 5G", price: 15000, image: "gallery/phone_3.jpg" },
  { name: "Samsung Galaxy M01s", price: 23999, image: "gallery/phone_4.jpg" },
  { name: "iPhone 13 Pro", price: 79000, image: "gallery/phone5.jpeg" },
  { name: "Vivo X70 Pro", price: 42000, image: "gallery/phone6.jpeg" },
  { name: "Realme 9i", price: 17000, image: "gallery/phone7.webp" },
  { name: "OnePlus Nord CE 3", price: 32000, image: "gallery/phone8.jpeg" },
  { name: "Samsung Galaxy S22 Ultra", price: 105000, image: "gallery/phone9.jpeg" },
  { name: "Google Pixel 7", price: 68000, image: "gallery/phone10.jpeg" },

  // T-Shirts
  { name: "Classic Black T-Shirt", price: 499, image: "gallery/tshirt1.jpEg" },
  { name: "White Cotton T-Shirt", price: 399, image: "gallery/tshirt2.jpeg" },
  { name: "Printed Casual T-Shirt", price: 599, image: "gallery/tshirt3.jpeg" },
  { name: "Round Neck Blue T-Shirt", price: 549, image: "gallery/tshirt4.jpeg" },
  { name: "Striped Cotton T-Shirt", price: 699, image: "gallery/tshirt5.jpeg" },
  { name: "Graphic Oversized T-Shirt", price: 799, image: "gallery/tshirt6.jpeg" },
  { name: "Slim Fit Polo T-Shirt", price: 999, image: "gallery/tshirt7.jpg" },
  { name: "Half-Sleeve Sports T-Shirt", price: 649, image: "gallery\tshirt8.jpeg" },
  { name: "Grey Round Neck T-Shirt", price: 459, image: "gallery/tshirt9.jpeg" },
  { name: "Premium Black T-Shirt", price: 1099, image: "gallery/tshirt10.jpg" },

  // Pants
  { name: "Blue Denim Jeans", price: 1499, image: "gallery/pant1.jpg" },
  { name: "Black Slim Fit Jeans", price: 1799, image: "gallery/pant2.jpg" },
  { name: "Khaki Chinos", price: 1599, image: "gallery/pant3.jpg" },
  { name: "Cargo Pants Green", price: 1999, image: "gallery/pant4.jpg" },
  { name: "Grey Joggers", price: 1299, image: "gallery/pant5.jpg" },
  { name: "Formal Black Pants", price: 1899, image: "gallery/pant6.jpeg" },
  { name: "Casual Beige Pants", price: 1699, image: "gallery/pant7.jpg" },
  { name: "Regular Fit Jeans", price: 1499, image: "gallery\shoe8.webp" },
  { name: "Classic Blue Denim", price: 1999, image: "gallery/pant9.jpg" },
  { name: "Stretchable Black Pants", price: 1799, image: "gallery/pant10.jpg" },

  // Shoes
  { name: "Nike Running Shoes", price: 3999, image: "gallery/shoe1.jpg" },
  { name: "Adidas Sports Shoes", price: 4499, image: "gallery/shoe2.jpg" },
  { name: "Puma White Sneakers", price: 3799, image: "gallery/shoe3.jpg" },
  { name: "Reebok Training Shoes", price: 2999, image: "gallery/shoe4.jpg" },
  { name: "Woodland Brown Boots", price: 5999, image: "gallery/shoe5.jpg" },
  { name: "Campus Casual Shoes", price: 2499, image: "gallery/shoe6.jpg" },
  { name: "Fila High Ankle Shoes", price: 3399, image: "gallery/shoe7.jpg" },
  { name: "Bata Formal Shoes", price: 2899, image: "gallery/shoe8.jpg" },
  { name: "Red Tape Leather Shoes", price: 5499, image: "gallery/shoe9.jpg" },
  { name: "Skechers Walking Shoes", price: 4299, image: "gallery/shoe10.jpg" }
];


function loadProducts() {
  let cart = document.getElementById("product-list");
  cart.innerHTML = "";

  products.forEach((product) => {
      let Div = document.createElement("div");
      Div.classList.add("col-sm-3", "border");
      Div.innerHTML = `
          <img class="img" src="${product.image}" height="150px" alt="${product.name}">
          <h5><strong>${product.name}</strong></h5>
          <p>₹${product.price}</p>
          <button class="button" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Buy</button>
      `;
      cart.appendChild(Div);
  });
}

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let new_image = cart.find(item => item.image === image);

  if (new_image) {
      new_image.quantity += 1;
  } else {
      cart.push({ name, price, quantity: 1, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

function viewCart() {
  window.location.href = "cart.html";
}

function goBack() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("product-list")) {
      loadProducts();
  }
});

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);


let email = "test@example.com"; 
let fname = "John"; 
let lname = "Doe";
let password = "password123";
let number = "9876543210";

let new_email = users.find(user => user.email === email);
if (new_email) {
  // alert("This user already exists!");
} else {
  users.push({ fname, lname, email, password, number });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration Successful!");
}
