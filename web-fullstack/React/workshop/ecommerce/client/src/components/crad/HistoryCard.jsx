import { useEffect, useState } from "react"
import useEcomStore from "../../store/ecom-store"
import { getOrders } from "../../api/user"


const HistoryCard = () => {
    const token = useEcomStore((state) => state.token)

    const [orders, setOrders] = useState([])

    useEffect(() => {
        handleGetOrders(token)
    }, [])

    const handleGetOrders = async (token) => {
        try {
            const res = await getOrders(token)
            // console.log(res)
            setOrders(res.data.orders)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">ประวัติการสั่งซื้อ</h1>

            {/* คลุมทั้งหมด */}
            <div className="space-y-4">
                {/* Card Loop Order */}

                {
                    orders?.map((item, index) => {
                        // console.log(item)
                        return (
                            <div key={index} className="bg-gray-100 p-2 rounded-sm shadow-md">
                                {/* header */}
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-sm">Order Date</p>
                                        <p className="font-bold">{ item.updatedAt }</p>
                                    </div>

                                    <div>
                                        { item.orderStatus }
                                    </div>
                                </div>



                                {/* Table Loop Product */}
                                <div className="overflow-x-auto">

                                    <table key={index} className="w-full border-collapse border border-gray-300">
                                        <thead>

                                            <tr className="bg-gray-200">
                                                <th>สินค้า</th>
                                                <th>ราคา</th>
                                                <th>จำนวน</th>
                                                <th>รวม</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.products.map((product, index) => {
                                                    // console.log(product)
                                                    return (
                                                        <tr key={index}>
                                                            <td>{ product.product.title }</td>
                                                            <td>{ product.product.price}</td>
                                                            <td>{ product.count }</td>
                                                            <td>{ product.count * product.product.price }</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                </div>


                                {/* Total */}
                                <div>
                                    <div className="text-right">
                                        <p>ราคาสุทธิ</p>
                                        <p>{ item.cartTotal }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}
export default HistoryCard