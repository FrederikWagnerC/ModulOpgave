export const app = document.getElementById('app');
import { getRandomMeal } from "./modules/theMealDB/theMealDBasd.js";
import  buildHomepage  from "./modules/opgave2/homepage.js";



export function buildHomepageMain() {
    
        
    let meals = [];

    for (let i = 0; i < 10; i++) {
        getRandomMeal().then((data) => {
            meals.push(data.meals[0]);
            if (meals.length === 10) {
                buildHomepage(meals);
            }
        });
    }

    
    
    
}
    
buildHomepageMain();


