import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '../../makeRequest'

export const Cart = () => {
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const stripePromise = loadStripe(
        'pk_test_51MhNrCA5DFOg0hSnPP4Iad3Lau3ndNPwUwgc6SVLet8iZJbzz6KNAg6Pkz92LvPIFoHY4Q803IxPNSPbFKvQWlW600pFZOSmLM'
    )
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            const res = await makeRequest.post('/orders', {
                products,
            })
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='cart'>
            <h1> Barang yang ada di keranjang</h1>
            {products?.map((item) => (
                <div className='item' key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        {/* <p>{item.desc?.substring(0, 30)}</p> */}
                        <p>{item.desc.length > 30 ? item.desc?.substring(0, 30) + '...' : item.desc}</p>
                        <div className='price'>
                            {item.quantity} Rp.{item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>Rp.{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    )
}
export default Cart
