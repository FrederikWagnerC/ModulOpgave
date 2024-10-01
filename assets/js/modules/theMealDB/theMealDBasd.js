export default async function getAllMealCategories() {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error
        })
}

export async function getSingleMealBySearch(searchValue) {
    if (searchValue) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No search value provided');
    }
    
}

export async function getMealsByFirstLetter(letter) {
    if (letter) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No letter provided');
    }
}

export async function getSingleMealById(id) {
    if (id) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No id provided');
    }
}

export async function getRandomMeal() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error
        })
}

export async function getAllMealCategoriesList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error
        })
}

export async function getAllAreasList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error
        })
}

export async function getAllIngredientsList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error
        })
}

export async function getMealsByMainIngredient(ingredient) {
    if (ingredient) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No ingredient provided');
    }
}

export async function getMealsByCategory(category) {
    if (category) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No category provided');
    }
}

export async function getMealsByArea(area) {
    if (area) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
    } else {
        console.log('No area provided');
    }
}