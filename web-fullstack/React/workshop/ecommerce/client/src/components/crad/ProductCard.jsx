import { ShoppingCart } from 'lucide-react';
import useEcomStore from '../../store/ecom-store';

const ProductCard = ({ item }) => {
    const actionAddCart = useEcomStore((state) => state.actionAddCart)

    return (
        <div className="border rounded-md shadow-md p-2 w-full h-full flex flex-col">
            <div className="aspect-square overflow-hidden rounded-md">
                {item.images && item.images.length > 0 ? (
                    <img 
                        src={item.images[0].url} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                        alt={item.title}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>

            <div className="py-2 flex-grow">
                <h3 className="text-lg font-semibold line-clamp-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold text-blue-600">{item.price} บาท</span>
                <button 
                    onClick={() => actionAddCart(item)}
                    className="bg-blue-500 rounded-md p-2 hover:bg-blue-600 transition-colors duration-200"
                >
                    <ShoppingCart className="text-white" />
                </button>
            </div>
        </div>
    )
}
export default ProductCard