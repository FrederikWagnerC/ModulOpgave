import { app } from '../../site.js';
import { getSingleMealById } from '../theMealDB/theMealDBasd.js';
import {buildHomepageMain} from '../../site.js';


export default function singleProduct(id) {
    app.innerHTML = ``
    console.log(id);

    getSingleMealById(id).then((meal) => {
        console.log(meal.meals[0]);
        let mealHTML = `
        <div class="meal">
            <div id=button></div>
            <h3>${meal.meals[0].strMeal}</h3>
            <img src="${meal.meals[0].strMealThumb}" alt="${meal.meals[0].strMeal}">
            <p>${meal.meals[0].strInstructions}</p>
        </div>
    `;

        app.innerHTML = `
        <h2>Single product</h2>
        ${mealHTML}
    `;

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = 'Back to homepage';
    button.addEventListener('click', function() {
        buildHomepageMain();
    });
    document.getElementById('button').appendChild(button);
    })
}