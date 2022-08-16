const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const postEl = document.getElementById("post-container")


let postElText = ""
let likes = ""
let heart = "" 
let img = ""
       
for (let i = 0; i < posts.length; i++) {
    likes = "likes" + i
    heart = "heart" + i
    img = "image"+ i
    
     postElText += `
                    <header>
                        <img src=${posts[i].avatar} 
                            class="avatar" 
                            alt="avatar of artist"
                            >
                            
                        <div >
                            <p class="bold">${posts[i].name}</p>
                            <p class="avatar--place">${posts[i].location}</p>
                        </div>
                        
                    </header>
            
                    <img src=${posts[i].post} class="main-img imageListener" 
                            alt="self portrait of artist" id=${img}>
        
                    <section>
                            <div class="icon-container">
                                <img src="images/icon-heart.png" 
                                class="icon heartListener" 
                                id=${heart}
                                >
                                <img src="images/icon-comment.png" class="icon">
                                <img src="images/icon-dm.png" class="icon">
                            <div>
                            <p class="bold" id=${likes}>${posts[i].likes} likes</p>
                            <span class="bold">${posts[i].username} </span>
                            <p class="comment">${posts[i].comment}</p>
                    </section>
                    
                    <div class="spacer"></div>`
    }
    
    postEl.innerHTML = postElText 
    

 
 document.querySelectorAll('.heartListener').forEach(item => {
    item.addEventListener('click',  event => {
        for (let i = 0; i < posts.length; i++) {
            let idLikes = "likes" + i
            let idHeart = "heart" + i
            if (idHeart === event.target.id) {
                let likesEl = document.getElementById(idLikes)
                let heartEl = document.getElementById(idHeart)
                posts[i].likes += 1
                likesEl.textContent= `${posts[i].likes} likes`
                heartEl.src = "images/red-heart.png"
                }
            }
        })
    } 
)   

document.querySelectorAll('.imageListener').forEach(item => {
    item.addEventListener('dblclick',  event => {
        for (let i = 0; i < posts.length; i++) {
            let idLikes = "likes" + i
            let idImage = "image" + i
            let idHeart = "heart" + i
            if (idImage === event.target.id) {
                let likesEl = document.getElementById(idLikes)
                let heartEl = document.getElementById(idHeart)
                posts[i].likes += 1
                likesEl.textContent= `${posts[i].likes} likes`
                heartEl.src = "images/red-heart.png"
                }
            }
        })
    } 
)   
 
     
     
 
    
   
     
