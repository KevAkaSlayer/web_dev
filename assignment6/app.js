
// categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((response) => response.json())
        .then((data) => { displayCategories(data.categories)});
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category");
    categories.forEach((cat) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button id="" class="btn border border-green-200 px-10 text-xl font-bold rounded-xl "><span><img src="${cat.category_icon}" class="w-8 h-8"></span> ${cat.category} </button>
        `
        categoryContainer.appendChild(categoryDiv);
    })
}



// all pets
const loadCards = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((response) => response.json())
        .then((data) => { displayCard(data.pets);});
}

const displayCard = (pets) => {
    const cardContainer = document.getElementById("pet-card");
    pets.forEach((pet) => {
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl">
        <figure class="px-10 pt-10">
            <img
            src="${pet.image}"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
            <div class="flex flex-col items-start px-10 py-3">
                <h2 class="text-2xl font-bold">${pet.pet_name}</h2>
                <div class="flex items-center gap-2">
                <span><img class="w-6 h-6" src="./images/icons8-windows-50.png" alt=""></span>
                <p class="text-xl font-semibold opacity-70">Breed: ${pet.breed}</p>
                </div>
                <div class="flex items-center gap-2">
                <span><img src="./images/icons8-date-24.png" alt=""></span>
                <p class="text-xl font-semibold opacity-70">Birth: ${pet.
                    date_of_birth}</p>
                </div>
                <div class="flex items-center gap-2">
                <span><img class="w-6 h-6" src="./images/icons8-gender-50.png" alt=""></span>
                <p class="text-xl font-semibold opacity-70">Gender: ${pet.gender}</p>
                </div>
                <div class="flex items-center gap-2">
                <span><img src="./images/icons8-dollar-24.png" alt=""></span>
                <p class="text-xl font-semibold opacity-70">Price: ${pet.price}$</p>
                </div>
                
                <hr class="w-full border-1 border-gray-300 my-3">
                <div class="flex justify-center gap-10">
                <button class="btn border border-green-200"><img src="./images/icons8-like-64 .png" class="h-6 w-6"></button>
                <button class="btn border border-green-200 text-green-500">Adopt</button>
                <button id="modal" onclick="myModal.showModal()" class="btn  border border-green-200 text-green-500">Details</button>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(cardDiv);
    });
}






loadCards();
loadCategories();







