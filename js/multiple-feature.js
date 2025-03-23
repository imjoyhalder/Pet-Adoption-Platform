
const loadPetData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
    console.log(data.pets);
    displayPateCard(data.pets)
}

const displayPateCard = (pateDetailsArray) =>{
    const cardContainer = document.getElementById('petsCardContainer')
    
}

const loadPetCategory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json()
    console.log(data.categories);
    displayPetCategory(data.categories)
}

const displayPetCategory = (petCategoryArray) =>{
    const categoryContainer = document.getElementById('petCategoryContainer')
    
    petCategoryArray.forEach((item)=>{
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML = `
            <button class="btn btn-active w-36 h-14 rounded-2xl">
                <img class=" w-9 " src= ${item.category_icon} alt="">
                <p class="font-bold text-xl">${item.category}</p>
            </button>
        `
        categoryContainer.appendChild(categoryBtn)
    })
    
}

loadPetCategory()