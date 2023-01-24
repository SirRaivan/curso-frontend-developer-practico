const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const productDetailClosedIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shopppingCartContainer = document.querySelector("#shopppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

// Product list
const productList = [];
const cardsContainer = document.querySelector(".cards-container");


navEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailClosedIcon.addEventListener("click", closedProductDetailAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shopppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shopppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

function toggleCarritoAside() {
    shopppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shopppingCartContainer.classList.add('inactive');
}

function closedProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "tv",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "laptop",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        //product= {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click",openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);