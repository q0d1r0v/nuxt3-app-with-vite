export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        return Promise.resolve(data.json())
    } catch(e) {
        return Promise.reject(e)
    }
})