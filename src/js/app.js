import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const main = document.querySelector(".main");
  const imageDiv = document.createElement("div");
  imageDiv.className = "image";
  main.appendChild(imageDiv);
  const image = document.createElement("img");
  image.src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png"
  imageDiv.appendChild(image);

  document.querySelector(".image").addEventListener("click", () =>{
    imageDiv.style.transform = "scale(2)"
  })
  console.log(imageDiv);
  console.log(main);
});


