
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
        <button onclick="singleCountryDetails(${meal.idMeal})">ClickMe</button> 
        `;
        mealDiv.innerHTML = mealInfo;
        mealsElement.appendChild(mealDiv);


        // mealDiv.addEventListener('click', function(){
        //     alert("I can't do item details. Please make a Video Solve this problem. and Upload in a Module");
        // })
    }

}

const singleCountryDetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    fetch(url)
        .then(response => response.json())
        .then(data => renderingMeal(data.meals));
}

const renderingMeal = meal => {
    const mealDetails = document.getElementById('meals-details');
    mealDetails.className = 'ingredient';

    mealDetails.innerHTML = `
    <img src = ${meal[0].strMealThumb}>
    <h2>${meal[0].strMeal}</h2>
    `
    mealDetails.appendChild(singleMealDiv);

}