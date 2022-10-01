import React from 'react'
import { ReactComponent as Star } from './img/Star.svg';
import './Cards.css'
import MyContext from '../../../Context'

function Cards() {
  const{count,setCount} = React.useContext(MyContext);

  const userResponse = [];
  const [allResponses, setAllResponses] = React.useState([]);
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
                userResponse.push({
                  id: data[dataItem].id,
                  oldPrice: data[dataItem].oldPrice,
                  newPrice: data[dataItem].newPrice,
                productImage: data[dataItem].productImage,
                productName: data[dataItem].productName,
               })
          }
          setAllResponses(userResponse);
        })
    setStopInfiniteLoop(true);
  }
  return ( 
    <div className="reponse-container">
  <p className='product'><h3>Product</h3></p>
<div className="response-row">
  
{
  allResponses.map((item) =>(
    <div className='response-item-cards' key={item.id}>
       <img src={item.productImage} alt="productImage" />
       <p className='response-productName'>{item.productName}</p>            
       <div className='price-tag'>
         <div className="star-icons">
         <span className='response-star'><Star/><Star/><Star/><Star/><Star/></span>
         </div>
         <div className="price">
         <span className='response-oldPrice'>{item.oldPrice}/-</span>
         <span className='response-newPrice'>{item.newPrice}/-</span>
         </div>
         </div>
       {/* <button className="addToCart"> <h3>Add to Cart</h3></button> */}
       <button className="addToCart" onClick={() => setCount( count + 1)}> <h3>Add to Cart</h3></button>
     </div>
 ))
 
}
</div>
</div>
  )
}

export default Cards