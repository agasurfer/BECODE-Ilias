

    // DOM VARIABLES
const submit = document.querySelector(".submit");
const closebtn = document.querySelector(".close");
const input = document.querySelector(".search");
const message = document.querySelector(".searchMsg")

// MAKES THE CLICK SUBMIT REQUEST
submit.addEventListener("click", () => {
    const query = document.querySelector(".search").value;
    fetchMeal(query);
    clearSearch();
    
});

input.addEventListener('keypress',(event) => {
    if (event.key === "Enter") {
        const query = document.querySelector(".search").value;
    fetchMeal(query);
    clearSearch();
    }
})


// ASYNC FUNCTION THAT GETS TO THE DATABASE
let fetchMeal = async (query) => {
    if (!query || query === "")
        return;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // Insert function display meals if there are results
        if (data.meals) {
            displayMeals(data.meals);
            message.innerText = `These are the results for "${query}"`
        } else {
            console.log("No meals found.");
            message.innerText = `No meals found for "${query}"`
        }
    } catch (err) {
        console.log("Something wrong happened", err);
    }
};

// FUNCTION THAT DISPLAYS MEALS
function displayMeals(meals) {
    const resultsGrid = document.querySelector(".results-grid");
    resultsGrid.innerHTML = ""; 

    meals.forEach((element) => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");

        mealCard.innerHTML = `
            <img src="${element.strMealThumb}" alt="${element.strMeal}">
            <h3>${element.strMeal}</h3>
        `;

        // Add click event to open modal with current meal
        mealCard.addEventListener("click", () => openModal(element));

        resultsGrid.appendChild(mealCard);
    });
}

//FUNCTION THAT HANDLES MODAL

function openModal(element) {
    const modal = document.querySelector(".modal");
    modal.style.display = "block"

    document.querySelector(".mealImage").src = element.strMealThumb;
    document.querySelector(".mealTitle").textContent = element.strMeal;
    document.querySelector(".mealInstructions").textContent = element.strInstructions;

    const ingredientsList = document.querySelector(".ingredientsList");
    ingredientsList.innerHTML = "";

      for (let i = 1; i <= 20; i++) {
        const ingredient = element[`strIngredient${i}`];
        const measure = element[`strMeasure${i}`];
        if (ingredient) {
            const listItem = document.createElement('li');
            listItem.textContent = `${measure} ${ingredient}`;
            ingredientsList.appendChild(listItem);
        }
    }
    
    document.querySelector('.mealInstructions').textContent = element.strInstructions;
    document.querySelector('.modal').style.display = 'flex';

    const video = document.querySelector(".mealVideo")
    video.href = element.strYoutube
    video.innerText = element.strYoutube

  

}

  closebtn.addEventListener('click', () => {
        closeModal()
    })

//FUNCTION THAT CLOSES MODAL
function closeModal() {
    document.querySelector(".modal").style.display = "none";
}

//FUNCTION THAT CLEARS THE SEARCHBAR
const clearSearch = () => {
    document.querySelector(".search").value = "";
};