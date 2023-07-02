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
    preview: "",
    body: "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV. Amidst the turmoil, three very different criminals plot their own chances of survival and success: Franklin, a former street gangster, now looking for real opportunities and serious money; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life.",
  },
  {
    id: 3,
    title: "Elden Ring",
    imageUrl: "./images/elden.png",
    preview: "",
    body: "The Lands Between were ruled over by Queen Marika the Eternal, a being chosen by the Greater Will, who acted as a guardian and keeper of the Elden Ring and had numerous children. She also purposefully altered it and removed the Rune of Destined Death, making anybody under the Grace of the Elden Ring immortal. All people were affected in this way, but the Elden Ring and Erdtree seemed to reject some of them, marking them as Tarnished who were sent into exile. They still couldn't die, but they had been marked as unworthy in some way.",
  },  
  {
    id: 4,
    title: "Stray",
    imageUrl: "./images/stray.jpg",
    preview: "",
    body: "While tandem B-12 and the cat are trying to find a way to get outside.B-12 suddenly remembered a memory about the past.The companion drone remembered that there was a plague that happened to the humans.Take note that B-12 got a human consciousness from a human scientist.B-12 expressed its remembered thoughts that they were helpless while everyone was dying. Unfortunately, there was no way to save the humans. Moreover, the plague is the reason why Walled City exists in the first place. ",
  }, 
  {
    id: 5,
    title: "God of War",
    imageUrl: "./images/god.jpg",
    preview: "",
    body: "Many years have passed since the titular God of War, Kratos took his vengeance against the Olympian gods. Having survived his final encounter with his father Zeus, Kratos has since travelled to Midgard in Ancient Norway and now lives with his young son Atreus in the world of the Norse gods, a savage land inhabited by many ferocious monsters and warriors",
  }, 
  {
    id: 6,
    title: "Red Dead",
    imageUrl: "./images/rd2.jpg",
    preview: "",
    body: "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Set in the American frontier in 1899, Red Dead Redemption 2 follows the story of Arthur Morgan, a member of Dutch van der Linde's outlaw gang.",
  },
  {
    id: 7,
    title: "Dark Souls III",
    imageUrl: "./images/ds3.jpg",
    preview: "",
    body: "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again. The protagonist is known as an Unkindled, a kind of Undead, although it is never fully enunciated upon what differentiates an Unkindled from other Undead. There are implications that an Unkindled is the remains of an Undead warrior who failed to link the flame and, as a result, burned their bodies into ash.",
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
      email: "inojosahenry@gmail.com",
      body: "I love this game! I like the freedom i have when i play it. It is the place where i like to go when i just wanna ride"
    },
    {
      id: 2,
      postId: 1,
      email: "werydyligs@outlook.com",
      body: "I like to play this game in the multiplayer mode. Happens a lot of things at the same time, i love that chaos"
    },
    {
      id: 3,
      postId: 1,
      email: "hawkjust@gmail.com",
      body: "I played this game so much time in my life, like, when it was released i bought and played the entire day"
    },
 
    
    {
      id: 7,
      postId: 3,
      email: "henrysam@gmail.com",
      body: "This game is amazing! Honestly, this is the best game i ever played in my life, the enviroment, everything is this game is just perfect."
    },
    {
      id: 8,
      postId: 3,
      email: "zorobruce@gmail.com",
      body: "I died so many time in this game, the worst part was the fight with malenia LOL"
    },
    {
      id: 9,
      postId: 3,
      email: "kathrin@gmail.com",
      body: "I dropped this game i while ago but i guess im going to start over gain tomorrow."
    },
    {
      id: 10,
      postId: 4,
      email: "ViviMile@gmail.com",
      body: "Ownn this game is so cute! I love to played it, i love this orange cat"
    },
    {
      id: 11,
      postId: 4,
      email: "TryBrance@outlook.com",
      body: "I cried so much at the begginer of this game. The way he fell and all the other cats was looking at him :'c"
    },
    {
      id: 12,
      postId: 4,
      email: "BachiTina@gmail.com",
      body: "The history of this game is amazing, the underground city, the robots, the cat (especially) is amaziingggggg"
    },
    {
      id: 13,
      postId: 5,
      email: "LittleGod@yahoo.com",
      body: "I played all the other GOW games after this one, the improve in those games is huge!"
    },
    {
      id: 14,
      postId: 5,
      email: "ZacZic@gmail.com",
      body: "The history of this is game is like no other, the character development of this two are amazing"
    },
    {
      id: 15,
      postId: 5,
      email: "MachPet@gmail.com",
      body: "This game made me release of family is"
    },
    {
      id: 16,
      postId: 6,
      email: "TrizPam@yahoo.com",
      body: "I never played this game but it looks amazing, i watched my friends played and i want too "
    },
    {
      id: 17,
      postId: 6,
      email: "CaitPath@outlook.com",
      body: "This wolrd is huuuge! This whole world looks alive, i never seen anything like that"
    },
    {
      id: 18,
      postId: 6,
      email: "DaniLiad@gmail.com",
      body: "The story of this game it is so sad"
    },
    {
      id: 19,
      postId: 7,
      email: "TheTryHardest@gmail.com",
      body: "It was the firts Souls Like i played, the first really hard game"
    },
    {
      id: 20,
      postId: 7,
      email: "LordOfTheCind@yahoo.com",
      body: "The Nameless King was so f* hard omg. I guess i have died at least 30 times LOL"
    },
    {
      id: 21,
      postId: 7,
      email: "JoJoGame@gmail.com",
      body: "Everyone say that this game is so hard and stuff like that, but i dont think that. It was really easy to me"
    },
  ]


