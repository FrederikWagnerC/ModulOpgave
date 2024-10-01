import { app } from "../../site.js";
import  singleProduct  from "../opgave2/singleProduct.js";

export default function buildHomepage(meals) {
    app.innerHTML = '';
    let mealsHTML = '';
    
    meals.forEach((meal, index) => {
        console.log(meal.idMeal);
        
        mealsHTML += `
        <div class="meal">
            <h3>Recipe: ${index + 1} ${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p>${meal.strInstructions}</p>
            <div id="button${index}"></div>
        </div>
        `;
    });

    app.innerHTML = `
    <h2>Homepage</h2>
    <div class="meals">
        ${mealsHTML}
    </div>
    `;

    meals.forEach((meal, index) => {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.innerHTML = 'Read more';
        button.addEventListener('click', function() {
            productCallback(meal.idMeal);
        });
        document.getElementById(`button${index}`).appendChild(button);
    });
}

function productCallback(id) {
    singleProduct(id);
}
