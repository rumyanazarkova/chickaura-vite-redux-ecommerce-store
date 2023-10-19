import { useState } from "react"
import styled from "styled-components";
import { formatPrice } from "../helpers";
import { removeFav } from "../features/favorites/favoritesSlice";
import { LiaCartPlusSolid } from "react-icons/lia"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../features/cart/cartSlice";


const SingleFavoritesItem = ({ item }) => {
  const { id, name, image, price, oldPrice, colors, size, category } = item

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const [color, setColor] = useState(null);
  const [sizing, setSizing] = useState('S');


  const handleAddToCart = () => {
    if (!color) {
      setErrorMessage('Please choose a color');
      return
    } else {
      setErrorMessage(null);
    }
    if (!sizing) {
      setErrorMessage('Please choose a size');
      return
    }
    const uniqueId = id + color + sizing

    const itemToAdd = {
      id:uniqueId,
      name,
      image,
      price,
      oldPrice,
      color,
      sizing,
      category,
      qty: 1
    }
    dispatch(addToCartThunk(itemToAdd))
    setErrorMessage(null)

  }

  let allColors = []
  let allColorNames = []
  for (const colorName in colors) {

    allColorNames.push(colorName);
    allColors.push(colors[colorName])
  }

  return <Wrapper>
    <div className="img-cart">
      <button
        className="cart-btn-icon"
        onClick={handleAddToCart}
      ><LiaCartPlusSolid /></button>
      <img src={image} alt='favorites image' onClick={() => navigate(`/${category}/${id}`)} />
    </div>

    <div className="info">
      <div className="name-price">
        <p onClick={() => navigate(`/${category}/${id}`)}>{name}</p>
        <div className='price'>
          {oldPrice ?
            <p className="price-on-sale">{formatPrice(price)}</p>
            : <p>{formatPrice(price)}</p>}
          {oldPrice ?
            <p className="old-price">{formatPrice(oldPrice)}</p>
            : null}
        </div>
      </div>


      <div className="colors-container">

        {allColorNames.map((c) => {
          return <button
            key={c}
            name='color'
            style={{ background: c }}
            data-color={c}
            onClick={() => setColor(id + c)}
            className={`${color === id + c ? 'color-active' : 'color'}`}
          ></button>
        })
        }

        {color && allColorNames.map((name) => {
          if (color.includes(name)) {
            return <p key={color}>{name}</p>
          }
          return
        })}
      </div>

      <div className="size-container">
        <select name='size'
          className="size"
          value={sizing}
          onChange={(e) => setSizing(e.target.value)}>
          {size.map((s) => {
            return <option
              key={s}
              value={s}
            >{s}</option>
          })}
        </select>
      </div>

    </div>


    <div className="btns">
      {errorMessage && <p className="missing-info-alert">{errorMessage}</p>}
      <button className='cart-btn btn' onClick={handleAddToCart}>Add To Cart</button>
      <button className='remove-favs btn' onClick={() => dispatch(removeFav(item))}>Remove</button>
    </div>


  </Wrapper>
}

const Wrapper = styled.article`
    display: grid;
    gap:.3rem;
  
  img{
    width:100%; 
    cursor: pointer;
  }
  .img-cart{
    position: relative;
  }
  .cart-btn-icon{
    position: absolute;
    display: flex;
    right:1rem;
    bottom:1rem;
    background: rgba(255, 255, 255, 0.5);
    border:none;
    border-radius:50%;
    font-size: 2rem;
    padding:.5rem;
  }
  .cart-btn{
    display: none;
  }
  .info{
    display: flex;
    flex-direction: column;
    gap:.5rem;
  }
  .name-price{
  width:90%;
  display: flex;
  flex-direction: column;
  font-size: .9rem;
  font-weight:500;
  gap:.5rem;
  p{
    cursor: pointer;
  }
}
.price{
  display: flex;
  gap:.5rem;
}
.old-price{
  text-decoration: line-through;
  color:var(--clr-old-price);
}
.price-on-sale{
  color:var(--clr-light-red);
}
.colors-container,
.size-container
{
  display:flex;
  gap:.4rem;
  align-items: center;
 }
 .color{
  width: 1rem;
  height: 1rem;
  border-radius:50%;
  border:1px solid var(--clr-light-grey);
 }
 .color-active{
  width: 1rem;
  height: 1rem;
  border-radius:50%;
  border: 3px solid var(--white); 
  outline: 2px solid var(--black);
 }
 .size{
  padding: .2rem;
  width: 20%;
  margin: .3rem 0;
  border:1px solid var(--clr-old-price);
 }
.btns{
  position:relative;
  margin-top: .5rem;
}
 .missing-info-alert{
   position: absolute;
    font-size:.8rem;
    font-weight:500;
    color:var(--clr-red);
    bottom:1.8rem;
  }
.remove-favs,
.cart-btn
{
  padding:.4rem 1rem;
  font-size: .8rem;
}
@media (min-width:1000px) {
  .cart-btn-icon{
    display:none;
  }
  .btns{
    display: flex;
    gap:.5rem;
  }
  .cart-btn{
    display: inline;
  }

}


`
export default SingleFavoritesItem