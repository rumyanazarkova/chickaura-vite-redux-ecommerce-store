import { useSelector, useDispatch } from "react-redux";
import CartTotals from "../components/CartTotals";
import { removeFromCartThunk, addQtyItemThunk, removeQtyItemThunk } from "../features/cart/cartSlice";
import styled from "styled-components";
import { formatPrice } from "../helpers";
import { useNavigate } from "react-router-dom";
import { HiOutlineTrash, HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const Cart = ({ loginWithRedirect, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems)

  if (cartItems.length === 0) {
    return <article className="empty-section">
        <h3 className="heading">Your Cart</h3>
        <h5>YOUR CART IS EMPTY</h5>
        <p className="empty-section-text">Start shopping now and discover amazing products that suit your style and needs.</p>
        <button onClick={() => navigate('/')}
          className="empty-section-btn">Browse collection</button>
      </article>
   
  }

  return <Wrapper>
    <section className="items-container">
      <h3 className="heading">Your Cart</h3>
      {cartItems.map((item) => {
        const { id, name, image, price, oldPrice, colorName, sizing, category, qty } = item;
     
        const catchSizeExp=/[A-Za-z]+/
        const cleanSize = catchSizeExp.exec(sizing)

        return <article key={id} className="single-item">

          <div className="img">
            <img src={image} alt='cart image' onClick={() => navigate(`/${category}/${id}`)} />
          </div>
          <div className="info">

            <p className="name"
              onClick={() => navigate(`/${category}/${id}`)} >{name}</p>

            <div className="color-container">
              <p >Color: {colorName}</p>
            </div>

            <p className="size">Size: {cleanSize}</p>

            <div className="qty">
              <button className="qty-btn minus"
                onClick={() => dispatch(removeQtyItemThunk(item))}
              ><HiOutlineMinus /></button>
              <span> {qty}</span>
              <button className="qty-btn plus"
                onClick={() => dispatch(addQtyItemThunk(item))}
              ><HiOutlinePlus /></button>
            </div>

          </div>

          <div className="price-remove">
            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCartThunk(id))}>
              <HiOutlineTrash /><span>remove</span>
            </button>

            <div className='price'>
              {oldPrice ?
                <p className="old-price">{formatPrice(oldPrice)}</p>
                : null}
              {oldPrice ?
                <p className="price-on-sale">{formatPrice(price)}</p>
                : <p>{formatPrice(price)}</p>}

            </div>
          </div>


        </article>
      })}
    </section>

    <section className="total-price-container">
      <CartTotals loginWithRedirect={loginWithRedirect} user={user} />
    </section>
  </Wrapper>
};

const Wrapper = styled.main`
display:grid; 
gap:3rem;
.items-container{
  padding:1rem;
  display:flex;
  flex-direction: column;
  gap:2rem;
}
  .single-item{
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap:1rem;
  }
  .img{
    max-width:10rem;
  }
  img{
    width: 100%; 
  }
  .info{
  display: flex;
   flex-direction:column;
   justify-content: center;
   gap:.3rem;
  }
  .name,
  .price{
    font-weight: 500;
  }
  .color-container{
    display: flex;
    align-items: center;
    gap:.3rem;
  }
  .color-container,
  .size{
    font-size:.9rem;
  }
 
  .qty{
    color:var(--black);
    margin-top:.5rem;
    display:flex;
    width: fit-content;
    align-items:center;
    gap:.7rem;
    border:1px solid rgba(167, 166, 166, 0.5);
    font-size:1rem;
  }
  .qty-btn{
   color:var(--black); 
   background:transparent;
   border:none;
   padding:.5rem;
  }
  .plus{
    border-left:1px solid rgba(167, 166, 166, 0.5);
  }
  .minus{
    border-right:1px solid rgba(167, 166, 166, 0.5);
  }

.price-remove{
  display:flex;
  flex-direction: column;
  align-items: end;
  justify-content:space-between;
}
.price{
  display:flex;
  gap:.5rem;
}
.price-on-sale{
  color:var(--clr-red);
}
.old-price{
  color:var(--clr-light-grey);
  text-decoration:line-through;
}
  .remove-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:.2rem;
    border: none;
    background: transparent;
    font-size: 1.3rem;
    padding:.4rem 0;
    color:var(--clr-dark-grey);
    span{
      display:none;
      font-size: .9rem;
    }
  }

  .total-price-container{
  background: var(--clr-very-light-grey);
}
  @media (min-width: 600px) {
    .remove-btn span{
      display: inline;  
    }
  }

@media (min-width: 1000px) {
grid-template-columns:1fr 1fr;
.items-container{
  padding:2rem;
}
}

`

export default Cart;