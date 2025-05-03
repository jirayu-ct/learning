import axios from "axios"


const HttpExample = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const payload = {
        title: 'food',
        body: 'bar',
        userId: 1
    }

    const handleGet = async () => {
        const res = await axios.get(url)
        console.log(res.data)
    }

    const handlePost = async () => {
        const res = await axios.post(url, payload)
        console.log(res.data)
    }

    const handlePut = async () => {
        const res = await axios.put(`${url}/1`, payload)
        console.log(res.data)
    }
    
    const handleDelete = async () => {
        const res = await axios.delete(`${url}/1`)
        console.log(res.data)
    }


  return (
    <div>
        <h1>Http Example</h1>
        <button className="button" onClick={handleGet}>Get</button>
        <button className="button" onClick={handlePost}>Post</button>
        <button className="button" onClick={handlePut}>Put</button>
        <button className="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default HttpExample