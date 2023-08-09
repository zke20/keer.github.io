
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/7a9307729d20511a30d09c7c80cdbe0c.jpeg") {
    myImage.setAttribute("src", "images/6272c5d44a80b.jpeg");
  } else {
    myImage.setAttribute("src", "images/7a9307729d20511a30d09c7c80cdbe0c.jpeg");
  }
};
