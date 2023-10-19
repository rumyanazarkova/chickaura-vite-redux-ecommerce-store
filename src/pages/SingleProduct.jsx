import { useParams } from "react-router-dom"
import {
  useGetSingleItemQuery,
} from "../features/api/apiSlice";
import { useState } from "react";
import styled from 'styled-components';
import { formatPrice } from "../helpers";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { addToCartThunk } from "../features/cart/cartSlice";
import { addFav } from "../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";


const SingleProduct = () => {
  const dispatch = useDispatch()
  const { product, id } = useParams();

  const { data, isLoading, isError } = useGetSingleItemQuery({ section: product, id });

  const [errorMessage, setErrorMessage] = useState(null);
  const [color, setColor] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [sizing, setSizing] = useState(null);



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (data) {

    const { id, name, image, price, oldPrice, colors, size, category, imagesForCarousel } = data;

    const handleAddToCart = () => {

      if (!color) {
        setErrorMessage('Please choose a color');
        return
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
        colorName,
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
      <article>

        <div className="carousel">
          <ImageCarousel images={imagesForCarousel} />
        </div>

        <div className="info">
          <div className="name-price">
            <p>{name}</p>
            <div className='price'>
              {oldPrice ?
                <p className="price-on-sale">{formatPrice(price)}</p>
                : <p>{formatPrice(price)}</p>}
              {oldPrice ?
                <p className="old-price">{formatPrice(oldPrice)}</p>
                : null}
            </div>
          </div>

          <div className="color-size">
            <div className="clr-big-container">
              <div className="color-text"><p>Choose a color:</p>
                {color && allColorNames.map((name) => {
                  if (color.includes(name)) {
                    return <p key={color}>{name}</p>
                  }
                  return
                })}
              </div>
              <div className="colors-container">
                {allColorNames.map((c) => {
                  return <button
                    key={c}
                    name='color'
                    style={{ background: c }}
                    data-color={c}
                    onClick={() => {
                      setColor(id + c)
                      setColorName(c)
                    }}
                    className={`${color === id + c ? 'color-active' : 'color'}`}
                  ></button>
                })
                }


              </div>
            </div>

            <div className="size-container">
              <p>Choose a size:</p>
              <div className="size">
                {size.map((s) => {
                  return <button
                    key={s}
                    onClick={() => setSizing(id + s)}
                    className={`${sizing === id + s ? 'size-btn-active' : 'size-btn'}`}
                  >{s}</button>
                })}
              </div>
            </div>
          </div>

          <div className="cart-message-container">
            {errorMessage && <p className="missing-info-alert">{errorMessage}</p>}
            <button className='cart-btn btn'
              onClick={handleAddToCart}
            >
              <IoBagOutline />
              Add To Cart
            </button>
            <button className='cart-btn btn'
              onClick={()=>dispatch(addFav({item:data,id}))}
            >
              <IoHeartOutline/>
              Add To Favorites
            </button>
          </div>

        </div>

      </article>
    </Wrapper>

  }
}

const Wrapper = styled.main`

display:grid;

 article{
  padding: 1.5rem 2rem;
  display:flex;
  flex-direction:column; 
  gap:1rem; 
 }
 .colors-container,
 .size{
  display:flex;
  gap:.4rem;
 }
 .color{
  width: 1.2rem;
  height: 1.2rem;
  border-radius:50%;
   border: 1px solid var(--clr-light-grey); 
 }
 .color-active{
  width: 1.2rem;
  height: 1.2rem;
  border-radius:50%;
  border: 4px solid var(--white); 
  outline: 3px solid var(--black);
 }
 .color-text{
  display:flex;
  gap:.4rem;
}
.size-btn{
  background:var(--white);
  padding: .7rem 1rem;
  border: 1px solid #bebebe;
  color: var(--black);
}
.size-btn-active{
  background:var(--white);
  padding: .7rem 1rem;
  border: 3px solid var(--black);
  color: var(--black);
} 
.name-price,
.color-size
{
  width:100%; 
  display: flex;
  flex-direction: column; 
  justify-content:start;
  font-size: 1.2rem;
  gap:.5rem;
  padding:.5rem 1rem;
}
.price{
  display: flex;
  gap:.7rem;
  font-weight:500;
}
.old-price{
  text-decoration: line-through;
  color:var(--clr-old-price);
}
.price-on-sale{
  color:var(--clr-red);
  font-weight:500;
}
.color-size{
  gap:1rem;
}
.clr-big-container,
.size-container{
  display: grid;
  gap:.5rem;
} 
.cart-message-container{
  position:relative;
}
.missing-info-alert{
  position:absolute;
  bottom:8.3rem;
  left:1rem;
  color:var(--clr-red);
  font-weight: 500;
}
.cart-btn{
  position:relative;
  display:flex;
  width:100%;
  font-size:1.3rem;
  align-items:center;
  justify-content:center;
  gap:.5rem;
  padding:  1rem;
  margin-top: 1.2rem;
}

@media (min-width: 1000px) {
  article{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:3rem;
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1rem; 
  }
.name-price,
.color-size
{
  padding:.5rem 0;
}
.missing-info-alert{
 left:0;
}
.cart-btn{
  margin-top: 1rem;
}
}

@media (min-width: 1600px) {
  padding: 3em 10em;
  article{
  gap:10em; 
 }
  .favs-btn{
  top:2rem;
  left:2rem;
  font-size:2.5rem;
}
.name-price,
.color-size{
  font-size:1.3rem;
  }
.size-btn,
.size-btn-active{
  font-size:1.2rem;
}  
}


`


export default SingleProduct