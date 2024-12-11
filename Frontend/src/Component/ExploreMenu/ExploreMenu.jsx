import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

 const ExploreMenu = ({category,setCategory}) => {
      

  return (
    <div className='explore-menu' id='explore-menu'>
         <h1>Explore Our Menu</h1>
         <p className='explore-menu-text'>Welcome to Sri Murugan Cafe, home of our signature Thattu Vada! Our ovo-vegetarian menu features egg-based and protein-rich dishes crafted with fresh ingredients and authentic flavors. Perfect for students, doctors, and health enthusiasts, we serve meals that are as nutritious as they are delicious. Visit us to savor the difference!</p>
          <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                   return (<div onClick={()=> setCategory(prev => prev === item.menu_name ? "All" :item.menu_name)} key={index} className='explore-menu-list-item'> 
                    <img  src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""} />
                    <p>{item.menu_name}</p>
                   </div>)
            })}
            </div> 
            <hr />
    </div>
  )
}

export default ExploreMenu