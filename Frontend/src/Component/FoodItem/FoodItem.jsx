import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


 const FoodItem = ({id,name,price,description,image}) => {

  
    
  const{ cartItem,setcartitem, addTocart,removeFromcart}=useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
          <img src={image} className='food-item-image' alt="" />
          {
            !cartItem[id]
                ? <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white}></img>
                : <div className='food-item-counter'>
                   <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="" />
                   <p>{cartItem[id]}</p>
                   <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="" />
                </div>
               
          }
        </div>
        <div className='food-item-info'>
          <div className="food-item-name-rating">
            <p>{name}</p>
             <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">RS.{price}</p>
        </div>
    </div>
  )
}
export default FoodItem