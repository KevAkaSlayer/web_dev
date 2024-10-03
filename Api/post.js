function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}



function displayPosts(posts) {
    const postDiv = document.getElementById('post-container');
    for(const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postDiv.appendChild(div);
    }
}


const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 


loadPost();