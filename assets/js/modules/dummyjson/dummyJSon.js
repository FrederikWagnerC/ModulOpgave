let limit = 30;

export default async function getAllProducts(limit) {
    if(!limit && limit !== 0) {
        limit = 30;
    }
    return fetch(`https://dummyjson.com/products?limit=${limit}`) 
    
    .then(response => {
            console.log(response);
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
// This function fetches a list of all products from the dummyjson.com API and returns the data as a promise.

export async function getSingleProduct(id) {
    if (id) {
        return fetch(`https://dummyjson.com/products/1${id}`)
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

export async function getSearchProduct(searchValue) {
    if (searchValue) {
    return fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            if (data.products.length === 0) {
                console.log('No products found');
            } else {
                return data;
            }
        })
        .catch((error) => {
            console.log(error);
            return error
        })
    } else {
        console.log('No search value provided');
    }
}

export async function getProductsCategories() {
    return fetch('https://dummyjson.com/products/categories')
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

export async function getProductsCategorieList() {
    return fetch('https://dummyjson.com/products/categories-list')
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

export async function getProductsByCategory(category) {
    if (category) {
        return fetch(`https://dummyjson.com/products/category/${category}`)
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
    


