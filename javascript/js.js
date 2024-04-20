document.addEventListener("DOMContentLoaded", function () {
  const dropdownNav = document.getElementById("headerNav");
  const dropdownContent = document.getElementById("dropdown-content");

  dropdownNav.addEventListener("click", function (event) {
    const buttonId = event.target.id;

    if (event.target.tagName !== "BUTTON") return;
    const dropdownImage = dropdownNav.querySelector(`#${buttonId} > img`);

    const isVisible = dropdownContent.style.visibility === "visible";

    dropdownContent.style.visibility = isVisible ? "hidden" : "visible";
    dropdownContent.style.opacity = isVisible ? "0" : "100";
    dropdownImage.classList.toggle("rotate-180");
  });
});

const DUMMY_PRODUCTS = [
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "377",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "377",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "377",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
  {
    name: "SHISEIDO",
    description: "ULTIMUNE POWER INFUSING CONCENTRATE",
    imageSrc: "/public/temporary/prod-image.png",
    price: "222",
    originalPrice: "377",
    tags: ["Best seller"],
    icons: {
      heart: "/public/svgs/heart.svg",
      cart: "/public/svgs/shopping-cart.svg",
    },
  },
];

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className =
    " h-80 rounded overflow-hidden shadoow-md py-2 border border-gray-400 bg-white w-1/6 sm:w-1/3 md:w-1/2 lg:w-1/6";

  productCard.innerHTML = `
    <div class="p-3 max-sm:p-2 flex justify-between items-center">
      <label class="font-medium text-xs sm:text-sm md:text-base bg-gray-200 rounded-md px-2 max-sm:px-1 py-1">${product.tags.join(
        " "
      )}</label>
      <div class="flex gap-2 max-sm:gap-1">
        <button class="bg-gray-200 p-1 rounded-md">
          <img src="${product.icons.heart}" alt="icon" class="h-4 w-4" />
        </button>
        <button class="bg-gray-200 p-1 rounded-md">
          <img src="${product.icons.cart}" alt="icon" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <div class="w-full h-40 xl:my-3 my-2">
      <img class="h-full w-full" src="${
        product.imageSrc
      }" alt="Product Image" />
    </div>
    <div class="px-2  lg:px-3  pb-2  text-center">
      <div class="font-bold text-sm sm:text-base md:text-xl mb-1">${
        product.name
      }</div>
      <p class="text-gray-700 text-xs  md:text-sm">${product.description}</p>
      <div class="px-2 flex justify-center items-center gap-1 sm:gap-2">
        <span class="text-gray-900 text-sm sm:text-base">${
          product.price
        } ₾</span>
       ${
         product.originalPrice &&
         `<span class="line-through text-xs sm:text-sm">
             ${product.originalPrice} ₾
           </span>`
       } 
      </div>
    </div>
  `;

  return productCard;
}

function displayProducts(products, containerId) {
  const container = document.getElementById(containerId); // Adjust this selector to target where you want to insert the products
  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Call the function with your products array
displayProducts(DUMMY_PRODUCTS, "mostSelled");
displayProducts(DUMMY_PRODUCTS, "news");

displayProducts(DUMMY_PRODUCTS, "reccomendations");
displayProducts(DUMMY_PRODUCTS, "special-rec");
