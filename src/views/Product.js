import React, { useState } from 'react'
import axios from 'axios'

function Product() {
    const url = "https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/3"
    const [product, setProduct] = useState(null)

    axios.get(url).then(response => {
        setProduct(response.data)
    })


    return(
        <div>
            <p>The Product page</p>
        </div>
    )
}

export default Product