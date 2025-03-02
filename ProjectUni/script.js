const cartCountElement = document.getElementById("cart-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");
let totalItems = parseInt(localStorage.getItem("totalItems")) || 0;//parseInt, because local storage stores data as string
let popup = document.querySelector(".pop-up");

//updating the cart count
cartCountElement.innerText = totalItems;
cartCountElement.style.display = totalItems > 0 ? "block" : "none";

//popup function
const openPopup = () => {
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
};
//adding event listener to all the buttons
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    openPopup();
    totalItems++;
    //updating the local storage
    localStorage.setItem("totalItems", totalItems);
    //updating the cart count
    cartCountElement.innerText = totalItems;
    cartCountElement.style.display = totalItems > 0 ? "block" : "none";
  });
});