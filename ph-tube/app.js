const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCat(data.categories))
    .catch(err => console.log(err))
}


const displayCat = (categories) => {
    const catContainer = document.getElementById('categories');
    categories.forEach((item) => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadVideosByCategory(${item.category_id})" class="btn category-btn px-4 py-2 rounded-xl">${item.category}</button>
        `
        catContainer.appendChild(buttonContainer);
    });
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .then(err => console.log(err))

}

const loadVideosBySort = (sort) => {
    
}


const loadVideosBySearch = async(search) => { 
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayVideos(data.videos);
}  

const removeActiveClass = () => {
    const button = document.getElementsByClassName('category-btn');
    for(let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
    }

}

const loadVideosByCategory = (id) => {

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('active');
        displayVideos(data.category)
    })
    .then(err => console.log(err))
}


const loadDetails = async (video) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayDetails(data.video);
};

const displayDetails = (video) => {
    const detailContainer = document.getElementById('modalContent');

    detailContainer.innerHTML = `
        <img src="${video.thumbnail}" alt="thumbnail" class="w-full h-96 object-cover" />
        <p class="text-2xl font-bold mt-5">${video.title}</p>
        <p class="text-gray-500 mt-2">${video.description}</p>
    `;
    // way-1
    // document.getElementById('ShowModal').click();
    // way-2
    document.getElementById('my_modal_5').showModal();
}




const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = '';
    if(videos.length === 0) {
        videoContainer.classList.remove('grid');
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="flex flex-col gap-5 justify-center items-center ">
                <img src="./assets/icon.png" alt="ghost" class="w-20 h-20" />
                <h2 class="text-2xl font-bold text-center">No Videos Found</h>  
                </div> 
        `
        videoContainer.appendChild(div);
        return;
    }
    else {
        videoContainer.classList.add('grid');
        videos.forEach((video) => {
            const getTime = (time) => {
                let sec =time % 60;
                let mn = Math.floor(time / 60);
                let hr = Math.floor(mn / 60);
    
                mn = mn % 60;
                let day = Math.floor(hr / 24);
                hr = hr % 24;
                let month = Math.floor(day / 30);
                day = day % 30;
                let year = Math.floor(month / 12);
                month = month % 12;
                return `${year > 0 ? year + 'y' : ''} ${month > 0 ? month + 'm' : ''} ${day > 0 ? day + 'd' : ''} ${hr > 0 ? hr + 'h' : ''} ${mn > 0 ? mn + 'm' : ''} ${sec > 0 ? sec + 's' : ''}`;
            }
            const div = document.createElement('div');
            div.classList = "video";
            div.innerHTML = `
            <div class="card card-compact">
                <figure class="h-[200px] relative">
                    <img class="w-full h-full object-cover"
                    src="${video.thumbnail}"
                    alt="thumbnail" />
                    ${video.others.posted_date?.length === 0 ? "" : `<span class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">${getTime(video.others.posted_date)} ago</span>`}
                </figure>
                <div class="px-0 py-2 flex gap-5 items-center">
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
                    <p> <button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button>   </p>
                </div>
                </div>
            `
            videoContainer.appendChild(div);
        })
    }
}

document.getElementById('search').addEventListener('keyup', (e) => {
    const search = e.target.value;
    if(search.length > 0) {
        loadVideosBySearch(search);
    }
    else {
        loadVideos();
    }
});


document.getElementById('sorting').addEventListener('click', (e) => {
    const sort = e.target.value;
    
});
          
loadCategories();
loadVideos();