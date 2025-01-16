import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';


function ProductAll() {
  const [productList, setProductList]  = useState([]);
  
  // query가져오기
  const [query] = useSearchParams();

  const data = async () =>{
    const searchQuery = query.get('q') || ""; //url 검색어 가져오기 
    console.log(searchQuery);
    try{
      const resposne = await axios.get(`https://my-json-server.typicode.com/kyeong-hee/bape/products?q=${searchQuery}`)
      const filterData = resposne.data.filter(item=>
        item.title.includes(searchQuery) //title필드에 검색 여부 확인
      )
      setProductList(filterData);
    }catch(error){
      console.log("error")
    }
  }



  // const data = async () => {
  //   const response = await axios.get("http://localhost:7000/products")
  //   setProductList(response.data)
  // }


  useEffect(() => {
    data();
  }, [query])

  console.log(productList);

  return (
    <div className="contents">
      <h1>전체상품</h1>
      {
        productList.map(menu => (
          <ProductCard key={menu.id} item={menu} />
        ))
      }
     
    </div>
  )
}

export default ProductAll