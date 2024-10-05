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
    videos.forEch((video) => {
        const div = document.createElement('div');
        div.classList = "video";
        div.innerHTML = `
        <img src="${video.thumbnail}" alt="thumbnail">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        `
        videoContainer.appendChild(div);
    })
}


          
loadCategories();
loadVideos();