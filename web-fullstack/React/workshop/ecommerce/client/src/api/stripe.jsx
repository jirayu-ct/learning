import axios from 'axios';


export const payment = async(token) => {
    return await axios.post('http://localhost:3000/api/user/create-payment-intent', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}