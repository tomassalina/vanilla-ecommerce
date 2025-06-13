const cars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    year: 2023,
    price: 110000,
    image: "./images/cars/car-1.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    brand: "BMW",
    year: 2023,
    price: 95000,
    image: "./images/cars/car-2.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Audi A8",
    brand: "Audi",
    year: 2022,
    price: 88000,
    image: "./images/cars/car-3.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Porsche 911",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    image: "./images/cars/car-4.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Tesla Model S",
    brand: "Tesla",
    year: 2023,
    price: 85000,
    image: "./images/cars/car-5.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    year: 2022,
    price: 280000,
    image: "./images/cars/car-6.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 7,
    name: "Ferrari 488",
    brand: "Ferrari",
    year: 2021,
    price: 330000,
    image: "./images/cars/car-7.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 8,
    name: "Range Rover Sport",
    brand: "Land Rover",
    year: 2023,
    price: 78000,
    image: "./images/cars/car-8.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 9,
    name: "Bentley Continental GT",
    brand: "Bentley",
    year: 2022,
    price: 220000,
    image: "./images/cars/car-9.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 10,
    name: "Lexus LS",
    brand: "Lexus",
    year: 2023,
    price: 78000,
    image: "./images/cars/car-10.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 11,
    name: "Maserati Quattroporte",
    brand: "Maserati",
    year: 2022,
    price: 110000,
    image: "./images/cars/car-11.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 12,
    name: "Jaguar F-Type",
    brand: "Jaguar",
    year: 2023,
    price: 75000,
    image: "./images/cars/car-12.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 13,
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    year: 2022,
    price: 205000,
    image: "./images/cars/car-13.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 14,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    year: 2023,
    price: 340000,
    image: "./images/cars/car-14.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 15,
    name: "McLaren 720S",
    brand: "McLaren",
    year: 2022,
    price: 310000,
    image: "./images/cars/car-15.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 16,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    year: 2021,
    price: 3000000,
    image: "./images/cars/car-16.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 17,
    name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2023,
    price: 82000,
    image: "./images/cars/car-17.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 18,
    name: "Chevrolet Corvette",
    brand: "Chevrolet",
    year: 2023,
    price: 65000,
    image: "./images/cars/car-18.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 19,
    name: "Ford Mustang GT",
    brand: "Ford",
    year: 2023,
    price: 45000,
    image: "./images/cars/car-19.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 20,
    name: "Dodge Challenger Hellcat",
    brand: "Dodge",
    year: 2022,
    price: 72000,
    image: "./images/cars/car-20.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let seccionActual = "home";
let filteredCars = [...cars];

const carritoCount = document.getElementById("contador-carrito");
const productosContainer = document.getElementById("contenedor-productos");
const carritoItems = document.getElementById("elementos-carrito");
const carritoTotal = document.getElementById("total-carrito");
const botonFinalizar = document.getElementById("boton-finalizar");
const formularioCompra = document.getElementById("formulario-compra");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const featuredCarsContainer = document.getElementById("featured-cars");
const brandFilters = document.getElementById("brand-filters");
const yearFilters = document.getElementById("year-filters");
const priceFilter = document.getElementById("price-filter");
const priceValue = document.getElementById("price-value");
const resetFilters = document.getElementById("reset-filters");
const sortSelect = document.getElementById("sort");
const summaryItems = document.getElementById("summary-items");

function init() {
  renderFeaturedCars();
  renderProducts();
  setupFilters();
  setupEventListeners();
  updateCartUI();
}

function saveCarritoToStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function showToast(message, duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  toastContainer.appendChild(toast);

  toast.offsetHeight;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, duration);
}

function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
  seccionActual = sectionId;

  window.scrollTo(0, 0);

  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
}

function renderFeaturedCars() {
  if (!featuredCarsContainer) return;

  const featuredCars = cars.slice(0, 4);

  featuredCarsContainer.innerHTML = featuredCars
    .map(
      (car) => `
    <div class="car-card">
      <div class="car-image" style="background-image: url('${
        car.image
      }')"></div>
      <div class="car-details">
        <h3 class="car-title">${car.name}</h3>
        <p class="car-price">$${car.price.toLocaleString()}</p>
        <div class="car-meta">
          <span>${car.brand}</span>
          <span>${car.year}</span>
        </div>
        <button class="btn" onclick="addToCart(${
          car.id
        })">Agregar al carrito</button>
      </div>
    </div>
  `
    )
    .join("");
}

function renderProducts() {
  if (!productosContainer) return;

  productosContainer.innerHTML = filteredCars
    .map(
      (car) => `
    <div class="car-card">
      <div class="car-image" style="background-image: url('${
        car.image
      }')"></div>
      <div class="car-details">
        <h3 class="car-title">${car.name}</h3>
        <p class="car-price">$${car.price.toLocaleString()}</p>
        <div class="car-meta">
          <span>${car.brand}</span>
          <span>${car.year}</span>
        </div>
        <button class="btn" onclick="addToCart(${
          car.id
        })">Agregar al carrito</button>
      </div>
    </div>
  `
    )
    .join("");
}

