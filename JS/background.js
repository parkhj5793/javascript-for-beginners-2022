const image = ["spring.jpg", "summer.jpg", "autumn.jpg", "winter.jpg"];

const selectImg = image[Math.floor(Math.random() * image.length)];

const backGround = document.createElement("img");

backGround.src = `images/${selectImg}`;

document.body.appendChild(backGround);
backGround.classList.add("bgimg");