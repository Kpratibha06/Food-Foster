import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{

    //using selector take care of things which you are going to subscribe
const cartItems = useSelector((store)=> store.cart.items)
const dispatch = useDispatch();

const handleClearCart = () =>{
    dispatch(clearCart())
}
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto p-4">
                <button className="p-2 m-2 bg-black text-white text-sm rounded-lg"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && <h1 className="font-serif text-xl m-10 p-10">Please, add items in the cart.</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;