import React, { useContext } from 'react'
import addbutton from '../../assets/imgs/imgProduct/addbutton.png'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
  
  const {id, productName, price, productImage, productDesc} = props.data;
  const {addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
        {""}

        <div className='img-container'>
          <img src={productImage} alt="Imagen producto" />
        </div>

        <div className='description'>
          <div className='name-container'>
            <p>
                <b className='name'>{productName}</b>
            </p>
          </div>

          <div className='horizontal-line'></div>

          <p className='prodDesc'>{productDesc}</p>

          <div className='price-container'>
            <p>
                      <b className='price'>${price}</b>
                      <b className='amount'>{cartItemAmount > 0 && <>(x{cartItemAmount})</>}</b>
            </p>
            <button onClick={()=> addToCart(id)}><img src={addbutton} alt="anadir a carrito" className='addimg'/></button>
          </div>

          </div>
    
    </div>
  )
}