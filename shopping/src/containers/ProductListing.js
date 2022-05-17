import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { setProduct } from '../redux/actions/productAction'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })

       dispatch(setProduct(response.data))
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing