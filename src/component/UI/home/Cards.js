import React from 'react'
import { ReactComponent as Star } from './img/Star.svg';
import './Cards.css'
import MyContext from '../../../Context'

function Cards() {
  const{count,setCount} = React.useContext(MyContext);

  const userProducts = [];
  const [allProducts, setAllProducts] = React.useState([]);
  const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);
  
  if(!stopInfiniteLoop) 
  {
      fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
          for(const dataItem in data){
            console.log(
                data[dataItem].id,
                data[dataItem].oldPrice,
                data[dataItem].newPrice,
                data[dataItem].productImage,
                data[dataItem].productName,
                );
                userProducts.push({
                  id: data[dataItem].id,
                  oldPrice: data[dataItem].oldPrice,
                  newPrice: data[dataItem].newPrice,
                productImage: data[dataItem].productImage,
                productName: data[dataItem].productName,
               })
          }
          setAllProducts(userProducts);
        })
    setStopInfiniteLoop(true);
  }
  return ( 
    <div className="product-container">
  <p className='product'><h3>Product</h3></p>
<div className="product-row">
  
{
  allProducts.map((item) =>(
    <div className='product-item-cards' key={item.id}>
       <img src={item.productImage} alt="productImage" />
       <p className='product-productName'>{item.productName}</p>            
       <div className='price-tag'>
         <div className="star-icons">
         <span className='product-star'><Star/><Star/><Star/><Star/><Star/></span>
         </div>
         <div className="price">
         <span className='product-oldPrice'>{item.oldPrice}/-</span>
         <span className='product-newPrice'>{item.newPrice}/-</span>
         </div>
         </div>
       {/* <button className="addToCart"> <h3>Add to Cart</h3></button> */}
       <button className="addToCart" onClick={() => setCount( count + 1)}> <h3>ADD TO CART</h3></button>
     </div>
 ))
 
}
</div>
</div>
  )
}

export default Cards