function setupFilters() {
  if (!brandFilters || !yearFilters || !priceFilter) return;

  const brands = [...new Set(cars.map((car) => car.brand))];

  brandFilters.innerHTML = brands
    .map(
      (brand) => `
    <div class="filter-option">
      <input type="checkbox" id="brand-${brand}" name="brand" value="${brand}">
      <label for="brand-${brand}">${brand}</label>
    </div>
  `
    )
    .join("");

  const years = [...new Set(cars.map((car) => car.year))];

  yearFilters.innerHTML = years
    .map(
      (year) => `
    <div class="filter-option">
      <input type="checkbox" id="year-${year}" name="year" value="${year}">
      <label for="year-${year}">${year}</label>
    </div>
  `
    )
    .join("");

  priceFilter.addEventListener("input", function () {
    priceValue.textContent = `$${Number.parseInt(this.value).toLocaleString()}`;
    applyFilters();
  });

  document
    .querySelectorAll('.filter-option input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilters);
    });

  resetFilters.addEventListener("click", () => {
    document
      .querySelectorAll('.filter-option input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });

    priceFilter.value = 500000;
    priceValue.textContent = `$${Number.parseInt(
      priceFilter.value
    ).toLocaleString()}`;

    sortSelect.value = "default";

    applyFilters();
  });

  sortSelect.addEventListener("change", applyFilters);
}

function applyFilters() {
  const selectedBrands = Array.from(
    document.querySelectorAll('input[name="brand"]:checked')
  ).map((input) => input.value);

  const selectedYears = Array.from(
    document.querySelectorAll('input[name="year"]:checked')
  ).map((input) => Number.parseInt(input.value));

  const maxPrice = Number.parseInt(priceFilter.value);

  filteredCars = cars.filter((car) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(car.brand);
    const yearMatch =
      selectedYears.length === 0 || selectedYears.includes(car.year);
    const priceMatch = car.price <= maxPrice;

    return brandMatch && yearMatch && priceMatch;
  });

  const sortValue = sortSelect.value;

  switch (sortValue) {
    case "price-low":
      filteredCars.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredCars.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filteredCars.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredCars.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  renderProducts();
}

function addToCart(carId) {
  const car = cars.find((car) => car.id === carId);

  if (!car) return;

  const carritoItem = carrito.find((item) => item.id === carId);

  if (carritoItem) {
    carritoItem.quantity++;
  } else {
    carrito.push({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
      quantity: 1,
    });
  }

  updateCartUI();
  saveCarritoToStorage();
  showToast(`${car.name} agregado al carrito!`);
}

function incrementQuantity(carId) {
  const carritoItem = carrito.find((item) => item.id === carId);

  if (carritoItem) {
    carritoItem.quantity++;
    updateCartUI();
    saveCarritoToStorage();
  }
}

function decrementQuantity(carId) {
  const carritoItem = carrito.find((item) => item.id === carId);

  if (carritoItem && carritoItem.quantity > 1) {
    carritoItem.quantity--;
    updateCartUI();
    saveCarritoToStorage();
  }
}

function removeFromCart(carId) {
  carrito = carrito.filter((item) => item.id !== carId);
  updateCartUI();
  saveCarritoToStorage();
}

function updateCartUI() {
  carritoCount.textContent = carrito.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (carritoItems) {
    if (carrito.length === 0) {
      carritoItems.innerHTML =
        '<p class="empty-cart">Tu carrito esta vacío</p>';
    } else {
      carritoItems.innerHTML = carrito
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>$${item.price.toLocaleString()}</p>
            <div class="controles-cantidad">
              <button class="boton-cantidad" onclick="decrementQuantity(${
                item.id
              })">-</button>
              <span>${item.quantity}</span>
              <button class="boton-cantidad" onclick="incrementQuantity(${
                item.id
              })">+</button>
            </div>
            <button class="btn" onclick="removeFromCart(${
              item.id
            })">Eliminar</button>
          </div>
        </div>
      `
        )
        .join("");
    }
  }

  const total = carrito.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (carritoTotal) {
    carritoTotal.textContent = total.toLocaleString();
  }

  if (summaryItems) {
    summaryItems.innerHTML = carrito
      .map(
        (item) => `
      <div class="summary-item">
        <div class="summary-item-details">
          <h4 class="summary-item-title">${item.name}</h4>
          <p class="summary-item-price">$${item.price.toLocaleString()}</p>
          <p class="summary-item-quantity">Cantidad: ${item.quantity}</p>
        </div>
      </div>
    `
      )
      .join("");

    const subtotal = total;
    const tax = subtotal * 0.1;
    const finalTotal = subtotal + tax;

    document.querySelector(
      ".summary-subtotal"
    ).textContent = `$${subtotal.toLocaleString()}`;
    document.querySelector(
      ".summary-tax"
    ).textContent = `$${tax.toLocaleString()}`;
    document.querySelector(
      ".summary-total"
    ).textContent = `$${finalTotal.toLocaleString()}`;
  }
}

function setupEventListeners() {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  if (botonFinalizar) {
    botonFinalizar.addEventListener("click", () => {
      if (carrito.length > 0) {
        showSection("checkout");
      } else {
        showToast("Your cart is empty. Add some products first.");
      }
    });
  }

  if (formularioCompra) {
    formularioCompra.addEventListener("submit", (e) => {
      e.preventDefault();

      showToast(
        "¡Gracias por tu compra! Estamos procesando tu pedido...",
        3000
      );

      setTimeout(() => {
        const orderNumber = "ORD-" + Math.floor(Math.random() * 1000000);

        carrito = [];
        updateCartUI();
        saveCarritoToStorage();

        showToast(`Pedido N° #${orderNumber} realizado con éxito!`, 5000);

        showSection("home");
      }, 3000);
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
