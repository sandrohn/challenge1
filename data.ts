interface Card {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
}

interface userComment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    imageUrl: "./images/gta.png",
    body: "orem Ipsum is sorem Ipsum is simorem Ipsum is simorem Ipsum is simorem Ipsum is simimply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy te...",
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
  },  
  {
    id: 4,
    title: "Stray",
    imageUrl: "./images/stray.jpg",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  }, 
  {
    id: 5,
    title: "God of War",
    imageUrl: "./images/god.jpg",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  }, 
  {
    id: 6,
    title: "Red Dead",
    imageUrl: "./images/rd2.jpg",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  }, 
  
] 


for (const card of cards) {
    const post = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const body = document.createElement("p");
   
    title.innerText = card.title
    image.src = card.imageUrl
    body.innerText = card.body

    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(body);

    post.addEventListener("click", () =>{
        window.location.href= `detail.html?id=${card.id}`
    }
    )
    const expand = document.createElement("a");
    expand.href="detail.html";
    expand.innerText = "Expand..."
    post.appendChild(expand);  
    
    const cardList = document.getElementById("cardList")
    if(cardList){
        cardList.appendChild(post)
    }
    
    post.classList.add("card");
  }


  

  // const userComments: userComment[]=[
  //   {
  //     id: 1,
  //     postId: 1,
  //     email: "user1.@gmail",
  //     body: "sdsaddasd"
  //   },
  //   {
  //     id: 2,
  //     postId: 2,
  //     email: "user2.@gmail",
  //     body: "sdasasdasdd"
  //   }
  // ]

