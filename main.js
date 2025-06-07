const cars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    year: 2023,
    price: 110000,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    brand: "BMW",
    year: 2023,
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "Audi A8",
    brand: "Audi",
    year: 2022,
    price: 88000,
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    name: "Porsche 911",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    name: "Tesla Model S",
    brand: "Tesla",
    year: 2023,
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 6,
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    year: 2022,
    price: 280000,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 7,
    name: "Ferrari 488",
    brand: "Ferrari",
    year: 2021,
    price: 330000,
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 8,
    name: "Range Rover Sport",
    brand: "Land Rover",
    year: 2023,
    price: 78000,
    image:
      "https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 9,
    name: "Bentley Continental GT",
    brand: "Bentley",
    year: 2022,
    price: 220000,
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 10,
    name: "Lexus LS",
    brand: "Lexus",
    year: 2023,
    price: 78000,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 11,
    name: "Maserati Quattroporte",
    brand: "Maserati",
    year: 2022,
    price: 110000,
    image:
      "https://images.unsplash.com/photo-1605515298946-d0573716e528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 12,
    name: "Jaguar F-Type",
    brand: "Jaguar",
    year: 2023,
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 13,
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    year: 2022,
    price: 205000,
    image:
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 14,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    year: 2023,
    price: 340000,
    image:
      "https://images.unsplash.com/photo-1631295868223-63265b40d9cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 15,
    name: "McLaren 720S",
    brand: "McLaren",
    year: 2022,
    price: 310000,
    image:
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 16,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    year: 2021,
    price: 3000000,
    image:
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 17,
    name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2023,
    price: 82000,
    image:
      "https://images.unsplash.com/photo-1549275301-c9221c691387?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 18,
    name: "Chevrolet Corvette",
    brand: "Chevrolet",
    year: 2023,
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 19,
    name: "Ford Mustang GT",
    brand: "Ford",
    year: 2023,
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5f82d661c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 20,
    name: "Dodge Challenger Hellcat",
    brand: "Dodge",
    year: 2022,
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filteredCars = [...cars];

document.addEventListener("DOMContentLoaded", () => {
  setupBrandFilter();
  renderProducts();
  updateCartCount();
  setupMobileMenu();
  setupPriceFilter();
  setupFormValidation();
});

function setupBrandFilter() {
  const brandFilter = document.getElementById("brand-filter");
  const brands = [...new Set(cars.map((car) => car.brand))];

  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });

  brandFilter.addEventListener("change", filterProducts);
}

function setupPriceFilter() {
  const priceFilter = document.getElementById("price-filter");
  const priceValue = document.getElementById("price-value");

  priceFilter.addEventListener("input", function () {
    priceValue.textContent = "$" + Number.parseInt(this.value).toLocaleString();
    filterProducts();
  });
}

function filterProducts() {
  const brandFilter = document.getElementById("brand-filter").value;
  const priceFilter = Number.parseInt(
    document.getElementById("price-filter").value
  );

  filteredCars = cars.filter((car) => {
    const brandMatch = brandFilter === "" || car.brand === brandFilter;
    const priceMatch = car.price <= priceFilter;
    return brandMatch && priceMatch;
  });

  renderProducts();
}

function renderProducts() {
  const productGrid = document.getElementById("product-grid");

  productGrid.innerHTML = "";

  filteredCars.forEach((car) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="product-image" style="background-image: url('${
        car.image
      }')"></div>
      <div class="product-details">
        <h3>${car.name}</h3>
        <p>${car.brand} | ${car.year}</p>
        <p class="product-price">$${car.price.toLocaleString()}</p>
        <button class="btn" onclick="addToCart(${
          car.id
        })">Añadir al Carrito</button>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}

function addToCart(carId) {
  const car = cars.find((car) => car.id === carId);

  if (!car) return;

  const cartItem = cart.find((item) => item.id === carId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${car.name} añadido al carrito`);
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

function renderCartItems() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Tu carrito está vacío</p>";
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3 class="cart-item-title">${item.name}</h3>
        <p class="cart-item-price">$${item.price.toLocaleString()}</p>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="decrementQuantity(${
            item.id
          })">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="incrementQuantity(${
            item.id
          })">+</button>
          <button class="btn" onclick="removeFromCart(${
            item.id
          })">Eliminar</button>
        </div>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = total.toLocaleString();
}

function incrementQuantity(carId) {
  const cartItem = cart.find((item) => item.id === carId);

  if (cartItem) {
    cartItem.quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
  }
}

function decrementQuantity(carId) {
  const cartItem = cart.find((item) => item.id === carId);

  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
  }
}

function removeFromCart(carId) {
  cart = cart.filter((item) => item.id !== carId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  updateCartCount();
}

function toggleCart() {
  const cart = document.getElementById("cart");
  const overlay = document.getElementById("overlay");

  cart.classList.toggle("active");
  overlay.classList.toggle("active");

  if (cart.classList.contains("active")) {
    renderCartItems();
  }
}

function showCheckout() {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío");
    return;
  }

  const cartElement = document.getElementById("cart");
  const checkout = document.getElementById("checkout");

  cartElement.classList.remove("active");
  checkout.classList.add("active");
}

function hideCheckout() {
  const checkout = document.getElementById("checkout");
  const overlay = document.getElementById("overlay");

  checkout.classList.remove("active");
  overlay.classList.remove("active");
}

function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function setupFormValidation() {
  const checkoutForm = document.getElementById("checkout-form");

  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (this.checkValidity()) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      hideCheckout();
      showToast("¡Compra realizada con éxito!");
    } else {
      showToast("Por favor completa todos los campos correctamente");
    }
  });
}
