
const searchMealHandler = () => {
    const searchInput = document.getElementById("input");
    const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
    fetch(searchURL)
        .then(res => res.json())
        .then(data => createMeals(data.meals));
        searchInput.value = "";
}

// meal List ....
const createMeals = (meals) => {
    const mealsElement = document.getElementById("meals");
    for (let i = 0; i <= meals.length; i++) {
        const meal = meals[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = "singleMeal";
        mealDiv.id = 'singleMeal';
        const mealInfo = `
        <img src="${meal.strMealThumb}"> 
        <h3>${meal.strMeal}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsElement.appendChild(mealDiv);

        // single Meal Details .......
        mealDiv.addEventListener('click', function () {
            console.log("I am clicked");
        })
    }

}