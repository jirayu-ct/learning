//Generics
function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn)
}


const numbers1: Array<number> = [1, 2, 3, 4, 5]
const numbers2: number[] = [1, 2, 3, 4, 5]

type PostData = {
    userId: number
    id: number
    title: string
    body: string
}

async function fetchData<T>(url: string): Promise<T> {
    return await fetch(url).then((res) => res.json())
}
 

const data1 = await fetchData<PostData>('https://jsonplaceholder.typicode.com/posts/1')
const data2 = await fetchData<PostData[]>('https://jsonplaceholder.typicode.com/posts')
const data3 = await fetchData<{ id: number; title: string; }>('https://dummyjson.com/products/1?select=title')