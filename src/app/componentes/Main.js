'use client'
import Image from "next/image"
import styles from "./main.module.css"
import { useEffect, useState } from "react";
export default function Main(){

  const [listProduct, setListProduct] = useState([]);
  useEffect(()=> {
    const getProduct = async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

     setListProduct(data);
    }
    getProduct();
  }, []);

   const orderAz = () =>{
    const newList = [...listProduct].sort( (a,b)=>
          a.title.localeCompare(b.title)
   );
    setListProduct(newList);
   }

   const orderZa = () =>{
    let newList = [...listProduct].sort( (a,b)=>
          a.title.localeCompare(b.title)
   );
    newList = newList.reverse();
    setListProduct(newList);
   }

   const orderPreco = () => {
    const newList = [...listProduct].sort((a, b) => b.price - a.price);
    setListProduct(newList);
  }

      return (
        <>
        <div>
          <button onClick={orderAz}>Az</button>
          <button onClick={orderZa}>Za</button>
          <button onClick={orderPreco}>Preçp maior</button>
        </div>
        <main className={styles.main}>
          {listProduct.map((products)=> 
                <div className={styles.card} key={products.id}>
                  <h2>{products.title}</h2>
                  <p>Preço: R${products.price}</p>
                  <p>Descrição: {products.description}</p>
                  <p>Categoria: {products.category}</p>
                  <p>Contagem: {products.rating.count}</p>
                  <Image width={200} height={200} src={products.image}/>
                </div>

          )}
        </main>
        </>
      );
}