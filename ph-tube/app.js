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
          
loadCategories();