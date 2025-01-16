import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  let { id } = useParams(); //id에 대한 파라미터 값

  const data = async () => {
    try {
      const resposne = await axios.get(`https://my-json-server.typicode.com/kyeong-hee/bape/products/${id}`)
      setProduct(resposne.data);
    } catch (error) {
      console.log("ERROR")
    }
  }
  console.log(product);

  useEffect(() => {
    data();
  }, [id])
  return (
    <div className="productdetail">
      <div className="inner">
        <img src={product?.img} alt={product?.title} />
        <div className="desc">
          <h3>{product?.title}</h3>
          <h4>price: {product?.price}</h4>
          <p>{product?.new ? "New Item" : ""}</p>
          <p>size</p>
          <ul>
            {product?.size.map((size, idx) => (
              <li key={idx}>{size}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail