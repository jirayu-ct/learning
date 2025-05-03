import axios from "axios"



const HeaderExample = () => {
    const handleClick = async () => {
        const headers = {
            'Authorization': `Bearer {you_token}`
        }

        const url = 'http://localhost:3001/api/book/list'
        const res = await axios(url, {
            headers
        })
        console.log(res.data)
    }

    return (
        <div>
            <h1>Header Example</h1>
            <button className="button" onClick={handleClick}>Click me</button>
        </div>
    )
}
export default HeaderExample