function getTimeString(time){
    
    const hour = parseInt(time/3600);
    
    let remainingSecond = time%3600;
    const minute = parseInt(remainingSecond/60);
    remainingSecond = remainingSecond%60;
    if(hour>25){
        const day = parseInt(hour/24);
        if(day>366){
            const Year = parseInt(day/365);
            console.log(Year);
            return `${Year} year`
        }
       
        else{
            
            return `${day} day ${hour} hour ${minute} minute ago`
        }
    }
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`
}


// create load categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories)
        )
        .catch(err => console.log(err))
};

// create load videos
const loadVideos = () => {
    fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
};

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaaf",
    "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
    "title": "Sticks & Stones",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
        }
    ],
    "others": {
        "views": "113K",
        "posted_date": ""
    },
    "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");

    videos.forEach((video) => {
        console.log(video)
        const card = document.createElement("div");
        card.classList = "card card-compact"
        card.innerHTML =
            `
         <figure class="h-[200px] relative">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length ==0?"":`<span class="absolute text-xs right-3 bottom-3 bg-black rounded p-1 text-white">
      ${getTimeString(video.others.posted_date)}
      </span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
  <div>
  <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
  </div>
<div>
    <h2 class = "font-bold"> ${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
   ${video.authors[0].verified ==true ? ` <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />`: ""}
    </div>
    
    <p></p>
    </div>
  </div>
  

    
  </div>
  `;
        videoContainer.append(card);
    });

}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach(item => {
        console.log(item);

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerHTML = item.category;

        //   add button to category Container
        categoryContainer.append(button)
    });
};
loadCategories();
loadVideos();