interface Card {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    preview: string
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
    preview: ".",
    body: " THIS TEXT IS ABOUT GTA AND ONLY GTA, IT CANT BE IN ANY OTHER OF THOSE CARDS FOR GOD SAKE OH MY FUCKING GOD",
  },
  {
    id: 2,
    title: "Dark Souls III",
    imageUrl: "./images/ds3.jpg",
    preview: "",
    body: "THIS CARD IS ABOUT DARK SOULS 3 THIS FUCKING GAME IS AMAZING HOLY",
  }, 
  {
    id: 3,
    title: "Elden Ring",
    imageUrl: "./images/elden.png",
    preview: "",
    body: "THIS TEXT IS ABOUT ELDEN FUCKING RING THIS IS GAME IS THE BEST IN THE WORLD! NO OTHER GAME CAN COMPARE TO THIS MASTERPIECE THIS GAME IS AMAZING LIKE ANY OTHER",
  },  
  {
    id: 4,
    title: "Stray",
    imageUrl: "./images/stray.jpg",
    preview: "",
    body: "THIS TEXT IS ABOUT STRAY! THIS IS GAME IS SO DAMN CUTE THIS CAT IS INCRIVEL! THE START OF THE GAME IT IS A BIT SAD BUT THAT'S OK CAUSE IT IS WORTH TO PLAY",
  }, 
  {
    id: 5,
    title: "God of War",
    imageUrl: "./images/god.jpg",
    preview: "",
    body: "THIS TEXT IS ABOUT GOD OF THE WAR! I PLAY THIS GAME A LITTLE AFTER HIS RELEASE BUT THE EXPERIENCE DIDNT CHANGE EVEN TOUGHT I KNEW THE HISTORY",
  }, 
  {
    id: 6,
    title: "Red Dead",
    imageUrl: "./images/rd2.jpg",
    preview: "",
    body: "THIS TEXT IS ABOUT RD2! I NEVER PLAYED THIS GAME BUT I WANNA SO FUCKING MUCH! THIS GAME SEEMS AMAZING ALL TOUGHT I NEVER PLAYED. THE ENVIROMENT LOOKS MAGICAL",
  }, 
  
] 

for (const card of cards) {
  card.preview = card.body.substring(0, 100) + "...";
}

for (const card of cards) {
    const post = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const body = document.createElement("p");
    const preview = document.createElement("p")
   
    title.innerText = card.title
    image.src = card.imageUrl
    body.innerText = card.body
    preview.innerText = card.preview

    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(preview);

    post.addEventListener("click", () =>{
        window.location.href= `detail.html?id=${card.id}`
    }
    )
    const expand = document.createElement("a");
    expand.innerText = "Expand..."
    post.appendChild(expand);  
    
    const cardList = document.getElementById("cardList")
    if(cardList){
        cardList.appendChild(post)
    }
    
    post.classList.add("card");
  }


  

  const userComments: userComment[]=[
    {
      id: 1,
      postId: 1,
      email: "GTA1.@gmail",
      body: "sdsaddasd"
    },
    {
      id: 2,
      postId: 1,
      email: "GTA2.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 3,
      postId: 1,
      email: "GTA3.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 4,
      postId: 2,
      email: "DARK1.@gmail",
      body: "sdasasdasdd"
    },  
    {
      id: 5,
      postId: 2,
      email: "DARK2.@gmail",
      body: "sdasasdasdd"
    },  
    {
      id: 6,
      postId: 2,
      email: "DARK3.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 7,
      postId: 3,
      email: "ELDEN1.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 8,
      postId: 3,
      email: "ELDEN2.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 9,
      postId: 3,
      email: "ELDEN3.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 10,
      postId: 4,
      email: "stray1.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 11,
      postId: 4,
      email: "stray2.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 12,
      postId: 4,
      email: "stray3.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 13,
      postId: 5,
      email: "god1.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 14,
      postId: 5,
      email: "god2.@gmail",
      body: "sdasasdasdd"
    },
    {
      id: 15,
      postId: 5,
      email: "god3.@gmail",
      body: "sdasasdasdd"
    },
  ]


