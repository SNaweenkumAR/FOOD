import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const{cartItem,food_list,removeFromcart,getTotalCartAmount} =useContext(StoreContext);
  
  const navigate =useNavigate()

  return (
    <div className='cart'>
            <div className="cart-items">
              <div className="cart-items-title">
                 <p>Items</p>
                 <p>Title</p>
                 <p>Price</p>
                 <p>Quantity</p>
                 <p>Total</p>
                 <p>Remove</p>
              </div>
              <br />
              <hr />
                 {food_list.map( (item,index) => {
                  if( cartItem[item._id] > 0){
                    return (
                      <>
                      <div key={index} className="cart-items-title cart-items-item"> 
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p> Rs.{item.price}</p>
                        <p>{cartItem[item._id]}</p>
                        <p> Rs.{item.price * cartItem[item._id]}</p>
                        <p className='cross' onClick={() => removeFromcart(item._id) }>x</p>
                      </div>
                      <hr />
                      </>
                    )
                  }
                 })}
            </div>
            <div className="cart-bottom">
              
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  
                  <div className="cart-total-details">
                    <p>Sub-Total</p>
                     <p>Rs.{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery-Fee</p>
                    <p>Rs.{getTotalCartAmount() === 0 ? 0 :50}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                     <b>Total</b>
                     <b> Rs.{getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 50}</b>
                  </div>
                 
                </div>
                <button onClick={() => navigate('/order')}>Proceed to checkout</button>
              </div>
              <div className="cart-promo-code">
                <div>
                  <p>If you Promo-Code ,Enter it here</p>
                  <div className="cart-promo-code-input">
                    <input type="text"  placeholder='Promo-Code'/>
                    <button type='submit'>Submit</button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}
export  default Cart
