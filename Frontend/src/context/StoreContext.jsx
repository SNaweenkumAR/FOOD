import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider =(props) => {

    const [cartItem,setcartitem] =useState({});

    const addTocart = (itemId) => {
         if(!cartItem[itemId]){
            setcartitem((prev) => ({...prev,[itemId]:1}))
         }
         else{
            setcartitem( (prev) =>({...prev,[itemId]:prev[itemId]+1}) )
         }
    }

    const removeFromcart =(itemId) => {
    setcartitem( (prev) =>({...prev,[itemId]:prev[itemId]-1}) );
    }

const getTotalCartAmount =() => {
    let totalAmount = 0;
    for(const item in cartItem){
        if( cartItem[item] > 0){
            const itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price* cartItem[item];
        }
    }
    return totalAmount;
}
      
// useEffect( () => {
//     console.log(cartItem);
    
// } ,[cartItem])
      
    const contextValue = {
            food_list ,
            cartItem,
            setcartitem,
            addTocart,
            removeFromcart,
            getTotalCartAmount
    }
      

    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider