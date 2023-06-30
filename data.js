"use strict";
const cards = [
    {
        id: 1,
        title: "Grand Theft Auto V",
        imageUrl: "./images/gta.png",
        body: "orem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy te",
    },
    {
        id: 2,
        title: "Dark Souls III",
        imageUrl: "./images/ds3.jpg",
        body: "orem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy te",
    },
    {
        id: 3,
        title: "Elden Ring",
        imageUrl: "./images/elden.png",
        body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
    }
];
for (const card of cards) {
    const post = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const body = document.createElement("p");
    title.innerText = card.title;
    image.src = card.imageUrl;
    body.innerText = card.body;
    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(body);
    post.addEventListener("click", () => {
        window.location.href = "gta.html";
    });
    const cardList = document.getElementById("cardList");
    if (cardList) {
        cardList.appendChild(post);
    }
    post.classList.add("card");
}
