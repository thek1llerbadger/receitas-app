const url = 'http://localhost:3000'

export async function getRecipes() {
    const request = `${url}/receitas`
    try {
        const response = await fetch(request, {
            method: 'GET'
        })
        const data = await response.json()
        return data.data;
    } catch (e) {

    }
}

export async function createRecipe(recipe) {
    const request = `${url}/receitas`;
    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        const data = await response.json()
        return data

    } catch (e) {

    }
}

export async function updateRecipe(recipe) {
    const request = `${url}/receitas`;
    try {
        const response = await fetch(request, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        const data = await response.json()
        return data

    } catch (e) {

    }
}