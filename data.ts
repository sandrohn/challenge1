interface Card {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    link: string
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
    link: "./gta.html",
    body: "orem Ipsum is sorem Ipsum is simorem Ipsum is simorem Ipsum is simorem Ipsum is simimply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy te...",
  },
  {
    id: 2,
    title: "Dark Souls III",
    imageUrl: "./images/ds3.jpg",
    link: "./ds3.html",
    body: "orem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy teorem Ipsum is simply dummy te",
  }, 
  {
    id: 3,
    title: "Elden Ring",
    imageUrl: "./images/elden.png",
    link:"",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  },  
  {
    id: 3,
    title: "Stray",
    imageUrl: "./images/stray.jpg",
    link:"",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  }, 
  {
    id: 3,
    title: "God of War",
    imageUrl: "./images/god.jpg",
    link:"",
    body: "orem Ipsum is orem Ipsum is simply dummy teorem Ipsum is simply dummy tesimply dummy te",
  }, 
  {
    id: 3,
    title: "Red Dead",
    imageUrl: "./images/rd2.jpg",
    link:"",
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
        window.location.href=card.link
    }
    )
    const expand = document.createElement("a");
    expand.href=card.link;
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
      email: "user1.@gmail",
      body: "sdsaddasd"
    },
    {
      id: 2,
      postId: 2,
      email: "user2.@gmail",
      body: "sdasasdasdd"
    }
  ]

  const commentsContainer = document.getElementById("comments-container");

  if (commentsContainer) {
    const comment = userComments[0];
  
    const commentElement = document.createElement("div");
  
    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${comment.id}`;
  
    const postIdElement = document.createElement("p");
    postIdElement.textContent = `Post ID: ${comment.postId}`;
  
    const emailElement = document.createElement("p");
    emailElement.textContent = `Email: ${comment.email}`;
  
    const bodyElement = document.createElement("p");
    bodyElement.textContent = `Body: ${comment.body}`;
  
    commentElement.appendChild(idElement);
    commentElement.appendChild(postIdElement);
    commentElement.appendChild(emailElement);
    commentElement.appendChild(bodyElement);
  
    commentsContainer.appendChild(commentElement);
  }
