
const loadPetData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
    //console.log(data.pets);
    displayPateCard(data.pets)
}
 
const loadPetCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json()
    //console.log(data.categories);
    displayPetCategoryBtn(data.categories)
}

const loadAllCategory = async (categoryName) => {
    try {
        //console.log(categoryName);
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
        const info = await res.json(); // Wait for JSON conversion
        //console.log(info.data); // Access `data` safely
        displayPateCard(info.data)
    } catch (error) {
        console.error("Error fetching category data:", error);
    }
};

const displayPetCategoryBtn = (petCategoryArray) => {
    const categoryContainer = document.getElementById('petCategoryContainer')
    petCategoryArray.forEach((item) => {
        // Ensure category is safe for id
        const safeCategory = item.category.replace(/\s+/g, '-');

        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML = `
            <button id="${safeCategory}" class="btn btn-active w-36 h-14 rounded-2xl category-btn">
                <img class="w-9" src="${item.category_icon}" alt="">
                <p class="font-bold text-xl">${item.category}</p>
            </button>
        `
        categoryContainer.appendChild(categoryBtn)

        // Attach event listener after adding to DOM
        document.getElementById(safeCategory).onclick = () => loadAllCategory(item.category)
    })
}

const displayPateCard = (pateDetailsArray='') => {
    const cardContainer = document.getElementById('petsCardContainer')
    
    if(pateDetailsArray.length == 0){
        const errorCard = document.createElement('div')
        cardContainer.innerHTML = `
            <img src = 'images/error.webp'/>
        `
    }
    pateDetailsArray.forEach((item) => {
        const petCard = document.createElement('div')
        petCard.innerHTML = `
            <figure class="">
                        <img src= ${item.image} alt="Shoes" class="rounded-xl object-cover" />
                    </figure>
                    <div class="space-y-1 pb-3">
                        <h1 class="font-bold text-xl">${item.pet_name}</h1>
                        <div class="flex items-center gap-1">
                            <img class="size-4" src="https://img.icons8.com/?size=24&id=82774&format=png" alt="">
                            <h1>Breed:  ${item.breed}</h1>
                        </div>
                        <div class="flex items-center gap-1">
                            <img class="size-5" src="https://img.icons8.com/?size=48&id=WGDB4PoaXTo5&format=png" alt="">
                            <h1>Birth: ${item.date_of_birth}</h1>
                        </div>
                        <div class="flex items-center gap-1">
                            <img class="size-4" src="https://img.icons8.com/?size=25&id=2LHzVg3k4AqG&format=png" alt="">
                            <h1>Gender: ${item.gender}</h1>
                        </div>
                        <div class="flex items-center gap-1">
                            <img class="size-4" src="https://img.icons8.com/?size=24&id=85801&format=png" alt="">
                            <h1>Price: ${item.price}</h1>
                        </div>
                    </div>
                    <hr class="border-gray-300 ">
                    <div class=" flex justify-between items-center pt-3 border-collapse ">
                        <button class="btn w-16 btn-active border-s-lime-500"><img class=" " src="https://img.icons8.com/?size=24&id=83997&format=png" alt=""></button>
                        <button class="btn w-16 btn-active border-s-lime-500">Adopt</button>
                        <button class="btn w-16 btn-active border-s-lime-500">Details</button>
                    </div>
        `
        petCard.classList = "card px-3 pt-3 pb-3 w-72 bg-orange-50 "
        cardContainer.appendChild(petCard)
    })
}


loadPetCategory()
loadPetData()