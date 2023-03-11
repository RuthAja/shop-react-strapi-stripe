import React from 'react'
import { Card } from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'

export const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    console.log(data)
    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos, doloremque, animi veritatis
                    molestias vero reiciendis est repudiandae eligendi cumque voluptatibus unde, hic vel accusantium
                    distinctio officiis tempora obcaecati eum!
                </p>
            </div>
            <div className='bottom'>
                {error
                    ? 'ada yang error tuh..'
                    : loading
                    ? 'Loading...'
                    : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}
