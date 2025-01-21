const item= document.querySelector("div");
const elemento= document.querySelectorAll("button");

function mudarLargura () {
  item.classList.toggle("width");
}

function mudarAltura () {
  item.classList.toggle("height");
}

elemento[0].addEventListener("click", mudarLargura);
elemento[0].addEventListener("click", mudarAltura);
elemento[1].addEventListener("click", mudarAltura);
elemento[2].addEventListener("click", mudarLargura);