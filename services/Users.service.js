const url = 'http://localhost:3000'

export async function getUsers() {
    const request = `${url}/usuarios`
    try {
        const response = await fetch(request, {
            method: 'GET'
        })
        const data = await response.json()
        return data.data;
    } catch (e) {

    }
}

export async function createUser(user) {
    const request = `${url}/usuarios`;
    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data

    } catch (e) {

    }
}

export async function updateUser(user) {
    const request = `${url}/usuarios`;
    try {
        const response = await fetch(request, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data

    } catch (e) {

    }
}