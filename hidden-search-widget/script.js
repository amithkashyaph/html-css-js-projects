const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  console.log("hi");
  search.classList.toggle("active");
  input.focus();
});
