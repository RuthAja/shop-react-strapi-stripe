import React from 'react'
import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'

export const Product = () => {
    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
    return (
        <div className='product'>
            {error ? (
                'Something Wrong in Product Page'
            ) : loading ? (
                'Loading....'
            ) : (
                <>
                    <div className='left'>
                        <div className='images'>
                            <img
                                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                                alt=''
                                onClick={(e) => setSelectedImg('img')}
                            />
                            {data?.attributes?.img2?.data == null ? (
                                ' '
                            ) : (
                                <img
                                    src={
                                        process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url
                                    }
                                    alt=''
                                    onClick={(e) => setSelectedImg('img2')}
                                />
                            )}
                        </div>
                        <div className='mainImg'>
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.[selectedImg]?.data?.attributes?.url
                                }
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <h1>{data?.attributes?.title}</h1>
                        <span className='price'>Rp. {data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className='quantity'>
                            <button onClick={(e) => setQuantity((hugla) => (hugla === 1 ? 1 : hugla - 1))}>-</button>
                            {quantity}
                            <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
                        </div>
                        <button
                            className='add'
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: data.id,
                                        title: data.attributes.title,
                                        desc: data.attributes.desc,
                                        price: data.attributes.price,
                                        img: data.attributes.img.data.attributes.url,
                                        quantity,
                                    })
                                )
                            }>
                            <AddShoppingCartIcon /> Tambahkan ke Keranjang
                        </button>
                        <div className='links'>
                            <div className='item'>
                                <FavoriteBorderIcon /> Tambahkan ke Wish List
                            </div>
                            <div className='item'>
                                <BalanceIcon /> Bandingkan
                            </div>
                        </div>
                        <div className='info'>
                            <span>Vendor: Polo</span>
                            <span>Product Type: {data?.attributes?.sub_categories?.data?.[0].attributes?.title}</span>
                            <span>
                                Tag: {data?.attributes?.sub_categories?.data?.[0].attributes?.title},{' '}
                                {data?.attributes?.categories?.data?.[0].attributes?.title}, {data?.attributes?.type}
                            </span>
                        </div>
                        <hr />
                        <div className='info'>
                            <span>DESCRIPTION</span>
                            <hr />
                            <span>ADDITIONAL INFORMATION</span>
                            <hr />
                            <span>FAQ</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
