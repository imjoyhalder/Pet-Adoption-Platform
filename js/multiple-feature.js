
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

const loadDetails = async (petId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await res.json()
    console.log(data.petData)
    displayDetails(data.petData)
}
const demoJson = {"petData": {
    "petId": 14,
    "breed": "Mini Rex",
    "category": "Rabbit",
    "date_of_birth": "2023-06-01",
    "price": 220,
    "image": "https://i.ibb.co.com/MPJmYwc/pet-14.jpg",
    "gender": "Female",
    "pet_details": "This sweet female Mini Rex rabbit, born on June 1, 2023, is known for her soft fur and friendly personality. Priced at $220, she's a great choice for families looking for a cuddly companion. Note that she is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Fluffy"
  }
}
const displayDetails = (item) =>{
    const detailsContainer = document.getElementById('modalContent')

    detailsContainer.innerHTML = `
        <img class="w-full rounded-2xl object-cover" src= ${item.image} alt="">
                <div class="space-y-1 pb-3 grid gir pt-2">
                    <h1 class="font-bold text-xl">${item.pet_name}</h1>
                    <div class=" grid grid-cols-2">
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
                            <h1>Vaccinated: ${item.vaccinated_status}</h1>
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
                    <div>
                        <h1 class="font-bold text-lg">Details Information</h1>
                        <p id="information" class="pt-3">${item.pet_details}</p>
                    </div>
                </div>

    `
    document.getElementById('myModal').showModal()
}

const displayPateCard = (pateDetailsArray='') => {
    const cardContainer = document.getElementById('petsCardContainer')
    cardContainer.innerHTML = ' '
    if(pateDetailsArray.length == 0){
        const errorCard = document.createElement('div')
        cardContainer.innerHTML = `
            <img src = 'images/error.webp'/>
        `
    }
    pateDetailsArray.forEach((item) => {
        //console.log(item)
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
                        <button onclick = "loadDetails('${item.petId}')" id ='detailsBtn' class="btn w-16 btn-active border-s-lime-500">Details</button>
                    </div>
        `
        petCard.classList = "card px-3 pt-3 pb-3 w-72 bg-orange-50 "

        cardContainer.appendChild(petCard)
    })
}

//  sort by price
const loadData = async(data) =>{
    return data.sort((a,b)=> b.price - a.price)
}
const sortbyPrice = async ()=>{
    const res = await fetch (`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json()
    //console.log(data.pets[0].price);

    const petPrice = loadData(data.pets)
    console.log(petPrice);
    document.getElementById('')
}
sortbyPrice()


loadPetCategory()
loadPetData()
