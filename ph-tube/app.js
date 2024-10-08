const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCat(data.categories))
    .catch(err => console.log(err))
}


const displayCat = (categories) => {
    const catContainer = document.getElementById('categories');
    categories.forEach((item) => {
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        catContainer.appendChild(button);
    });
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .then(err => console.log(err))

}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videos.forEach((video) => {
        console.log(video);
        const div = document.createElement('div');
        div.classList = "video";
        div.innerHTML = `
        <div class="card card-compact">
            <figure class="h-[200px] relative">
                <img class="w-full h-full object-cover"
                src="${video.thumbnail}"
                alt="thumbnail" />
                <span class="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full">${video.others.posted_date}</span>
            </figure>
            <div class="px-0 py-2 flex gap-3 items-center">
                <div>
                    <img src="${video.authors[0].profile_picture}" alt="author" class="w-10 h-10 rounded-full object-cover" />
                </div>
                <div>
                    <h2 class="text-2xl font-bold">${video.title}</h2>
                    <div class="flex gap-2 items-center">
                        <p class="text-sm text-gray-500">${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified === true ? `<img src="./assets/icons8-verified-48.png" alt="verified" class="w-4 h-4" />` : ''}
                    </div>
                    
                </div>
            </div>
            </div>
        `
        videoContainer.appendChild(div);
    })
}


          
loadCategories();
loadVideos();